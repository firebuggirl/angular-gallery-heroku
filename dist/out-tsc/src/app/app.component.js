"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var AppComponent = (function () {
    //apiUrl = environment.apiUrl;
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'my-app',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
                animations: [
                    animations_1.trigger('listAnimation', [
                        animations_1.transition('* => *', [
                            animations_1.query('.links', animations_1.style({ opacity: 0 }), { optional: true }),
                            animations_1.query('.links', animations_1.stagger('300ms', [
                                animations_1.animate('1s ease-in', animations_1.keyframes([
                                    animations_1.style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
                                    animations_1.style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
                                    animations_1.style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
                                ]))
                            ]), { optional: true })
                        ])
                    ])
                ]
            },] },
];
/** @nocollapse */
AppComponent.ctorParameters = function () { return []; };
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map