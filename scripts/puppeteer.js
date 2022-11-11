const puppeteer = require('puppeteer');

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

    await delay(10500)

    await allActions();


async function allActions() {
  var  elementHandle = await page.waitForSelector('#storybook-preview-wrapper iframe');
  var frame = await elementHandle.contentFrame();
  var button = await page.$(`#pages-home`);
  await button.evaluate(b => b.click());
  await delay(1500)

  await homeActions();

  var button = await page.$(`#pages-home--in-library`);
  await button.evaluate(b => b.click());
  await delay(1500)

  await homeActions();

  var button = await page.$(`#pages-home--buyable`);
  await button.evaluate(b => b.click());
  await delay(1500)

  await homeActions();

  var button = await page.$(`#pages-home--unavailable`);
  await button.evaluate(b => b.click());
  await delay(1500)

  await homeActions();

  var button = await page.$(`#pages-home--rentable-and-buyable`);
  await button.evaluate(b => b.click());
  await delay(1500)

  await homeActions();

   var button = await page.$(`#pages-home--subscribe-to-watch`);
  await button.evaluate(b => b.click());
  await delay(1500)

  await homeActions();
  page.setViewport({ width: 991, height: 768 });
  await delay(1500)

  await homeActions();

  var button = await page.$(`#pages-home--in-library`);
  await button.evaluate(b => b.click());
  await delay(1500)

  await homeActions();

  var button = await page.$(`#pages-home--buyable`);
  await button.evaluate(b => b.click());
  await delay(1500)

  await homeActions();

  var button = await page.$(`#pages-home--unavailable`);
  await button.evaluate(b => b.click());
  await delay(1500)

  await homeActions();

  var button = await page.$(`#pages-home--rentable-and-buyable`);
  await button.evaluate(b => b.click());
  await delay(1500)

  await homeActions();

   var button = await page.$(`#pages-home--subscribe-to-watch`);
  await button.evaluate(b => b.click());
  await delay(1500)

  await homeActions();

  page.setViewport({ width: 380, height: 768 });
  await delay(1500)

  await homeActions();

  var button = await page.$(`#pages-home--in-library`);
  await button.evaluate(b => b.click());
  await delay(1500)

  await homeActions();

  var button = await page.$(`#pages-home--buyable`);
  await button.evaluate(b => b.click());
  await delay(1500)

  await homeActions();

  var button = await page.$(`#pages-home--unavailable`);
  await button.evaluate(b => b.click());
  await delay(1500)

  await homeActions();

  var button = await page.$(`#pages-home--rentable-and-buyable`);
  await button.evaluate(b => b.click());
  await delay(1500)

  await homeActions();

   var button = await page.$(`#pages-home--subscribe-to-watch`);
  await button.evaluate(b => b.click());
  await delay(1500)

  await homeActions();

}
async function homeActions() {

  await delay(2500)

  if (page.viewport().width > 992) {
    var  elementHandle = await page.waitForSelector('#storybook-preview-wrapper iframe');
    var frame = await elementHandle.contentFrame();
    var button = await frame.waitForSelector(`.navbar-nav-user-nav .s72-dropdown-toggle`);
    button.click();
    await delay(500)
    button.click();
  } else if (page.viewport().width <= 992) {
    var  elementHandle = await page.waitForSelector('#storybook-preview-wrapper iframe');
    var frame = await elementHandle.contentFrame();
    var button = await frame.waitForSelector(`.navbar-toggler`);
    button.click();
    await delay(500)
    button.click();
  }

  var footer = await frame.$(`#footer`);
  footer.hover();
  await delay(50);
  footer.hover();
  await delay(50);
  footer.hover();
  await delay(50);
  footer.hover();
  await delay(2500);

  var elem = await frame.waitForSelector('.btn-wishlist')
  await elem.focus()
  await delay(2500);
  await elem.click()

//   elem = frame.waitForSelector('.s72-btn.s72-btn-trailer')
// await delay(100);
// elem.then((aaa)=>{
// aaa.click();
// aaa.hover();
// });
//   var elem = await frame.waitForSelector('s72-share-modal')
//   await elem.click()

// await delay(500);
// console.log(5);

// var elem = await frame.waitForSelector('.s72-btn-rent')
// await elem.click()
}
})()


function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time)
    });
 }