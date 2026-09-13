# Готовит архив актуальной версии проекта, чтобы приложить его в чат с ChatGPT.
# Запуск: двойной клик по for-gpt.bat

$ErrorActionPreference = 'Stop'
$repo = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $repo

Write-Host "Забираю актуальную версию с GitHub..." -ForegroundColor Cyan
git pull --rebase
if ($LASTEXITCODE -ne 0) {
  Write-Host ""
  Write-Host "Не удалось обновиться с GitHub. Покажи это окно мужу." -ForegroundColor Red
  exit 1
}

$out = Join-Path $HOME 'Downloads\espanol-current.zip'
if (Test-Path $out) { Remove-Item $out -Force }

# в архив идут только файлы проекта: без .git и без служебных скриптов публикации
$skip = @('release-zip.ps1','release-zip.bat','for-gpt.ps1','for-gpt.bat','release.bat')
$tmp = Join-Path $env:TEMP ("espanol_pack_" + [guid]::NewGuid().ToString('N').Substring(0,8))
New-Item -ItemType Directory -Path $tmp | Out-Null
Get-ChildItem $repo -File -Force | Where-Object { $_.Name -notin $skip -and $_.Name -ne '.gitignore' } |
  ForEach-Object { Copy-Item $_.FullName $tmp }

Compress-Archive -Path (Join-Path $tmp '*') -DestinationPath $out -Force
Remove-Item $tmp -Recurse -Force -ErrorAction SilentlyContinue

Write-Host ""
Write-Host "Готово. Архив лежит здесь:" -ForegroundColor Green
Write-Host "  $out"
Write-Host ""
Write-Host "Что дальше:" -ForegroundColor Cyan
Write-Host "  1. Новый чат в ChatGPT"
Write-Host "  2. Вставить текст из PROMPT-FOR-GPT.md"
Write-Host "  3. Приложить этот архив и написать, что нужно изменить"
Write-Host "  4. Готовый zip перетащить на release-zip.bat"
explorer.exe "/select,`"$out`""
