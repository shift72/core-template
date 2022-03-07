import i18next from 'i18next';

function xhrRequest(url) {
  return new Promise((resolve, reject) => {
    let xhr = new window.XMLHttpRequest();

    xhr.onload = function() {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject('error_requesting_file');
      }
    };
    xhr.onerror = function() {
      reject('error_requesting_file');
    };
    xhr.open('GET', url);
    xhr.send();
  });
}

function processTranslations(translations) {
  let processedTranslations = {};

  Object.keys(translations).forEach(key => {
    let translation = translations[key];
    Object.keys(translation).forEach(plurality => {
      processedTranslations[`${key}_${plurality}`] = translation[plurality];
    });
  });

  return processedTranslations;
}

function initI18n(lang, translations) {
  i18next.init({
    lng: lang,
    debug: true,
    interpolation: {
      // This prefix needs the dot added for kibble compatible interpolation.
      prefix: '{{.'
    },
    resources: {
      [lang]: {
        // Translations must be in expected format, see notes below.
        translation: processTranslations(translations)
      }
    }
  });
}

function addRow(wrapper, lang, key, count, value) {
  let r = wrapper.insertRow();

  let langCell = r.insertCell();
  langCell.appendChild(document.createTextNode(lang));

  let keyCell = r.insertCell();
  keyCell.appendChild(document.createTextNode(key));

  let countCell = r.insertCell();
  countCell.appendChild(document.createTextNode(count));

  let valueCell = r.insertCell();
  valueCell.appendChild(document.createTextNode(value));
}

Promise.all([xhrRequest('/en_AU.all.json'), xhrRequest('/ar_LB.all.json')]).then(values => {
  let en = JSON.parse(values[0]);
  let ar = JSON.parse(values[1]);

  let thead = document.createElement('thead');
  addRow(thead, 'Lang', 'Key', 'Count', 'Value');

  let tbody = document.createElement('tbody');

  // Init English translations
  initI18n('en', en);
  addRow(tbody, 'en', 'test_pluralities', 0, i18next.t('test_pluralities', {count: 0}));
  addRow(tbody, 'en', 'test_pluralities', 1, i18next.t('test_pluralities', {count: 1}));
  addRow(tbody, 'en', 'test_interpolation', 0, i18next.t('test_interpolation', {count: 0, Value: 'do'}));

  // Switch to Arabic translations
  initI18n('ar', ar);
  addRow(tbody, 'ar', 'test_pluralities', 0,   i18next.t('test_pluralities', {count: 0})  );
  addRow(tbody, 'ar', 'test_pluralities', 1,   i18next.t('test_pluralities', {count: 1})  );
  addRow(tbody, 'ar', 'test_pluralities', 2,   i18next.t('test_pluralities', {count: 2})  );
  addRow(tbody, 'ar', 'test_pluralities', 3,   i18next.t('test_pluralities', {count: 3})  );
  addRow(tbody, 'ar', 'test_pluralities', 11,  i18next.t('test_pluralities', {count: 11}) );
  addRow(tbody, 'ar', 'test_pluralities', 100, i18next.t('test_pluralities', {count: 100}));

  let table = document.createElement('table');
  table.appendChild(thead);
  table.appendChild(tbody);
  document.body.insertBefore(table, document.body.firstChild);

  /*
    Lang  Key                 Count  Value
    en	  test_pluralities    0	     I do other plurality!
    en	  test_pluralities    1	     I do one plurality!
    en	  test_interpolation  0	     I do other interpolation!
    ar	  test_pluralities    0	     I do zero plurality!
    ar	  test_pluralities    1	     I do one plurality!
    ar	  test_pluralities    2	     I do two plurality!
    ar	  test_pluralities    3	     I do few plurality!
    ar	  test_pluralities    11	   I do many plurality!
    ar	  test_pluralities    100	   I do other plurality!
  */

  /*
    Notes:

    Translations that use pluralities (like all of ours) need to be reformatted like so:
      "some_key_one": "some value",
      "some_key_other": "some values",
      etc...

    Count is required with ALL pluralities.
    This means we need to know valid count values to fallback onto 'other' as we currently do.
    So maybe i18next is not viable.

    In the above example I have called i18next.init twice... the documentation says not to do this... it has a changeLanguage function instead.
    However, the Relish language selector would fire a redirect if this were integrated so not really an issue.
  */
});
