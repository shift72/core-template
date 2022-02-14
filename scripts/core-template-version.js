const fs = require('fs');

let version, kibbleJSON;

try {
  version = JSON.parse(fs.readFileSync('package.json'))['version'];
} catch(e) {
  exitWithError(`Failed to parse package.json: ${e}`);
}

try {
  kibbleJSON = JSON.parse(fs.readFileSync('kibble.json'));
} catch(e) {
  exitWithError(`Failed to parse kibble.json: ${e}`);
}

kibbleJSON['coreTemplateVersion'] = version;

try {
  fs.writeFileSync('kibble.json', JSON.stringify(kibbleJSON, null, 2));
} catch(e) {
  exitWithError(`Failed to write kibble.json: ${e}`);
}

console.log(`Core-Template Version ${version} written to kibble.json`);

function exitWithError(message) {
  console.error(message);
  process.exit();
}