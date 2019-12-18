const puppeteer = require("puppeteer");

const getData = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(
    "https://www.auchan.fr/sony-console-ps4-slim-500go-chassis-f-noire/p-c1077911"
  );

  browser.close();
  return result;
};
getData().then(value => {
  console.log(value);
});
