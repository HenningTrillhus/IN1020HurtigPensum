# Deployer til produksjon og rydder bort gamle deployments etterpå, så lagringen på Vercel ikke fylles opp.
npx --yes vercel --prod --yes
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
& "$PSScriptRoot\cleanup-deploys.ps1"
