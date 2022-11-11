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
  await page.goto('http://localhost:6006');
  await page.bringToFront();
  await page.evaluate(() => {
    // alert("1) Click inside devtools and press ctrl + shift + p to open the command drawer.\n 2) Search for 'coverage' and click to open the coverage drawer. \n 3) See the start coverage icon? click it once. \n 4) Now click ok and wait for it to do its thing")
  });

  await allActions();


 async function allActions() {
  await homeActions();

  page.setViewport({
    width: 991,
    height: 768,
    deviceScaleFactor: 1,
  });
  await homeActions();

  page.setViewport({
    width: 400,
    height: 768,
    deviceScaleFactor: 2,
  });
  await homeActions();


 }
 async function homeActions() {
  page.waitForNavigation({ waitUntil: 'networkidle2' })
  console.log(1);
  var button = await page.$(`#pages-home`);
  await button.evaluate(b => b.click());
await delay(3300);
console.log(2);

const elementHandle = await page.waitForSelector('#storybook-preview-wrapper iframe');

const frame = await elementHandle.contentFrame();
console.log(3);

  await frame.waitForSelector('.navbar-nav-user-nav .s72-dropdown-toggle');
  var button = await frame.$(`.navbar-nav-user-nav .s72-dropdown-toggle`);
if (page.viewport().width > 992) {
  button.click();

  await delay(500)
  button.click();
}
console.log(4);

  goToFooter(frame);
  // button.click();
//   const elHandleArray = await frame.$$('.meta-item-link')
// console.log(elHandleArray.length);
//   for (const el of elHandleArray) {
//     await el.hover()
//     console.log('ugh');
//   }


elem = frame.waitForSelector('.s72-btn.s72-btn-trailer')
await delay(100);
elem.then((aaa)=>{
aaa.click();
aaa.hover();
});
await delay(500);
console.log(5);

var elem = await frame.waitForSelector('.btn-wishlist')
await elem.click()
var elem = await frame.waitForSelector('s72-share-modal')
await elem.click()
await delay(100);
console.log(6);

await delay(100);

await elem.click()
console.log(7);

elem = frame.waitForSelector('.meta-item-link')
await delay(100);
elem.then((aaa)=>{
aaa.focus();
aaa.hover();
});




// await elem.focus()

  // var footer = await frame.$(`.sto-sqdry3`);
  // footer.evaluate(b => b.click())
  // footer.hover();

// console.log(footer);
  // var jiuhygtf = await frame.$$(".page-collection-items.collection-items .meta-item-link");
  //  jiuhygtf[0].click();
  //  console.log('ik');
  // var elem = await frame.$('.meta-item-link');
  // elem.hover()
  // console.log(elem)/;
}

 async function goToFooter(frame) {
  var footer = await frame.$(`#footer`);
  footer.hover();
  await delay(50);
  footer.hover();
  await delay(50);
  footer.hover();
  await delay(50);
  footer.hover();
};

})()


function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time)
    });
 }