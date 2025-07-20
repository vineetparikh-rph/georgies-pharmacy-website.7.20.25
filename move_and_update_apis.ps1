# Define source and destination paths
$sourcePath = "server\routes"
$destPath = "api"

# Ensure destination directory exists
if (-not (Test-Path $destPath)) {
    New-Item -Path $destPath -ItemType Directory
}

# Define file mappings and updated content
$files = @{
    "refills.ts" = @"
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    const { name, dateOfBirth, phone, medications } = req.body;
    console.log("Refill Request:", { name, dateOfBirth, phone, medications });
    return res.status(200).json({ message: 'Refill submitted successfully.' });
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
"@;
    
    "transfer.ts" = @"
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    const { name, previousPharmacy, medications } = req.body;
    console.log("Transfer Request:", { name, previousPharmacy, medications });
    return res.status(200).json({ message: 'Transfer submitted successfully.' });
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
"@;

    "vaccine.ts" = @"
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    const { name, dateOfBirth, vaccineType, consent } = req.body;
    console.log("Vaccine Request:", { name, dateOfBirth, vaccineType, consent });
    return res.status(200).json({ message: 'Vaccine intake form submitted successfully.' });
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
"@
}

# Process each file
foreach ($file in $files.Keys) {
    $sourceFile = Join-Path $sourcePath $file
    $destFile = Join-Path $destPath $file

    if (Test-Path $sourceFile) {
        Remove-Item $sourceFile -Force
        Write-Output "Deleted old file: $sourceFile"
    }

    $files[$file] | Out-File -FilePath $destFile -Encoding UTF8
    Write-Output "Created new file: $destFile"
}

Write-Output "✅ Done. Files moved to /api and updated for Vercel."
