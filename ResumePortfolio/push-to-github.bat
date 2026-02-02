@echo off
echo 正在初始化 Git repository...

cd /d "c:\Users\DCT\.gemini\antigravity\scratch\ResumePortfolio"

git init
git config user.name "Chaogga0116"
git config user.email "a0963181933@gmail.com"
git add .
git commit -m "Initial commit - 履歷網站"
git branch -M main
git remote add origin https://github.com/Chaogga0116/personal_introduce.git
git push -u origin main

echo.
echo 完成！專案已推送到 GitHub
pause
