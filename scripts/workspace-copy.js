const args = require('yargs').argv
const fse = require('fs-extra');
const path = require('path');
const del = require('del');

console.log('=== DEV: Workspace copy ===');

const srcDir = process.cwd();
const destDir = path.join(args.projectDir, 'core');

console.log(`Deleting ${destDir}`);
del.sync(destDir, {force: true});

console.log(`${srcDir} -> ${destDir}`);
fse.ensureDirSync(destDir);
fse.copySync(path.join(srcDir, 'site'), path.join(destDir, 'site'));
fse.copySync(path.join(srcDir, 'kibble.json'), path.join(destDir, 'kibble.json'));

console.log('=== END: Workspace copy ===');