#!/usr/bin/env node

const args = require('yargs').argv
const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const del = require('del');
const package = require('../package.json');

console.log(`=== START: core-template v${package.version} ===`);

const cwd = process.cwd();
const srcDir = path.join(cwd, 'node_modules', '@shift72', 'core-template');
const destDir = path.join(cwd, 'core');

console.log(`Deleting ${destDir}`);
del.sync(destDir, {force: true});
fse.ensureDirSync(destDir);

console.log(`${srcDir} -> ${destDir}`);
fse.copySync(path.join(srcDir, 'site'), path.join(destDir, 'site'));
fse.copySync(path.join(srcDir, 'kibble.json'), path.join(destDir, 'kibble.json'));

console.log(`===== END: core-template v${package.version} ===`);