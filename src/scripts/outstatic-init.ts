import { randomUUID } from 'crypto';
import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'outstatic', 'content');
const metadataFile = path.join(contentDir, 'metadata.json');

if (!fs.existsSync(contentDir)) {
  fs.mkdirSync(contentDir, { recursive: true });
}

if (!fs.existsSync(metadataFile)) {
  const metadata = {
    generated: new Date().toISOString(),
    siteId: randomUUID()
  };
  fs.writeFileSync(metadataFile, JSON.stringify(metadata, null, 2));
  console.log('Outstatic metadata file created successfully.');
} else {
  console.log('Outstatic metadata file already exists.');
}