@echo off
chcp 65001 >nul
title Публикация тренажёра
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0release-zip.ps1" %1
echo.
pause
