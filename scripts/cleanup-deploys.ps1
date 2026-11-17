# Sletter alle gamle deployments på Vercel og beholder den nyeste (den som ligger ute).
# Hver deploy lagrer en hel kopi av siden (flere GB med videoer), og gratisplanen har 10 GB lagring.
#
# Bruk, fra prosjektmappen i din egen terminal:
#   ./scripts/cleanup-deploys.ps1            sletter alle unntatt den nyeste
#   ./scripts/cleanup-deploys.ps1 -Beholde 2 beholder de to nyeste
#   ./scripts/cleanup-deploys.ps1 -Prov      viser bare hva som ville blitt slettet
param(
  [int]$Beholde = 1,
  [switch]$Prov
)

$ErrorActionPreference = 'Continue'
if ($Beholde -lt 1) { $Beholde = 1 }

function Hent-Deployments {
  # Lista er sortert med nyeste først. Vercel viser ca. 20 om gangen.
  $out = npx --yes vercel ls --yes 2>&1 | Out-String
  @([regex]::Matches($out, 'https://(in1020-hurtig-pensum-[a-z0-9]+-henning-trillhus\.vercel\.app)') |
    ForEach-Object { $_.Groups[1].Value } | Select-Object -Unique)
}

$runde = 0
$slettet = 0
$feilet = @()

while ($true) {
  $runde++
  $urls = Hent-Deployments
  if ($urls.Count -le $Beholde) {
    if ($runde -eq 1) { Write-Host "Ingen gamle deployments å slette ($($urls.Count) ligger ute)." }
    break
  }

  $gamle = @($urls | Select-Object -Skip $Beholde) | Where-Object { $feilet -notcontains $_ }
  if ($gamle.Count -eq 0) { break }

  Write-Host ("Runde ${runde}: beholder " + (($urls | Select-Object -First $Beholde) -join ', ') + " og sletter " + $gamle.Count + " eldre.")
  if ($Prov) { $gamle | ForEach-Object { Write-Host "  ville slettet $_" }; break }

  foreach ($u in $gamle) {
    # Én og én, så én feil ikke stopper resten.
    npx --yes vercel rm $u --yes 2>&1 | Out-Null
    if ($LASTEXITCODE -eq 0) {
      $slettet++
      Write-Host "  slettet $u"
    } else {
      $feilet += $u
      Write-Host "  KLARTE IKKE å slette $u"
    }
  }
  # Er det flere enn én side med deployments, tar neste runde resten.
}

if (-not $Prov) {
  Write-Host ""
  Write-Host "Ferdig: $slettet slettet" -NoNewline
  if ($feilet.Count -gt 0) {
    Write-Host ", $($feilet.Count) feilet." -ForegroundColor Yellow
    Write-Host "Hvis alle feilet, kjør skriptet i en vanlig terminal (ikke gjennom en assistent), og sjekk at du er logget inn med: npx vercel whoami"
    exit 1
  }
  Write-Host "."
}
