export const home = async (page) => {


    var button = await page.$(`#pages-home`);
    await button.evaluate(b => b.click());

    const homePages = [
    `#pages-home--in-library`,
    `#pages-home--buyable`,
    `#pages-home--unavailable`,
    `#pages-home--rentable-and-buyable`,
    `#pages-home--subscribe-to-watch`,
  ]

  page.setViewport({ width: 1920, height: 1080 });
  for (const homePageID of homePages) {
    var button = await page.$(homePageID);
    await button.evaluate(b => b.click());
    await homeActions(page);
 }

  page.setViewport({ width: 991, height: 768 });

  for (const homePageID of homePages) {
    var button = await page.$(homePageID);
    await button.evaluate(b => b.click());
    await homeActions(page);
 }

    page.setViewport({ width: 380, height: 768 });

  for (const homePageID of homePages) {
    var button = await page.$(homePageID);
    await button.evaluate(b => b.click());
    await homeActions(page);
 }
}

async function homeActions(page) {

    await delay(200)

    if (page.viewport().width > 992) {
      var  elementHandle = await page.waitForSelector('#storybook-preview-wrapper iframe');
      var frame = await elementHandle.contentFrame();
      var button = await frame.waitForSelector(`.navbar-nav-user-nav .s72-dropdown-toggle`);
      await button.evaluate(b => b.click());
      await delay(200)
       await button.evaluate(b => b.click());
    } else if (page.viewport().width <= 992) {
      var  elementHandle = await page.waitForSelector('#storybook-preview-wrapper iframe');
      var frame = await elementHandle.contentFrame();
      var button = await frame.waitForSelector(`.navbar-toggler`);
       await button.evaluate(b => b.click());
      await delay(200)
       await button.evaluate(b => b.click());
    }
    await delay(500)
    var  elementHandle = await page.waitForSelector('#storybook-preview-wrapper iframe');
    var frame = await elementHandle.contentFrame();
    await frame.evaluate( () => { window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); });
    await delay(500)
    await frame.evaluate( () => {  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); });
    await delay(500)
    var elem = await frame.waitForSelector('.btn-wishlist')
    await elem.focus()
    await delay(200);

  }
function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time)
    });
 }