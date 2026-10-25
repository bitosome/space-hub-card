#!/usr/bin/env node
/** Controlled build-time vendoring; no production writes or sibling runtime imports. */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const manifest = JSON.parse(readFileSync(resolve(root, 'scripts/card-design-consumers.json'), 'utf8'));
const check = process.argv.includes('--check');
const chosen = process.argv.filter(v => v.startsWith('--consumer=')).map(v => v.slice(11));
for (const name of chosen) if (!manifest.consumers.includes(name)) throw new Error(`Unknown consumer ${name}`);
const consumers = chosen.length ? chosen : manifest.consumers;
const revision = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim();
const sha = data => createHash('sha256').update(data).digest('hex');
let failures = 0;
for (const name of consumers) {
  const repo = resolve(root, '..', name);
  if (!existsSync(repo)) { console.error(`Missing checkout: ${name}`); failures++; continue; }
  const dest = resolve(repo, 'src/shared');
  if (!check) mkdirSync(dest, {recursive:true});
  const hashes = {};
  for (const file of manifest.files) {
    const source = readFileSync(resolve(root,'src/shared',file),'utf8');
    hashes[file] = sha(source);
    const output = `// VENDORED from ${manifest.source} design ${manifest.version}. See DESIGN_PROVENANCE.json.\n` + source;
    const target = resolve(dest,file);
    if (check) {
      if (!existsSync(target) || readFileSync(target,'utf8') !== output) { console.error(`Drift: ${name}/${file}`); failures++; }
    } else writeFileSync(target,output);
  }
  const provenance = {source:manifest.source,version:manifest.version,source_commit:revision,license:'MIT',files:hashes,method:'Build-time vendoring; update in Space Hub, then run scripts/sync-card-design.mjs.'};
  if (check) {
    try { const saved=JSON.parse(readFileSync(resolve(dest,'DESIGN_PROVENANCE.json'),'utf8')); if(saved.version!==manifest.version||JSON.stringify(saved.files)!==JSON.stringify(hashes)) throw new Error('provenance mismatch'); }
    catch { console.error(`Provenance mismatch: ${name}`); failures++; }
  } else writeFileSync(resolve(dest,'DESIGN_PROVENANCE.json'),JSON.stringify(provenance,null,2)+'\n');
  console.log(`${check?'Checked':'Synced'} ${name}`);
}
process.exitCode = failures ? 1 : 0;
