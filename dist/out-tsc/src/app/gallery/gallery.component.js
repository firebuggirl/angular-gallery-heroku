"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var GalleryComponent = (function () {
    function GalleryComponent() {
        this.emoji = ['🎉', '😍', '😜', '👍'];
    }
    GalleryComponent.prototype.setSelectedImage = function (image) {
        this.selectedImage = image;
    };
    GalleryComponent.prototype.navigate = function (forward) {
        var index = this.datasource.indexOf(this.selectedImage) + (forward ? 1 : -1);
        if (index >= 0 && index < this.datasource.length) {
            this.selectedImage = this.datasource[index];
        }
    };
    GalleryComponent.prototype.changeEmoji = function () {
        this.activeEmoji = this.emoji[Math.floor(Math.random() * this.emoji.length)];
    };
    return GalleryComponent;
}());
GalleryComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'gallery',
                templateUrl: './gallery.component.html',
                styles: ["\n   .modal-body{\n    position:relative;\n   }\n    .caption{\n    \tposition:absolute;\n      height:90px;\n    \twidth:100%;\n    \ttop:410;\n    \tleft:0;\n    \topacity:0.9;\n    \tbackground-color: #292621;\n    \tcolor:white;\n    \tpadding:5px;\n    \tfont-family:verdana;\n    \tfont-size:12px;\n    }\n    p {\n       -webkit-margin-before: 5px !important;\n       -webkit-margin-after: 5px !important;\n    }\n   .arrows{\n    display: flex;\n    justify-content: space-between;\n    font-size:40px;\n   }\n\n\n  "]
            },] },
];
/** @nocollapse */
GalleryComponent.ctorParameters = function () { return []; };
GalleryComponent.propDecorators = {
    'datasource': [{ type: core_1.Input },],
};
exports.GalleryComponent = GalleryComponent;
//# sourceMappingURL=gallery.component.js.map