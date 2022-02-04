const https = require('https');
const fs = require('fs');

const siteUrl = readJsonValueFromRawData('siteUrl', fs.readFileSync('kibble.json'));
const file = fs.createWriteStream('site/static/styles/local.css');

https.get(`${siteUrl}/services/users/v1/css`, handleFilenameResponse).on('error', handleError);

///////////////////////////////////////////////////////////////////////////////////////////////

function readJsonValueFromRawData(key, rawJson) {
  let json = JSON.parse(rawJson);
  return json[key];
}

function handleFilenameResponse(res) {
  res.on('data', d => {
    const filename = readJsonValueFromRawData('css_filename', d);

    if (filename) {
      https.get(`${siteUrl}/styles/${filename}`, handleFileResponse).on('error', handleError);
    } else {
      console.log('Custom CSS not found');
    }
  });
}

function handleFileResponse(res) {
  res.pipe(file);
}

function handleError(e) {
  console.error(e);
}