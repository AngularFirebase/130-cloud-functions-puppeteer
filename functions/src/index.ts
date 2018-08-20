import * as functions from 'firebase-functions';

import * as puppeteer from 'puppeteer';

export const ssr = functions
  .runWith({ memory: '1GB' })
  .https.onRequest(async (request, response) => {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    await page.goto('https://angularfirebase-267db.firebaseapp.com/eagle', {
      waitUntil: 'networkidle0'
    });

    const content = await page.content();

    response.send(content);
  });
