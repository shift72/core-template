const args = require('yargs').argv
const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const del = require('del');

const logError = (s) => console.log(`\x1b[31mError: ${s}\x1b[0m`);

const areSiblings = (dir1, dir2) => {
	dir1 = path.join(dir1, '..');
	dir2 = path.join(dir1, '..');
	return path.relative(dir1, dir2) === 0;
}

console.log('=== DEV: Workspace copy ===');

const projectDir = args.projectDir;

if (!projectDir) {
	logError('--project-dir argument is missing.');
	return 1;
}

if (!fs.existsSync(projectDir)) {
	logError(`--project-dir does not exist ${projectDir}`);
	return 1;
}

if (!fs.lstatSync(projectDir).isDirectory()) {
	logError(`--project-dir is not a directory ${projectDir}`);
	return 1;
}

const srcDir = process.cwd();

if (!args.force && !areSiblings(srcDir, projectDir)) {
	logError(`--project-dir is not a sibling directory. Use --force to override.`);
	logError(`${srcDir} -> ${projectDir}`);
	return 1;
}

const destDir = path.join(projectDir, 'core');

console.log(`Deleting ${destDir}`);
del.sync(destDir, {force: true});

console.log(`${srcDir} -> ${destDir}`);
fse.ensureDirSync(destDir);
fse.copySync(path.join(srcDir, 'site'), path.join(destDir, 'site'));
fse.copySync(path.join(srcDir, 'kibble.json'), path.join(destDir, 'kibble.json'));

console.log('=== END: Workspace copy ===');