const fs = require('fs');
const assert = require('assert');

const masterFilename = 'en_AU.all.json';
const masterFile = openFile(masterFilename);
const masterFileKeys = Object.keys(masterFile);
const languageFilenames = getFilenames();
const languageFiles = openFiles(languageFilenames);

let errors = [];

const whitespacePaddedKeys = [
  'accept_invite_page_header',
  'shopping_info_release_date_title',
  'shopping_info_available_until_date_title',
  'shopping_info_rental_period_duration',
  'shopping_info_watch_window_duration',
  'classification_intro',
  'classification_divider'
];
const emptyKeys = [
  'classification_outro',
  'plan_label_owned'
];

languageFilenames.forEach(language => {
  console.log(`===== TESTING: ${language} =====`);

  let file = languageFiles[language];
  let keys = Object.keys(file);

  masterFileKeys.forEach(key => {
    testLanguageContainsKey(language, keys, key);

    if (whitespacePaddedKeys.includes(key) && keys.includes(key)) {
      testWhitespacePaddedKey(file, key);
    }

    if (emptyKeys.includes(key) && keys.includes(key)) {
      testEmptyKey(file, key);
    }
  });

  console.log('\n\n');
});

assert.ok(errors.length === 0, 'LANGUAGE FILE VALIDATION FAILED!');

function getFilenames() {
  return fs.readdirSync('./site/').filter(filename => {
    return filename !== masterFilename && filename.match(/[a-z]{2}_[A-Z]{2}\.all\.json/);
  });
}

function openFile(filename) {
  let rawdata = fs.readFileSync(`./site/${filename}`);
  return JSON.parse(rawdata);
}

function openFiles(filenames) {
  return filenames.reduce((acc, filename) => {
    acc[filename] = openFile(filename);
    return acc;
  }, {});
}

function testLanguageContainsKey(language, languageKeys, key) {
  try {
    assert.ok(languageKeys.includes(key), `${language} contains key ${key}`);
  } catch(e) {
    console.error(`${key} - missing from file.`);
    errors.push(e);
  }
}

function testWhitespacePaddedKey(file, key) {
  try {
    assert.ok(file[key].other.slice(-1) === ' ', `${key} ends with whitespace`);
  } catch(e) {
    console.error(`${key} - should end with whitespace.`);
    errors.push(e);
  }
}

function testEmptyKey(file, key) {
  try {
    assert.ok(file[key].other === '', `${key} is empty`);
  } catch(e) {
    console.error(`${key} - should be empty.`);
    errors.push(e);
  }
}