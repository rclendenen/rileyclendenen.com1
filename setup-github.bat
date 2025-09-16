@echo off
echo ========================================
echo    Riley Clendenen Portfolio Setup
echo ========================================
echo.

echo Checking if Git is installed...
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Git is not installed or not in PATH
    echo Please install Git from https://git-scm.com
    echo Then restart this script
    pause
    exit /b 1
)

echo Git is installed!
echo.

echo Initializing Git repository...
git init

echo Adding all files...
git add .

echo Making initial commit...
git commit -m "Initial portfolio website setup"

echo.
echo ========================================
echo    NEXT STEPS:
echo ========================================
echo.
echo 1. Go to https://github.com and create a new repository
echo    - Name: rileyclendenen.com
echo    - Make it PUBLIC
echo    - DON'T initialize with README
echo.
echo 2. Copy the repository URL (it will look like):
echo    https://github.com/YOUR_USERNAME/rileyclendenen.com.git
echo.
echo 3. Run this command (replace YOUR_USERNAME):
echo    git remote add origin https://github.com/YOUR_USERNAME/rileyclendenen.com.git
echo.
echo 4. Push to GitHub:
echo    git push -u origin main
echo.
echo ========================================
echo.

set /p repo_url="Enter your GitHub repository URL (or press Enter to skip): "
if not "%repo_url%"=="" (
    echo Adding remote repository...
    git remote add origin %repo_url%
    
    echo Pushing to GitHub...
    git push -u origin main
    
    if %errorlevel% equ 0 (
        echo.
        echo SUCCESS! Your portfolio is now on GitHub!
        echo Next: Go to https://vercel.com to deploy
    ) else (
        echo.
        echo There was an error pushing to GitHub.
        echo You may need to authenticate or check your repository URL.
    )
)

echo.
echo Setup complete! Check GITHUB_SETUP.md for troubleshooting help.
pause

