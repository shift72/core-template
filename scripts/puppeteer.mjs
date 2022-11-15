import puppeteer from 'puppeteer';
import { home } from './actions/homepage.mjs';
import { filmDetail } from './actions/filmdetail.mjs';
import { pageNotFound } from './actions/pageNotFound.mjs';
import { forgotPassword } from './actions/forgotpassword.mjs';
import { collection } from './actions/collection.mjs';
import { genre } from './actions/genre.mjs';
import { help } from './actions/help.mjs';
import { library } from './actions/library.mjs';
import { pin } from './actions/pin.mjs';
import { plans } from './actions/plans.mjs';
import { resetPassword } from './actions/resetPassword.mjs';
import { search } from './actions/search.mjs';
import { subscriptions } from './actions/subscriptions.mjs';
import { tvDetail } from './actions/tvdetail.mjs';

(async () => {
  const browser = await puppeteer.launch({
    devtools: true,
    headless: false,
    product: 'chrome',
    args: ['--start-maximized','--disable-web-security','--disable-features=IsolateOrigins,site-per-process'],
    defaultViewport :{width: 1920, height: 1080},
  });
  var allPages = await browser.pages();
  const page = allPages[0];
  page.setDefaultTimeout(5000)

  await page.evaluate(async () => {
      alert("1) Click inside devtools and press ctrl + shift + p to open the command drawer.\n 2) Search for 'coverage' and click to open the coverage drawer. \n 3) See the start coverage icon? click it once. \n 4) Now click ok and wait for it to do its thing")
    });
  await page.goto('http://localhost:6006');
  await delay(500)
  await allActions();


async function allActions() {
  await filmDetail(page)
  await home(page);
  await pageNotFound(page);
  await forgotPassword(page);
  await collection(page);
  await genre(page);
  await help(page);
  await library(page);
  await pin(page);
  await plans(page);
  await resetPassword(page);
  await search(page);
  await subscriptions(page);
  await tvDetail(page);
}
})();

function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time)
    });
 }