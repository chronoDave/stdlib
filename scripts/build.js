import * as esbuild from 'esbuild';
import fs from 'fs';
import path from 'path';
import fg from 'fast-glob';

await esbuild.build({
  entryPoints: fg.globSync('src/**/*.spec.ts'),
  bundle: true,
  external: ['tape'],
  outdir: 'build',
  format: 'esm',
  platform: 'node',
  plugins: [{
    name: 'clean',
    setup: build => {
      fs.rmSync(path.resolve(process.cwd(), build.initialOptions.outdir),{
        force: true,
        recursive: true
      })
    }
  }]
})
