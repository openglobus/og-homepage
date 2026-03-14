# Simple browser test script
$url = "http://localhost:5173/"
$screenshotsDir = Join-Path $PSScriptRoot "screenshots"

# Create screenshots directory
if (-not (Test-Path $screenshotsDir)) {
    New-Item -ItemType Directory -Path $screenshotsDir | Out-Null
}

Write-Host "Opening $url in default browser..."
Write-Host "Please manually verify the following:"
Write-Host "1) The page renders without visible errors"
Write-Host "2) Hero section is visible"
Write-Host "3) Scroll down to verify Industry section with images loads"
Write-Host "4) Scroll to footer"
Write-Host ""
Write-Host "Screenshots directory: $screenshotsDir"

Start-Process $url
