"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const puppeteer = require("puppeteer");
const renderer_1 = require("./renderer");
const fetch = require("node-fetch");
const appURL = 'https://angularfirebase-267db.firebaseapp.com';
const renderURL = 'https://us-central1-angularfirebase-267db.cloudfunctions.net/render';
exports.render = functions
    .runWith({ memory: '1GB' })
    .https.onRequest((request, response) => __awaiter(this, void 0, void 0, function* () {
    const browser = yield puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const requestURL = request.query.requestURL;
    const page = yield browser.newPage();
    const { status, content } = yield renderer_1.serialize(page, requestURL, false);
    console.log(content);
    response.status(status).send(content);
}));
exports.ssr = functions.https.onRequest((request, response) => __awaiter(this, void 0, void 0, function* () {
    const bots = [
        'twitterbot',
        'facebookexternalhit',
        'linkedinbot',
        'pinterest',
        'slackbot'
    ];
    const userAgent = request.headers['user-agent'];
    const isBot = bots.filter(bot => userAgent.toLowerCase().includes(bot))
        .length;
    console.log(isBot, userAgent);
    const requestURL = appURL + request.url;
    console.log(requestURL);
    if (isBot) {
        const html = yield fetch(`${renderURL}?requestURL=${requestURL}`);
        const body = yield html.text();
        response.send(body.toString());
    }
    else {
        const html = yield fetch('https://angularfirebase-267db.firebaseapp.com');
        const body = yield html.text();
        response.send(body.toString());
    }
}));
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
//# sourceMappingURL=index.js.map