@echo off
chcp 65001 >nul
title Собрать архив для ChatGPT
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0for-gpt.ps1"
echo.
pause
