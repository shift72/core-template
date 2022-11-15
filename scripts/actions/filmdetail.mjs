export const filmDetail = async (page) => {

  page.setViewport({ width: 1920, height: 1080 });
    var button = await page.$(`#pages-filmdetail`);
    await button.evaluate(b => b.click());



    const pageIDs = [
    `#pages-filmdetail--in-library`,
    `#pages-filmdetail--buyable`,
    `#pages-filmdetail--unavailable`,
    `#pages-filmdetail--rentable-and-buyable`,
    `#pages-filmdetail--subscribe-to-watch`,
    `#pages-filmdetail--rentable`
  ]

  for (const pageID of pageIDs) {
    var button = await page.$(pageID);
    await button.evaluate(b => b.click());
    await pageActions(page);
  // await checkoutFlow(page);
  if (pageID == "#pages-filmdetail--rentable") {
    await checkoutFlow(page);
  }

 }

    page.setViewport({ width: 991, height: 768 });

  for (const pageID of pageIDs) {
    var button = await page.$(pageID);
    await button.evaluate(b => b.click());
    await pageActions(page);
    if (pageID == "#pages-filmdetail--rentable") {
      await checkoutFlow(page);
    }

 }

    page.setViewport({ width: 380, height: 768 });

  for (const pageID of pageIDs) {
    var button = await page.$(pageID);
    await button.evaluate(b => b.click());
    await pageActions(page);
    if (pageID == "#pages-filmdetail--rentable") {
      await checkoutFlow(page);
    }

 }
}

async function checkoutFlow(page) {
  await delay(1000)

  var  elementHandle = await page.waitForSelector('#storybook-preview-wrapper iframe');
  var frame = await elementHandle.contentFrame();
  var button = await frame.waitForSelector(`.s72-btn-rent`);
  await button.evaluate(b => b.click());
  await delay(300)
  // await page.type('.InputElement', '41111');

  var stripeIframe = await frame.waitForSelector(`.s72-modal-content iframe`);
  var stripeIframeContent = await stripeIframe.contentFrame()
  var button = await stripeIframeContent.waitForSelector(`.CardField-number .InputElement`);
  await button.evaluate(b => b.click());
  await delay(500)
  await page.keyboard.type('4111111111111111')
 await page.keyboard.press('Tab');
  await page.keyboard.type('1212')
 await page.keyboard.press('Tab');
 await page.keyboard.type('12121212')
 await delay(500)

 Array.from({ length: 50 }, () => { page.keyboard.press('Backspace'); });
 await delay(500)

  Array.from({ length: 50 }, () => { page.keyboard.press('ArrowRight'); });
 await delay(500)

 Array.from({ length: 50 }, () => { page.keyboard.press('Backspace'); });
 await delay(500)
 Array.from({ length: 50 }, () => { page.keyboard.press('Backspace'); });
 await delay(500)

  Array.from({ length: 50 }, () => { page.keyboard.press('ArrowRight'); });
 await delay(500)
 Array.from({ length: 50 }, () => { page.keyboard.press('Backspace'); });
 await delay(500)

  await stripeIframeContent.type('.CardField-number .InputElement', '4111111111111111');
    var button = await stripeIframeContent.waitForSelector(`.CardField-expiry .InputElement`);
  await button.evaluate(b => b.click());
  await stripeIframeContent.type('.CardField-expiry .InputElement', '123211111111111111111111111');
 await delay(500)
   var button = await frame.waitForSelector(`.s72-shopping-modal-promo-code-check input`);
  await button.evaluate(b => b.click());
  var button = await frame.waitForSelector(`.s72-btn-applydiscount`);
  await button.evaluate(b => b.click());
  await frame.type('.s72-shopping-modal-promo-code-form input', 'promo code');
  var button = await frame.waitForSelector(`.s72-btn-applydiscount`);
  await button.evaluate(b => b.click());
  await delay(500)
  var button = await frame.waitForSelector(`.s72-btn-purchase-card`);
  await button.evaluate(b => b.click());
     var button = await frame.waitForSelector(`.s72-shopping-modal-promo-code-check input`);
  await button.evaluate(b => b.click());
  var button = await frame.waitForSelector(`.s72-btn-purchase-card`);
  await button.evaluate(b => b.click());

  await delay(1500)

  await frame.evaluate( () => {
    document.querySelector('.s72-btn-close').click()
  });




}
async function pageActions(page) {
  await delay(500)
  var  elementHandle = await page.waitForSelector('#storybook-preview-wrapper iframe');
  var frame = await elementHandle.contentFrame();
  await frame.evaluate( () => { window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); });
  await delay(500)
  await frame.evaluate( () => {  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); });
  await delay(500)
  }

function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time)
    });
 }