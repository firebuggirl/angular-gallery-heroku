"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var animations_1 = require("@angular/platform-browser/animations");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var gallery_component_1 = require("./gallery/gallery.component");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var mohave_component_1 = require("./mohave/mohave.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [
                    app_component_1.AppComponent,
                    gallery_component_1.GalleryComponent,
                    home_component_1.HomeComponent,
                    about_component_1.AboutComponent,
                    mohave_component_1.MohaveComponent
                ],
                imports: [
                    platform_browser_1.BrowserModule.withServerTransition({ appId: 'angular2-photo-gallery' }),
                    animations_1.BrowserAnimationsModule,
                    forms_1.FormsModule,
                    http_1.HttpModule,
                    app_routing_module_1.AppRoutingModule
                ],
                providers: [],
                bootstrap: [app_component_1.AppComponent]
            },] },
];
/** @nocollapse */
AppModule.ctorParameters = function () { return []; };
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map