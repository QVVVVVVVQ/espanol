param([string]$Zip)

# Раскладывает zip из ChatGPT по папке репозитория и публикует изменения.
# Запуск: перетащить zip на release-zip.bat, либо просто запустить release-zip.bat
# (тогда берётся самый свежий zip из Загрузок).

$ErrorActionPreference = 'Stop'
$repo = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $repo

function Fail($msg) { Write-Host ""; Write-Host $msg -ForegroundColor Red; Write-Host "Покажи это окно мужу."; exit 1 }

# --- 1. Находим архив ---
if (-not $Zip) {
  $dl = Join-Path $HOME 'Downloads'
  $cand = Get-ChildItem $dl -Filter *.zip -ErrorAction SilentlyContinue | Sort-Object LastWriteTime -Descending | Select-Object -First 1
  if (-not $cand) { Fail "В Загрузках нет ни одного zip. Перетащи архив на release-zip.bat." }
  $Zip = $cand.FullName
  Write-Host "Беру самый свежий архив из Загрузок:" -ForegroundColor Cyan
  Write-Host "  $($cand.Name)  ($($cand.LastWriteTime))"
  $ans = Read-Host "Это он? [Y/n]"
  if ($ans -and $ans -notmatch '^[YyДд]') { Fail "Отменено. Перетащи нужный zip прямо на release-zip.bat." }
}
if (-not (Test-Path $Zip)) { Fail "Файл не найден: $Zip" }

# --- 2. Распаковываем во временную папку ---
$tmp = Join-Path $env:TEMP ("espanol_" + [guid]::NewGuid().ToString('N').Substring(0,8))
New-Item -ItemType Directory -Path $tmp | Out-Null
Expand-Archive -LiteralPath $Zip -DestinationPath $tmp -Force

# ГПТ часто кладёт всё в одну вложенную папку — спускаемся до уровня с index.html
$src = $tmp
for ($i = 0; $i -lt 5; $i++) {
  if (Test-Path (Join-Path $src 'index.html')) { break }
  $dirs = @(Get-ChildItem $src -Directory)
  $files = @(Get-ChildItem $src -File)
  if ($dirs.Count -eq 1 -and $files.Count -eq 0) { $src = $dirs[0].FullName } else { break }
}
if (-not (Test-Path (Join-Path $src 'index.html'))) {
  Fail "В архиве нет index.html. Похоже, ГПТ прислал не весь проект — попроси архив целиком."
}

# --- 3. Подтягиваем чужие правки ДО копирования ---
Write-Host ""
Write-Host "Забираю последние правки с GitHub..." -ForegroundColor Cyan
git pull --rebase --autostash
if ($LASTEXITCODE -ne 0) {
  git rebase --abort *> $null
  Fail "Не удалось подтянуть правки с GitHub: конфликт версий. Ничего не сломано, но нужна ручная разборка."
}

# --- 4. Копируем поверх, ничего не удаляя ---
Copy-Item -Path (Join-Path $src '*') -Destination $repo -Recurse -Force
Remove-Item $tmp -Recurse -Force -ErrorAction SilentlyContinue

# Служебные файлы всегда берём из репозитория, даже если ГПТ положил свои версии
$protected = @('sw.js','manifest.webmanifest','icon-192.png','icon-512.png','release-zip.ps1','release-zip.bat','for-gpt.ps1','for-gpt.bat','migrate.ps1','migrate.bat')
foreach ($f in $protected) {
  git ls-files --error-unmatch $f *> $null
  if ($LASTEXITCODE -eq 0) { git checkout -- $f *> $null }
}
if (-not (Test-Path (Join-Path $repo '.nojekyll'))) { New-Item -ItemType File -Path (Join-Path $repo '.nojekyll') | Out-Null }

# --- 5. Возвращаем PWA-теги в страницы, где их срезали ---
$block = '<link rel="manifest" href="manifest.webmanifest"><meta name="theme-color" content="#f5f3ee"><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-title" content="Espanol"><link rel="apple-touch-icon" href="icon-192.png"><link rel="icon" href="icon-192.png"><script>if("serviceWorker" in navigator&&(location.protocol==="https:"||location.hostname==="localhost"))addEventListener("load",function(){navigator.serviceWorker.register("sw.js").catch(function(){})});</script>'
$utf8 = New-Object System.Text.UTF8Encoding($false)
foreach ($h in Get-ChildItem $repo -Filter *.html -File) {
  $s = [System.IO.File]::ReadAllText($h.FullName, [System.Text.Encoding]::UTF8)
  if ($s -match 'manifest\.webmanifest') { continue }
  if ($s -notmatch '(?i)</head>') { Write-Host "  $($h.Name): нет </head>, пропущен" -ForegroundColor Yellow; continue }
  $s = [regex]::Replace($s, '(?i)</head>', ($block -replace '\$','$$$$') + '</head>', 1)
  [System.IO.File]::WriteAllText($h.FullName, $s, $utf8)
  Write-Host "  $($h.Name): PWA-теги возвращены" -ForegroundColor Yellow
}

# --- 6. Показываем, что меняется, и публикуем ---
git add -A
Write-Host ""
Write-Host "=== Что уйдёт на сайт ===" -ForegroundColor Cyan
git status --short
Write-Host ""

git diff --cached --quiet
if ($LASTEXITCODE -eq 0) { Write-Host "Изменений нет, публиковать нечего." -ForegroundColor Green; exit 0 }

$msg = Read-Host "Опиши правку одной строкой"
if (-not $msg) { $msg = "обновление тренажёра" }

git commit -m $msg
if ($LASTEXITCODE -ne 0) { Fail "Коммит не прошёл." }
git push
if ($LASTEXITCODE -ne 0) { Fail "Пуш не прошёл." }

Write-Host ""
Write-Host "Готово. Через 1-2 минуты обновится https://qvvvvvvvq.github.io/espanol/" -ForegroundColor Green
Write-Host "На телефоне открыть и обновить страницу." -ForegroundColor Green
