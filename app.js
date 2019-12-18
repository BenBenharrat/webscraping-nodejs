const puppeteer = require("puppeteer");

const getData = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(
    "https://www.auchan.fr/sony-console-ps4-slim-500go-chassis-f-noire/p-c1077911"
  );

  const result = await page.evaluate(() => {
    let productName = document.querySelector(".product-detail--title")
      .innerText;
    let productPrice = document.querySelector(".product-price--formattedValue")
      .innerText;
    let productUrl = window.location.href;
    let productImgUrl = document.querySelector(
      ".x-scroller > label:nth-child(3) > a:nth-child(1) > img:nth-child(1)"
    ).currentSrc;

    return { productName, productPrice, productUrl, productImgUrl };
  });

  browser.close();
  return result;
};
getData().then(value => {
  console.log(value);
});
