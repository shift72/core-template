const https = require('https');
const fs = require('fs');

const siteUrl = readJsonValueFromRawData('siteUrl', fs.readFileSync('kibble.json'));
const file = fs.createWriteStream('site/static/styles/local.css');

https.get(`${siteUrl}/services/users/v1/site_brand`, handleCSSResponse).on('error', handleError);

///////////////////////////////////////////////////////////////////////////////////////////////

function readJsonValueFromRawData(key, rawJson) {
  let json = JSON.parse(rawJson);
  return json[key];
}

function handleCSSResponse(res) {
  res.on('data', d => {
    const links = readJsonValueFromRawData('links', d);
    let cssFileLocation;

    links.forEach(link => {
      if (link['type'] === 'css') {
        cssFileLocation = link['url'];
      }
    });

    if (cssFileLocation) {
      https.get(cssFileLocation, handleFileResponse).on('error', handleError);
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
