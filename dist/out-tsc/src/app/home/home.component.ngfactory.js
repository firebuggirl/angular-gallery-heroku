/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("./home.component.css.shim.ngstyle");
var i1 = require("@angular/core");
var i2 = require("../gallery/gallery.component.ngfactory");
var i3 = require("../gallery/gallery.component");
var i4 = require("./home.component");
var i5 = require("@angular/platform-browser");
var styles_HomeComponent = [i0.styles];
exports.RenderType_HomeComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_HomeComponent, data: { 'animation': [{ type: 7, name: 'explainerAnim', definitions: [{ type: 1,
                        expr: '* => *', animation: [{ type: 11, selector: '.col', animation: { type: 6, styles: { opacity: 0,
                                        transform: 'translateX(-40px)' }, offset: null }, options: null },
                            { type: 11, selector: '.col', animation: { type: 12, timings: '500ms', animation: [{ type: 4,
                                            styles: { type: 6, styles: { opacity: 1, transform: 'translateX(0)' }, offset: null },
                                            timings: '800ms 1.2s ease-out' }] }, options: null }, { type: 11, selector: '.col',
                                animation: [{ type: 4, styles: { type: 6, styles: '*', offset: null },
                                        timings: 1000 }], options: null }], options: null }],
                options: {} }] } });
function View_HomeComponent_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵted(-1, null, ['\n\n\n'])), (_l()(), i1.ɵeld(1, 0, null, null, 7, 'div', [], [[24, '@explainerAnim', 0]], null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n   '])), (_l()(), i1.ɵeld(3, 0, null, null, 4, 'div', [['class', 'col']], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n     '])), (_l()(), i1.ɵeld(5, 0, null, null, 1, 'gallery', [], null, null, null, i2.View_GalleryComponent_0, i2.RenderType_GalleryComponent)), i1.ɵdid(6, 49152, null, 0, i3.GalleryComponent, [], { datasource: [0, 'datasource'] }, null), (_l()(), i1.ɵted(-1, null, ['\n   '])), (_l()(), i1.ɵted(-1, null, ['\n'])), (_l()(), i1.ɵted(-1, null, ['\n\n\n'])), (_l()(),
            i1.ɵted(-1, null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = _co.images;
        _ck(_v, 6, 0, currVal_1);
    }, function (_ck, _v) {
        var currVal_0 = undefined;
        _ck(_v, 1, 0, currVal_0);
    });
}
exports.View_HomeComponent_0 = View_HomeComponent_0;
function View_HomeComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, 'app-home', [], null, null, null, View_HomeComponent_0, exports.RenderType_HomeComponent)),
        i1.ɵdid(1, 114688, null, 0, i4.HomeComponent, [i5.Meta, i5.Title], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
exports.View_HomeComponent_Host_0 = View_HomeComponent_Host_0;
exports.HomeComponentNgFactory = i1.ɵccf('app-home', i4.HomeComponent, View_HomeComponent_Host_0, {}, {}, []);
//# sourceMappingURL=home.component.ngfactory.js.map