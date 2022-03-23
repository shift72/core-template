import fetch from 'node-fetch';
import glob from 'glob';
import * as fs from 'fs';
const key = process.argv[2];
const value = process.argv[3];

if (!key || !value) {
    console.log("Should be 'npm run translate key value'")
    process.exit(1)
}
glob('./site/*.json', {}, (err, files) => {
  files.forEach(pathName => {
    const file_content = fs.readFileSync(pathName);
    const content = JSON.parse(file_content);
    let languageCode = pathName.slice(7, 9);
    if (languageCode == 'ee') languageCode = 'et';
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
          const translatedValue = translated[0][0][0];
          content[key] = { other: translatedValue };
          fs.writeFileSync(pathName, JSON.stringify(content, null, 2));
        }
      });
  });
});
