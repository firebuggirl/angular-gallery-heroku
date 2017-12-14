"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var HerokuDemoPage = (function () {
    function HerokuDemoPage() {
    }
    HerokuDemoPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    HerokuDemoPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return HerokuDemoPage;
}());
exports.HerokuDemoPage = HerokuDemoPage;
//# sourceMappingURL=app.po.js.map