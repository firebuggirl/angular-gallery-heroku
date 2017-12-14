/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("@angular/common");
var i2 = require("./gallery.component");
var styles_GalleryComponent = ['.modal-body[_ngcontent-%COMP%]{\n    position:relative;\n   }\n    .caption[_ngcontent-%COMP%]{\n    	position:absolute;\n      height:90px;\n    	width:100%;\n    	top:410;\n    	left:0;\n    	opacity:0.9;\n    	background-color:black;\n    	color:white;\n    	padding:5px;\n    	font-family:verdana;\n    	font-size:12px;\n    }\n    p[_ngcontent-%COMP%] {\n       -webkit-margin-before: 5px !important;\n       -webkit-margin-after: 5px !important;\n    }\n   .arrows[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: space-between;\n    font-size:40px;\n   }'];
exports.RenderType_GalleryComponent = i0.ɵcrt({ encapsulation: 0,
    styles: styles_GalleryComponent, data: {} });
function View_GalleryComponent_1(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 22, 'div', [['class',
                'selectedImage']], null, null, null, null, null)),
        (_l()(), i0.ɵted(-1, null, ['\n        '])), (_l()(), i0.ɵeld(2, 0, null, null, 0, 'img', [], [[8, 'src', 4]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, ['\n\n        '])),
        (_l()(), i0.ɵeld(4, 0, null, null, 7, 'div', [['class', 'arrows']], null, null, null, null, null)),
        (_l()(), i0.ɵted(-1, null, ['\n        '])), (_l()(), i0.ɵeld(6, 0, null, null, 1, 'div', [['class', 'arrow-back']], null, [[null,
                'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.navigate(false) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i0.ɵted(-1, null, ['\n            <\n         '])),
        (_l()(), i0.ɵted(-1, null, ['\n         '])), (_l()(), i0.ɵeld(9, 0, null, null, 1, 'div', [['class', 'arrow-forward']], null, [[null,
                'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.navigate(true) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i0.ɵted(-1, null, ['\n            >\n         '])),
        (_l()(), i0.ɵted(-1, null, ['\n        '])), (_l()(), i0.ɵted(-1, null, ['\n        '])), (_l()(), i0.ɵeld(13, 0, null, null, 8, 'div', [['class', 'caption']], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ['\n           '])), (_l()(),
            i0.ɵeld(15, 0, null, null, 2, 'p', [], null, null, null, null, null)), (_l()(), i0.ɵeld(16, 0, null, null, 1, 'strong', [], null, null, null, null, null)), (_l()(), i0.ɵted(17, null, ['', ''])), (_l()(), i0.ɵted(-1, null, ['\n           '])), (_l()(), i0.ɵeld(19, 0, null, null, 1, 'p', [], null, null, null, null, null)), (_l()(), i0.ɵted(20, null, ['', ''])), (_l()(), i0.ɵted(-1, null, ['\n        '])), (_l()(), i0.ɵted(-1, null, ['\n      ']))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = i0.ɵinlineInterpolate(1, '', _co.selectedImage.url, '');
        _ck(_v, 2, 0, currVal_0);
        var currVal_1 = _co.selectedImage.title;
        _ck(_v, 17, 0, currVal_1);
        var currVal_2 = _co.selectedImage.caption;
        _ck(_v, 20, 0, currVal_2);
    });
}
function View_GalleryComponent_2(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, 'li', [], null, null, null, null, null)), (_l()(),
            i0.ɵted(-1, null, ['\n        '])), (_l()(), i0.ɵeld(2, 0, null, null, 0, 'img', [['class', 'tn'], ['data-target', '#selectedImageModal'],
            ['data-toggle', 'modal'], ['height', '146'], ['width', '191']], [[8, 'src', 4]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.setSelectedImage(_v.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i0.ɵted(-1, null, ['\n     ']))], null, function (_ck, _v) {
        var currVal_0 = i0.ɵinlineInterpolate(1, '', _v.context.$implicit.url, '');
        _ck(_v, 2, 0, currVal_0);
    });
}
function View_GalleryComponent_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵted(-1, null, ['\n'])), (_l()(), i0.ɵeld(1, 0, null, null, 13, 'div', [['class', 'modal fade'], ['id', 'selectedImageModal']], null, null, null, null, null)), (_l()(),
            i0.ɵted(-1, null, ['\n  '])), (_l()(), i0.ɵeld(3, 0, null, null, 10, 'div', [['class', 'modal-dialog'], ['role', 'document']], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ['\n    '])), (_l()(), i0.ɵeld(5, 0, null, null, 7, 'div', [['class',
                'modal-content']], null, null, null, null, null)),
        (_l()(), i0.ɵted(-1, null, ['\n      '])), (_l()(), i0.ɵeld(7, 0, null, null, 4, 'div', [['class', 'modal-body']], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ['\n\n      '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_GalleryComponent_1)), i0.ɵdid(10, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null),
        (_l()(), i0.ɵted(-1, null, ['\n\n      '])), (_l()(), i0.ɵted(-1, null, ['\n    '])), (_l()(), i0.ɵted(-1, null, ['\n  '])), (_l()(), i0.ɵted(-1, null, ['\n'])), (_l()(), i0.ɵted(-1, null, ['\n  '])), (_l()(),
            i0.ɵeld(16, 0, null, null, 4, 'ul', [['id', 'thumbnailsList']], null, null, null, null, null)),
        (_l()(), i0.ɵted(-1, null, ['\n     '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_GalleryComponent_2)), i0.ɵdid(19, 802816, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i0.ɵted(-1, null, ['\n  '])), (_l()(), i0.ɵted(-1, null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.selectedImage;
        _ck(_v, 10, 0, currVal_0);
        var currVal_1 = _co.datasource;
        _ck(_v, 19, 0, currVal_1);
    }, null);
}
exports.View_GalleryComponent_0 = View_GalleryComponent_0;
function View_GalleryComponent_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, 'gallery', [], null, null, null, View_GalleryComponent_0, exports.RenderType_GalleryComponent)),
        i0.ɵdid(1, 49152, null, 0, i2.GalleryComponent, [], null, null)], null, null);
}
exports.View_GalleryComponent_Host_0 = View_GalleryComponent_Host_0;
exports.GalleryComponentNgFactory = i0.ɵccf('gallery', i2.GalleryComponent, View_GalleryComponent_Host_0, { datasource: 'datasource' }, {}, []);
//# sourceMappingURL=gallery.component.ngfactory.js.map