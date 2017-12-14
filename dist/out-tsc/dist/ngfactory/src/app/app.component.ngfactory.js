/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("./app.component.css.shim.ngstyle");
var i1 = require("@angular/core");
var i2 = require("@angular/router");
var i3 = require("@angular/common");
var i4 = require("../../../../src/app/app.component");
var styles_AppComponent = [i0.styles];
exports.RenderType_AppComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_AppComponent,
    data: { 'animation': [{ type: 7, name: 'listAnimation', definitions: [{ type: 1, expr: '* => *',
                        animation: [{ type: 11, selector: '.links', animation: { type: 6, styles: { opacity: 0 },
                                    offset: null }, options: { optional: true } }, { type: 11, selector: '.links',
                                animation: { type: 12, timings: '300ms', animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6,
                                                        styles: { opacity: 0, transform: 'translateY(-75%)', offset: 0 }, offset: null },
                                                    { type: 6, styles: { opacity: 0.5, transform: 'translateY(35px)', offset: 0.3 },
                                                        offset: null }, { type: 6, styles: { opacity: 1, transform: 'translateY(0)',
                                                            offset: 1 }, offset: null }] }, timings: '1s ease-in' }] }, options: { optional: true } }],
                        options: null }], options: {} }] } });
function View_AppComponent_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵted(-1, null, ['\n  '])), (_l()(), i1.ɵeld(1, 0, null, null, 17, 'div', [['id', 'container']], [[24, '@listAnimation',
                0]], null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n'])), (_l()(), i1.ɵeld(3, 0, null, null, 14, 'nav', [], null, null, null, null, null)),
        (_l()(), i1.ɵted(-1, null, ['\n'])), (_l()(), i1.ɵeld(5, 0, null, null, 11, 'ul', [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n\n  '])),
        (_l()(), i1.ɵeld(7, 0, null, null, 3, 'li', [['class', 'links']], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 2, 'a', [['class', 'butn brown dark'], ['routerLink',
                '/']], [[1, 'target', 0], [8, 'href', 4]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i1.ɵnov(_v, 9).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(9, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, 'routerLink'] }, null), (_l()(), i1.ɵted(-1, null, ['Home'])), (_l()(), i1.ɵted(-1, null, ['\n  '])), (_l()(), i1.ɵeld(12, 0, null, null, 3, 'li', [['class', 'links']], null, null, null, null, null)), (_l()(), i1.ɵeld(13, 0, null, null, 2, 'a', [['class',
                'butn brown dark'], ['routerLink', 'about']], [[1, 'target', 0], [8, 'href', 4]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i1.ɵnov(_v, 14).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(14, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, 'routerLink'] }, null), (_l()(), i1.ɵted(-1, null, ['About'])), (_l()(), i1.ɵted(-1, null, ['\n'])), (_l()(), i1.ɵted(-1, null, ['\n'])), (_l()(),
            i1.ɵted(-1, null, ['\n'])), (_l()(), i1.ɵted(-1, null, ['\n  '])),
        (_l()(), i1.ɵeld(20, 16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
        i1.ɵdid(21, 212992, null, 0, i2.RouterOutlet, [i2.ChildrenOutletContexts,
            i1.ViewContainerRef, i1.ComponentFactoryResolver, [8, null], i1.ChangeDetectorRef], null, null), (_l()(), i1.ɵted(-1, null, ['\n']))], function (_ck, _v) {
        var currVal_3 = '/';
        _ck(_v, 9, 0, currVal_3);
        var currVal_6 = 'about';
        _ck(_v, 14, 0, currVal_6);
        _ck(_v, 21, 0);
    }, function (_ck, _v) {
        var currVal_0 = undefined;
        _ck(_v, 1, 0, currVal_0);
        var currVal_1 = i1.ɵnov(_v, 9).target;
        var currVal_2 = i1.ɵnov(_v, 9).href;
        _ck(_v, 8, 0, currVal_1, currVal_2);
        var currVal_4 = i1.ɵnov(_v, 14).target;
        var currVal_5 = i1.ɵnov(_v, 14).href;
        _ck(_v, 13, 0, currVal_4, currVal_5);
    });
}
exports.View_AppComponent_0 = View_AppComponent_0;
function View_AppComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, 'my-app', [], null, null, null, View_AppComponent_0, exports.RenderType_AppComponent)),
        i1.ɵdid(1, 114688, null, 0, i4.AppComponent, [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
exports.View_AppComponent_Host_0 = View_AppComponent_Host_0;
exports.AppComponentNgFactory = i1.ɵccf('my-app', i4.AppComponent, View_AppComponent_Host_0, {}, {}, []);
//# sourceMappingURL=app.component.ngfactory.js.map