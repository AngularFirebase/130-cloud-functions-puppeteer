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
exports.ssr = functions
    .runWith({ memory: '1GB' })
    .https.onRequest((request, response) => __awaiter(this, void 0, void 0, function* () {
    const browser = yield puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const requestURL = request.query.url;
    const page = yield browser.newPage();
    yield page.goto('https://angularfirebase-267db.firebaseapp.com/eagle', {
        waitUntil: 'networkidle0'
    });
    const content = yield page.content();
    response.send(content);
}));
//# sourceMappingURL=index.js.map