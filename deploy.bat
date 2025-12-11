@echo off
echo ========================================
echo    Deploying Riley's Portfolio
echo ========================================
echo.

echo Checking if Git is installed...
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Git is not installed or not in PATH
    echo Please install Git from https://git-scm.com
    pause
    exit /b 1
)

echo Git is installed!
echo.

echo Adding all files...
git add .

echo Committing changes...
git commit -m "Optimize scroll performance and parallax effects for smooth 60fps scrolling"

echo Pushing to GitHub...
git push origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo    SUCCESS! Your portfolio is deployed!
    echo ========================================
    echo.
    echo Your changes are now live on GitHub and Vercel!
    echo Scroll performance optimizations are now deployed.
    echo.
    echo Vercel will automatically deploy the changes in 1-2 minutes.
    echo Check your Vercel dashboard to see the deployment progress.
    echo.
) else (
    echo.
    echo There was an error pushing to GitHub.
    echo You may need to authenticate or check your repository settings.
    echo.
)

echo Deployment complete!
pause

