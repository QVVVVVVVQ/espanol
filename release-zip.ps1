param([string]$Zip)

# Р Р°СЃРєР»Р°РґС‹РІР°РµС‚ zip РёР· ChatGPT РїРѕ РїР°РїРєРµ СЂРµРїРѕР·РёС‚РѕСЂРёСЏ Рё РїСѓР±Р»РёРєСѓРµС‚ РёР·РјРµРЅРµРЅРёСЏ.
# Р—Р°РїСѓСЃРє: РїРµСЂРµС‚Р°С‰РёС‚СЊ zip РЅР° release-zip.bat, Р»РёР±Рѕ РїСЂРѕСЃС‚Рѕ Р·Р°РїСѓСЃС‚РёС‚СЊ release-zip.bat
# (С‚РѕРіРґР° Р±РµСЂС‘С‚СЃСЏ СЃР°РјС‹Р№ СЃРІРµР¶РёР№ zip РёР· Р—Р°РіСЂСѓР·РѕРє).

$ErrorActionPreference = 'Stop'
$repo = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $repo

function Fail($msg) { Write-Host ""; Write-Host $msg -ForegroundColor Red; Write-Host "РџРѕРєР°Р¶Рё СЌС‚Рѕ РѕРєРЅРѕ РјСѓР¶Сѓ."; exit 1 }

# --- 1. РќР°С…РѕРґРёРј Р°СЂС…РёРІ ---
if (-not $Zip) {
  $dl = Join-Path $HOME 'Downloads'
  $cand = Get-ChildItem $dl -Filter *.zip -ErrorAction SilentlyContinue | Sort-Object LastWriteTime -Descending | Select-Object -First 1
  if (-not $cand) { Fail "Р’ Р—Р°РіСЂСѓР·РєР°С… РЅРµС‚ РЅРё РѕРґРЅРѕРіРѕ zip. РџРµСЂРµС‚Р°С‰Рё Р°СЂС…РёРІ РЅР° release-zip.bat." }
  $Zip = $cand.FullName
  Write-Host "Р‘РµСЂСѓ СЃР°РјС‹Р№ СЃРІРµР¶РёР№ Р°СЂС…РёРІ РёР· Р—Р°РіСЂСѓР·РѕРє:" -ForegroundColor Cyan
  Write-Host "  $($cand.Name)  ($($cand.LastWriteTime))"
  $ans = Read-Host "Р­С‚Рѕ РѕРЅ? [Y/n]"
  if ($ans -and $ans -notmatch '^[YyР”Рґ]') { Fail "РћС‚РјРµРЅРµРЅРѕ. РџРµСЂРµС‚Р°С‰Рё РЅСѓР¶РЅС‹Р№ zip РїСЂСЏРјРѕ РЅР° release-zip.bat." }
}
if (-not (Test-Path $Zip)) { Fail "Р¤Р°Р№Р» РЅРµ РЅР°Р№РґРµРЅ: $Zip" }

# --- 2. Р Р°СЃРїР°РєРѕРІС‹РІР°РµРј РІРѕ РІСЂРµРјРµРЅРЅСѓСЋ РїР°РїРєСѓ ---
$tmp = Join-Path $env:TEMP ("espanol_" + [guid]::NewGuid().ToString('N').Substring(0,8))
New-Item -ItemType Directory -Path $tmp | Out-Null
Expand-Archive -LiteralPath $Zip -DestinationPath $tmp -Force

# Р“РџРў С‡Р°СЃС‚Рѕ РєР»Р°РґС‘С‚ РІСЃС‘ РІ РѕРґРЅСѓ РІР»РѕР¶РµРЅРЅСѓСЋ РїР°РїРєСѓ вЂ” СЃРїСѓСЃРєР°РµРјСЃСЏ РґРѕ СѓСЂРѕРІРЅСЏ СЃ index.html
$src = $tmp
for ($i = 0; $i -lt 5; $i++) {
  if (Test-Path (Join-Path $src 'index.html')) { break }
  $dirs = @(Get-ChildItem $src -Directory)
  $files = @(Get-ChildItem $src -File)
  if ($dirs.Count -eq 1 -and $files.Count -eq 0) { $src = $dirs[0].FullName } else { break }
}
if (-not (Test-Path (Join-Path $src 'index.html'))) {
  Fail "Р’ Р°СЂС…РёРІРµ РЅРµС‚ index.html. РџРѕС…РѕР¶Рµ, Р“РџРў РїСЂРёСЃР»Р°Р» РЅРµ РІРµСЃСЊ РїСЂРѕРµРєС‚ вЂ” РїРѕРїСЂРѕСЃРё Р°СЂС…РёРІ С†РµР»РёРєРѕРј."
}

# --- 3. РџРѕРґС‚СЏРіРёРІР°РµРј С‡СѓР¶РёРµ РїСЂР°РІРєРё Р”Рћ РєРѕРїРёСЂРѕРІР°РЅРёСЏ ---
Write-Host ""
Write-Host "Р—Р°Р±РёСЂР°СЋ РїРѕСЃР»РµРґРЅРёРµ РїСЂР°РІРєРё СЃ GitHub..." -ForegroundColor Cyan
git pull --rebase
if ($LASTEXITCODE -ne 0) { Fail "РќРµ СѓРґР°Р»РѕСЃСЊ РїРѕРґС‚СЏРЅСѓС‚СЊ РїСЂР°РІРєРё СЃ GitHub (РІРѕР·РјРѕР¶РµРЅ РєРѕРЅС„Р»РёРєС‚)." }

# --- 4. РљРѕРїРёСЂСѓРµРј РїРѕРІРµСЂС…, РЅРёС‡РµРіРѕ РЅРµ СѓРґР°Р»СЏСЏ ---
Copy-Item -Path (Join-Path $src '*') -Destination $repo -Recurse -Force
Remove-Item $tmp -Recurse -Force -ErrorAction SilentlyContinue

# РЎР»СѓР¶РµР±РЅС‹Рµ С„Р°Р№Р»С‹ РІСЃРµРіРґР° Р±РµСЂС‘Рј РёР· СЂРµРїРѕР·РёС‚РѕСЂРёСЏ, РґР°Р¶Рµ РµСЃР»Рё Р“РџРў РїРѕР»РѕР¶РёР» СЃРІРѕРё РІРµСЂСЃРёРё
$protected = @('sw.js','manifest.webmanifest','icon-192.png','icon-512.png','release-zip.ps1','release-zip.bat','release.bat')
foreach ($f in $protected) {
  git ls-files --error-unmatch $f *> $null
  if ($LASTEXITCODE -eq 0) { git checkout -- $f *> $null }
}
if (-not (Test-Path (Join-Path $repo '.nojekyll'))) { New-Item -ItemType File -Path (Join-Path $repo '.nojekyll') | Out-Null }

# --- 5. Р’РѕР·РІСЂР°С‰Р°РµРј PWA-С‚РµРіРё РІ СЃС‚СЂР°РЅРёС†С‹, РіРґРµ РёС… СЃСЂРµР·Р°Р»Рё ---
$block = '<link rel="manifest" href="manifest.webmanifest"><meta name="theme-color" content="#f5f3ee"><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-title" content="Espanol"><link rel="apple-touch-icon" href="icon-192.png"><link rel="icon" href="icon-192.png"><script>if("serviceWorker" in navigator&&(location.protocol==="https:"||location.hostname==="localhost"))addEventListener("load",function(){navigator.serviceWorker.register("sw.js").catch(function(){})});</script>'
$utf8 = New-Object System.Text.UTF8Encoding($false)
foreach ($h in Get-ChildItem $repo -Filter *.html -File) {
  $s = [System.IO.File]::ReadAllText($h.FullName, [System.Text.Encoding]::UTF8)
  if ($s -match 'manifest\.webmanifest') { continue }
  if ($s -notmatch '(?i)</head>') { Write-Host "  $($h.Name): РЅРµС‚ </head>, РїСЂРѕРїСѓС‰РµРЅ" -ForegroundColor Yellow; continue }
  $s = [regex]::Replace($s, '(?i)</head>', ($block -replace '\$','$$$$') + '</head>', 1)
  [System.IO.File]::WriteAllText($h.FullName, $s, $utf8)
  Write-Host "  $($h.Name): PWA-С‚РµРіРё РІРѕР·РІСЂР°С‰РµРЅС‹" -ForegroundColor Yellow
}

# --- 6. РџРѕРєР°Р·С‹РІР°РµРј, С‡С‚Рѕ РјРµРЅСЏРµС‚СЃСЏ, Рё РїСѓР±Р»РёРєСѓРµРј ---
git add -A
Write-Host ""
Write-Host "=== Р§С‚Рѕ СѓР№РґС‘С‚ РЅР° СЃР°Р№С‚ ===" -ForegroundColor Cyan
git status --short
Write-Host ""

git diff --cached --quiet
if ($LASTEXITCODE -eq 0) { Write-Host "РР·РјРµРЅРµРЅРёР№ РЅРµС‚, РїСѓР±Р»РёРєРѕРІР°С‚СЊ РЅРµС‡РµРіРѕ." -ForegroundColor Green; exit 0 }

$msg = Read-Host "РћРїРёС€Рё РїСЂР°РІРєСѓ РѕРґРЅРѕР№ СЃС‚СЂРѕРєРѕР№"
if (-not $msg) { $msg = "РѕР±РЅРѕРІР»РµРЅРёРµ С‚СЂРµРЅР°Р¶С‘СЂР°" }

git commit -m $msg
if ($LASTEXITCODE -ne 0) { Fail "РљРѕРјРјРёС‚ РЅРµ РїСЂРѕС€С‘Р»." }
git push
if ($LASTEXITCODE -ne 0) { Fail "РџСѓС€ РЅРµ РїСЂРѕС€С‘Р»." }

Write-Host ""
Write-Host "Р“РѕС‚РѕРІРѕ. Р§РµСЂРµР· 1-2 РјРёРЅСѓС‚С‹ РѕР±РЅРѕРІРёС‚СЃСЏ https://qvvvvvvvq.github.io/espanol/" -ForegroundColor Green
Write-Host "РќР° С‚РµР»РµС„РѕРЅРµ РѕС‚РєСЂС‹С‚СЊ Рё РѕР±РЅРѕРІРёС‚СЊ СЃС‚СЂР°РЅРёС†Сѓ." -ForegroundColor Green


