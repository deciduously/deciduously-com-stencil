const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('https://deciduously-com.netlify.com/cv', {
    waitUntil: 'networkidle2'
  });
  await page.screenshot({
    path: 'cv.png',
    printBackground: true,
    clip: { x: 132.28125, y: 145.015625, width: 816.375, height: 1054.484375 }
  });

  await browser.close();
})();
