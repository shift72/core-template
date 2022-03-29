const fs = require('fs');

const outputDir = 'scripts/language-file-to-csv/output';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

if (process.argv.length < 3) {
  console.error('ERROR - Language file path argument missing!');
  process.exit();
}

let languageFilePath = process.argv[2];
let validLanguageFilePath = /site\/[a-z]{2}_[A-Z]{2}.all.json/;

if (!languageFilePath.match(validLanguageFilePath)) {
  console.error(`ERROR - Language file path argument '${languageFilePath}' invalid!`);
  process.exit();
}

let rawdata = fs.readFileSync(languageFilePath);
let json = JSON.parse(rawdata);

// Remove keys where value is same as key.
// These keys are (hopefully) not used by festival clients.
for (const [key, value] of Object.entries(json)) {
  if (key === value.other) {
    console.warn(`WARNING - Unused key '${key}' will be removed!`);
    delete json[key];
  }
}

let csvSeparator = '","';

let createRow = (key, value, singularValue) => {
  let row = [key, '', value.replace(/"/g, '""'), '', singularValue.replace(/"/g, '""')];
  return `"${row.join(csvSeparator)}"`;
};

let csvHeader = `"${[
  'Term',
  'Translated Value',
  'Value',
  'Singular Translated Value',
  'Singular Value',
].join(csvSeparator)}"`;
let csv = [csvHeader];

for (const [key, value] of Object.entries(json)) {
  let singularValue = value.one ? value.one : '';
  csv.push(createRow(key, value.other, singularValue));
}

let outputFilename = `${outputDir}/${new Date().toString()} - Translations.csv`;

fs.writeFile(outputFilename, csv.join('\n'), err => {
  if (err) {
    console.error(`ERROR - CSV creation failed '${err}'!`);
  }
  console.log(`\nFile '${outputFilename}' created!`);
});
