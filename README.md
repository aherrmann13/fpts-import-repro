## fpts-import-repro

this repo is intended to reproduce an error with module resolution in fp-ts

steps:
- `npm install`
- `npm run build`
- `node cjs/index.js`
- `node --experimental-specifier-resolution=node es6/index.mjs`

works fine for common js, fails with `ERR_MODULE_NOT_FOUND` on es6 version

*notes*:
- node version tested: 14.15
- renamer runs on index.js in es6 folder so node interprets it as an esm module without `"type": "module"` in package.json