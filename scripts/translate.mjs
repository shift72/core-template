import fetch from 'node-fetch';
import glob from 'glob';
import * as fs from 'fs';
const key = process.argv[2];
const value = process.argv[3];
const nestedKey = process.argv[4];

if (!key || !value) {
  console.log('Should be \'npm run translate key value\'');
  process.exit(1);
}
glob('./site/*.json', {}, (err, files) => {
  files.forEach(pathName => {
    function writeTranslationFile(translatedValue) {
      if (!content[key]) {
        content[key] = {};
      }

      content[key][nestedKey ? nestedKey : 'other'] = translatedValue;
      fs.writeFileSync(pathName, JSON.stringify(content, null, 2));
    }
    const file_content = fs.readFileSync(pathName);
    const content = JSON.parse(file_content);
    let languageCode = pathName.slice(7, 9);
    if (languageCode == 'ee') languageCode = 'et';
    if (value.trim() === '') {
      writeTranslationFile(value);
    } else {
      fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${languageCode}&dt=t&q=${encodeURI(
          value
        )}`
      )
        .then(res => {
          const contentType = res.headers.get('content-type');
          if (contentType && contentType.indexOf('application/json') !== -1) {
            return res.json();
          }
          console.log(`translation failed for ${languageCode}`);
        })
        .then(translated => {
          if (translated) {
            let translatedValue = '';
            translated[0].forEach(each => translatedValue += each[0]);
            writeTranslationFile(translatedValue);
          }
        });
    }

  });
});
