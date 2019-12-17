const puppeteer = require('puppeteer');

let productUrl = ''

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newpage();
    await page.goto(productUrl);

    let productData = await.page.evaluate(() => {
        let productJson = {};
        try { productJson.name = document.querySelector('h1.product-detail--title').innerText
            
        } catch (exception) {
            
        }
    })
})