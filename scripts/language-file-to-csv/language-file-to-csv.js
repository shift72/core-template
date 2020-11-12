'use strict';

const fs = require('fs');

if (process.argv.length < 3) {
  console.error('ERROR - Language file path argument missing!');
  return;
}

let languageFilePath = process.argv[2];
let validLanguageFilePath = /site\/[a-z]{2}\_[A-Z]{2}.all.json/;

if (!languageFilePath.match(validLanguageFilePath)) {
  console.error(`ERROR - Language file path argument '${languageFilePath}' invalid!`);
  return;
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

// Because this character '~' is not present in the English language file.
// May have to change how this works in the future.
let csvSeparator = '~'; 

let createRow = (key, value, singularValue) => {
  return [key, '', value, '', singularValue].join(csvSeparator);
};

let csvHeader = ['Term', 'Translated Value', 'Value', 'Singular Translated Value', 'Singular Value'].join(csvSeparator);
let csv = [
  csvHeader
];

for (const [key, value] of Object.entries(json)) {
  let singularValue = value.one ? value.one : '';
  csv.push(createRow(key, value.other, singularValue));
}

let outputFilename = `scripts/language-file-to-csv/output/${Date.now()} - Translations.csv`;

fs.writeFile(outputFilename, csv.join('\n'), err => {
  if (err) {
    console.error(`ERROR - CSV creation failed '${err}'!`)
  }
  console.log(`\nFile '${outputFilename}' created!`);
});