@echo off
REM Quick Portfolio Deployment Script for Windows

echo ============================================
echo Portfolio Deployment Helper
echo ============================================
echo.
echo STEP 1: Create a GitHub repository
echo - Go to: https://github.com/new
echo - Name it: portfolio
echo - Make it PUBLIC
echo - Click "Create repository"
echo.
echo STEP 2: Copy your repository URL and paste below
echo Example: https://github.com/Nisith116/portfolio.git
set /p REPO_URL="Enter your repository URL: "
echo.
echo STEP 3: Pushing to GitHub...
git remote add origin %REPO_URL%
git branch -M main
git push -u origin main
echo.
echo ✓ Code pushed to GitHub!
echo.
echo STEP 4: Building and deploying...
npm run deploy
echo.
echo ✓ Deployment complete!
echo.
echo Your portfolio is now live at:
echo https://nisith116.github.io/portfolio
echo.
pause
