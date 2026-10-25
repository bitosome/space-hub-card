#!/usr/bin/env node
// Source vendoring is retired. Consumers pin a released @bitosome/ha-card-ui package.
import {readFileSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const manifest=JSON.parse(readFileSync(resolve(root,'scripts/card-design-consumers.json'),'utf8'));
if (!process.argv.includes('--check')) throw new Error('Vendoring is retired. Release @bitosome/ha-card-ui, then update consumer dependencies and lockfiles. Use --check to audit.');
for (const name of [dirname(root).split('/').at(-1) === 'Repositories' ? 'space-hub-card-editor-navigation' : '', ...manifest.consumers].filter(Boolean)) {
  const pkg=JSON.parse(readFileSync(resolve(root,'..',name,'package.json'),'utf8'));
  const spec=pkg.dependencies?.['@bitosome/ha-card-ui'];
  if (!spec || !spec.startsWith('https://github.com/bitosome/ha-card-ui/releases/download/v')) throw new Error(`${name} does not pin a release of @bitosome/ha-card-ui`);
  console.log(`${name}: ${spec}`);
}
