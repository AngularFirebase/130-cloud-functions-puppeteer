import * as functions from 'firebase-functions';

import * as puppeteer from 'puppeteer';
import { serialize } from './renderer';
import * as fetch from 'node-fetch';

const appURL = 'https://angularfirebase-267db.firebaseapp.com';
const renderURL =
  'https://us-central1-angularfirebase-267db.cloudfunctions.net/render';

export const render = functions
  .runWith({ memory: '1GB' })
  .https.onRequest(async (request, response) => {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const requestURL = request.query.requestURL;

    const page = await browser.newPage();
    const { status, content } = await serialize(page, requestURL, false);

    response.status(status).send(content);
  });

export const ssr = functions.https.onRequest(async (request, response) => {
  const bots = [
    'twitterbot',
    'facebookexternalhit',
    'linkedinbot',
    'pinterest',
    'slackbot'
  ];

  const userAgent = request.headers['user-agent'] as string;

  const isBot = bots.filter(bot => userAgent.toLowerCase().includes(bot))
    .length;

  const requestURL = appURL + request.url;

  if (isBot) {
    const html = await fetch(`${renderURL}?requestURL=${requestURL}`);
    const body = await html.text();
    response.send(body.toString());
  } else {
    const html = await fetch(appURL);
    const body = await html.text();

    response.send(body.toString());
  }
});

// export const ssr = functions
// .runWith({ memory: '1GB' })
// .https.onRequest(async (request, response) => {
// const page = await browser.newPage();

// await page.goto('https://angularfirebase-267db.firebaseapp.com/eagle', {
//   waitUntil: 'networkidle0'
// });

// const content = await page.content();

// response.send(content);

// const { requestURL, isMobile } = request.query;

// console.log('url', requestURL);

// });
