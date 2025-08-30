#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function bumpPatch(v) {
  const parts = v.split('.').map((p) => parseInt(p, 10));
  while (parts.length < 3) parts.push(0);
  parts[2] = (isNaN(parts[2]) ? 0 : parts[2]) + 1;
  return parts.join('.');
}

const pkgPath = path.resolve(__dirname, '../package.json');
const constPath = path.resolve(__dirname, '../src/const.ts');
const readmePath = path.resolve(__dirname, '../README.md');

// Allow skipping the bump via environment variable or CLI flag:
// - set SKIP_BUMP=1 in the environment
// - or pass --no-bump as an argument
if (process.env.SKIP_BUMP === '1' || process.argv.includes('--no-bump')) {
  console.log('Skipping version bump (SKIP_BUMP or --no-bump detected)');
  process.exit(0);
}

if (!fs.existsSync(pkgPath)) {
  console.error('package.json not found');
  process.exit(1);
}

const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
const oldVer = pkg.version || '0.0.0';
const newVer = bumpPatch(oldVer);
pkg.version = newVer;
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n', 'utf8');
console.log(`Bumped package.json version: ${oldVer} -> ${newVer}`);

// Update src/const.ts
if (fs.existsSync(constPath)) {
  const constSrc = fs.readFileSync(constPath, 'utf8');
  const replaced = constSrc.replace(/export const CARD_VERSION = ['\"]([\d\.]+)['\"];?/, `export const CARD_VERSION = '${newVer}';`);
  fs.writeFileSync(constPath, replaced, 'utf8');
  console.log(`Updated ${path.relative(process.cwd(), constPath)} to ${newVer}`);
} else {
  console.warn(`No src/const.ts found at ${constPath}, skipping CARD_VERSION update.`);
}

// Update README.md
if (fs.existsSync(readmePath)) {
  const readmeSrc = fs.readFileSync(readmePath, 'utf8');
  const readmeReplaced = readmeSrc.replace(/Current version: \*\*([\d\.]+)\*\*/, `Current version: **${newVer}**`);
  fs.writeFileSync(readmePath, readmeReplaced, 'utf8');
  console.log(`Updated ${path.relative(process.cwd(), readmePath)} version to ${newVer}`);
} else {
  console.warn(`No README.md found at ${readmePath}, skipping README version update.`);
}

process.exit(0);
