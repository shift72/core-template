export const initHomePage = async (page) => {
    var button = await page.$(`#pages-home`);
    await button.evaluate(b => b.click());
    await delay(200)

    await homeActions(page);

    var button = await page.$(`#pages-home--in-library`);
    await button.evaluate(b => b.click());
    await delay(200)

    await homeActions(page);

    var button = await page.$(`#pages-home--buyable`);
    await button.evaluate(b => b.click());
    await delay(200)

    await homeActions(page);

    var button = await page.$(`#pages-home--unavailable`);
    await button.evaluate(b => b.click());
    await delay(200)

    await homeActions(page);

    var button = await page.$(`#pages-home--rentable-and-buyable`);
    await button.evaluate(b => b.click());
    await delay(200)

    await homeActions(page);

     var button = await page.$(`#pages-home--subscribe-to-watch`);
    await button.evaluate(b => b.click());
    await delay(200)

    await homeActions(page);
    page.setViewport({ width: 991, height: 768 });
    await delay(200)

    await homeActions(page);

    var button = await page.$(`#pages-home--in-library`);
    await button.evaluate(b => b.click());
    await delay(200)

    await homeActions(page);

    var button = await page.$(`#pages-home--buyable`);
    await button.evaluate(b => b.click());
    await delay(200)

    await homeActions(page);

    var button = await page.$(`#pages-home--unavailable`);
    await button.evaluate(b => b.click());
    await delay(200)

    await homeActions(page);

    var button = await page.$(`#pages-home--rentable-and-buyable`);
    await button.evaluate(b => b.click());
    await delay(200)

    await homeActions(page);

     var button = await page.$(`#pages-home--subscribe-to-watch`);
    await button.evaluate(b => b.click());
    await delay(200)

    await homeActions(page);

    page.setViewport({ width: 380, height: 768 });
    await delay(200)

    await homeActions(page);

    var button = await page.$(`#pages-home--in-library`);
    await button.evaluate(b => b.click());
    await delay(200)

    await homeActions(page);

    var button = await page.$(`#pages-home--buyable`);
    await button.evaluate(b => b.click());
    await delay(200)

    await homeActions(page);

    var button = await page.$(`#pages-home--unavailable`);
    await button.evaluate(b => b.click());
    await delay(200)

    await homeActions(page);

    var button = await page.$(`#pages-home--rentable-and-buyable`);
    await button.evaluate(b => b.click());
    await delay(200)

    await homeActions(page);

     var button = await page.$(`#pages-home--subscribe-to-watch`);
    await button.evaluate(b => b.click());
    await delay(200)

    await homeActions(page);
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

    var footer = await frame.$(`#footer`);
    footer.hover();
    await delay(50);
    footer.hover();
    await delay(50);
    footer.hover();
    await delay(50);
    footer.hover();
    await delay(200);

    var elem = await frame.waitForSelector('.btn-wishlist')
    await elem.focus()
    await delay(200);
    // await elem.click()


  //   elem = frame.waitForSelector('.s72-btn.s72-btn-trailer')
  // await delay(100);
  // elem.then((aaa)=>{
  // aaa.click();
  // aaa.hover();
  // });
  //   var elem = await frame.waitForSelector('s72-share-modal')
  //   await elem.click()

  // await delay(200);
  // console.log(5);

  // var elem = await frame.waitForSelector('.s72-btn-rent')
  // await elem.click()
  }
function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time)
    });
 }