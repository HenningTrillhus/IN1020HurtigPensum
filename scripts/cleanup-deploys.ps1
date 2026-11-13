# Sletter alle gamle deployments på Vercel og beholder den nyeste (den som ligger ute).
# Hver deploy lagrer en hel kopi av siden (ca. 1 GB med videoer), og gratisplanen har 10 GB lagring.
$out = npx --yes vercel ls --yes 2>&1 | Out-String
$urls = @([regex]::Matches($out, 'https://(in1020-hurtig-pensum-[a-z0-9]+-henning-trillhus\.vercel\.app)') |
  ForEach-Object { $_.Groups[1].Value } | Select-Object -Unique)

if ($urls.Count -le 1) {
  Write-Host "Ingen gamle deployments å slette."
  exit 0
}

# Lista er sortert med nyeste først. Den første beholdes.
$old = @($urls | Select-Object -Skip 1)
Write-Host ("Beholder " + $urls[0] + " og sletter " + $old.Count + " eldre.")
npx --yes vercel rm @old --yes
