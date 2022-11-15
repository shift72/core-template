export const pageNotFound = async (page) => {


    var button = await page.$(`#pages-404`);
    await button.evaluate(b => b.click());

  page.setViewport({ width: 1920, height: 1080 });
  await delay(1000);

    await pageActions(page);

  page.setViewport({ width: 991, height: 768 });
  await delay(1000);
  await pageActions(page);

    page.setViewport({ width: 380, height: 768 });
    await delay(1000);
    await pageActions(page);

}

async function pageActions(page) {
  var  elementHandle = await page.waitForSelector('#storybook-preview-wrapper iframe');
  var frame = await elementHandle.contentFrame();
    await delay(200)

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