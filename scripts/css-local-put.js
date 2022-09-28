const https = require('https');
const fs = require('fs');
const FormData = require('form-data');
const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const siteUrl = readJsonValueFromRawData('siteUrl', fs.readFileSync('kibble.json'));
const url = new URL(siteUrl);

rl.question(`Enter Username for ${siteUrl}: `, username => {
  rl.question('Enter Password: ', password => {
    rl.close();

    return signin(username, password)
      .then(authToken => {
        return uploadCSS(authToken);
      })
      .then(filePath => {
        console.log(`CSS file upload success: https://${url.hostname}/styles${filePath}`);
      })
      .catch(handleError);
  });
});

///////////////////////////////////////////////////////////////////////////////////////////////

function uploadCSS(authToken) {
  return new Promise((resolve, reject) => {
    let form = new FormData();
    form.append('file', fs.createReadStream('site/static/styles/local.css'), {
      filename: 'local.css',
      contentType: 'text/css',
    });

    let headers = form.getHeaders();
    headers['x-auth-token'] = authToken;

    let options = {
      hostname: url.hostname,
      path: '/services/users/v1/css',
      method: 'PUT',
      headers,
    };

    const req = https.request(options);

    form.pipe(req);
    form.on('end', () => {
      req.end();
    });

    req.on('response', res => {
      if (res.statusCode < 200 || res.statusCode >= 300) {
        return reject(new Error(`statusCode=${res.statusCode}`));
      }

      res.on('data', d => {
        let filename = readJsonValueFromRawData('css_path', d);
        return resolve(filename);
      });
    });

    req.on('error', e => {
      return reject(e);
    });
  });
}

function signin(username, password) {
  return new Promise((resolve, reject) => {
    let options = {
      hostname: url.hostname,
      path: '/services/users/auth/sign_in',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    };

    const req = https.request(options);

    req.on('response', res => {
      if (res.statusCode < 200 || res.statusCode >= 300) {
        return reject(new Error(`statusCode=${res.statusCode}`));
      }

      res.on('data', d => {
        let authToken = readJsonValueFromRawData('auth_token', d);
        return resolve(authToken);
      });
    });

    req.on('error', e => {
      return reject(e);
    });

    req.write(JSON.stringify({ user: { email: username, password } }));

    req.end();
  });
}

function readJsonValueFromRawData(key, rawJson) {
  let json = JSON.parse(rawJson);
  return json[key];
}

function handleError(e) {
  console.error(e);
}
