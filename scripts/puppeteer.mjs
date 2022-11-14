import puppeteer from 'puppeteer';
import { initHomePage } from './actions/homepage.mjs';

(async () => {
  const browser = await puppeteer.launch({
    devtools: true,
    headless: false,
    product: 'chrome',
    args: ['--start-maximized','--disable-web-security','--disable-features=IsolateOrigins,site-per-proces'],
    defaultViewport :{width: 1920, height: 1080},
  });
  const page = await browser.newPage();

  // await page.bringToFront();
  await page.evaluate(async () => {
    debugger;

      alert("1) Click inside devtools and press ctrl + shift + p to open the command drawer.\n 2) Search for 'coverage' and click to open the coverage drawer. \n 3) See the start coverage icon? click it once. \n 4) Now click ok and wait for it to do its thing")
    });
  await page.goto('http://localhost:6006');

    await delay(1000)

    await allActions();


async function allActions() {
  await initHomePage(page)
}

})()


function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time)
    });
 }