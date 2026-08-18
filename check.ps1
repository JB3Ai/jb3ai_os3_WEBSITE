$files = @(
    'src/components/ModuleGrid.tsx',
    'src/components/CorporateFooter.tsx',
    'src/content/brochures.ts',
    'src/pages/BrochuresPage.tsx'
)

Write-Output "=== EXTRACTING PDF REFERENCES ==="
$pdfRefs = @()
foreach ($file in $files) {
    if (Test-Path $file) {
        $content = [System.IO.File]::ReadAllText((Resolve-Path $file))
        # Match literal /assets/pdfs/...pdf references.
        # We handle single/double quotes and backticks, but just extract the path itself.
        $matches = [regex]::Matches($content, '/assets/pdfs/[a-zA-Z0-9_\-\./%]+\.pdf')
        foreach ($m in $matches) {
            $val = $m.Value
            $pdfRefs += [PSCustomObject]@{ File = $file; Ref = $val }
        }
    } else {
        Write-Output "Warning: $file does not exist."
    }
}

Write-Output "Total PDF references found: $($pdfRefs.Count)"
foreach ($ref in $pdfRefs) {
    Write-Output "Ref: $($ref.Ref) in file $($ref.File)"
}

Write-Output "`n=== CHECKING FOR MISSING FILES IN public/assets/pdfs/ ==="
$missingCount = 0
foreach ($ref in $pdfRefs) {
    # Extract filename from reference path
    $filename = Split-Path $ref.Ref -Leaf
    $diskPath = "public/assets/pdfs/$filename"
    if (-not (Test-Path $diskPath)) {
        Write-Output "MISSING: '$($ref.Ref)' used in $($ref.File) but file public/assets/pdfs/$filename is missing."
        $missingCount++
    }
}
if ($missingCount -eq 0) {
    Write-Output "All referenced PDFs exist in public/assets/pdfs."
}

Write-Output "`n=== CHECKING FOR LEGACY REFERENCES ==="
$legacyPatterns = @(
    '/documents/pdfs/',
    'JB3Ai_Super_Agent_Operating_System_V5.pdf',
    'jb3ai-shieldai-silent-protection.pdf',
    'jb3ai-mindcareai-personal-support-and-growth.pdf'
)
$legacyFound = 0
foreach ($file in $files) {
    if (Test-Path $file) {
        $lines = Get-Content $file
        for ($i = 0; $i -lt $lines.Count; $i++) {
            $line = $lines[$i]
            foreach ($pat in $legacyPatterns) {
                if ($line -like "*$pat*") {
                    Write-Output "Found Legacy Pattern '$pat' in $file on line $($i+1):"
                    Write-Output "   $($line.Trim())"
                    $legacyFound++
                }
            }
        }
    }
}
if ($legacyFound -eq 0) {
    Write-Output "No legacy/removed patterns found in target files."
}

Write-Output "`n=== SEARCHING FOR BROCHURES. USAGES (REMOVED KEYS mindcare, shield) ==="
$allSrcFiles = Get-ChildItem -Path "src" -Recurse -File -Include *.ts, *.tsx
$removedKeys = @('mindcare', 'shield')
$brochuresUsages = @()

foreach ($file in $allSrcFiles) {
    $lines = Get-Content $file.FullName
    for ($i = 0; $i -lt $lines.Count; $i++) {
        $line = $lines[$i]
        # Match "BROCHURES.key" or "BROCHURES['key']" or "BROCHURES["key"]"
        if ($line -match 'BROCHURES\.([a-zA-Z0-9_-]+)|BROCHURES\[[''"]([a-zA-Z0-9_-]+)[''"]\]') {
            $key = if ($Matches[1]) { $Matches[1] } else { $Matches[2] }
            if ($key -in $removedKeys) {
                Write-Output "Found removed key '$key' at $($file.FullName) on line $($i+1):"
                Write-Output "   $($line.Trim())"
                $brochuresUsages += $key
            }
        }
    }
}
if ($brochuresUsages.Count -eq 0) {
    Write-Output "No active usages of removed keys ('mindcare', 'shield') found."
}
