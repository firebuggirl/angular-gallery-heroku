/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./app.module");
var i2 = require("./app.component");
var i3 = require("./home/home.component.ngfactory");
var i4 = require("./about/about.component.ngfactory");
var i5 = require("./app.component.ngfactory");
var i6 = require("@angular/common");
var i7 = require("@angular/platform-browser");
var i8 = require("@angular/animations/browser");
var i9 = require("@angular/platform-browser/animations");
var i10 = require("@angular/animations");
var i11 = require("@angular/forms");
var i12 = require("@angular/http");
var i13 = require("@angular/router");
var i14 = require("./home/home.component");
var i15 = require("./about/about.component");
var i16 = require("./app-routing.module");
exports.AppModuleNgFactory = i0.ɵcmf(i1.AppModule, [i2.AppComponent], function (_l) {
    return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.HomeComponentNgFactory, i4.AboutComponentNgFactory, i5.AppComponentNgFactory]],
            [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵm, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i6.NgLocalization, i6.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵk, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵl, []), i0.ɵmpd(4608, i7.DomSanitizer, i7.ɵe, [i6.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i7.DomSanitizer]),
        i0.ɵmpd(4608, i7.HAMMER_GESTURE_CONFIG, i7.HammerGestureConfig, []),
        i0.ɵmpd(5120, i7.EVENT_MANAGER_PLUGINS, function (p0_0, p1_0, p2_0, p2_1) {
            return [new i7.ɵDomEventsPlugin(p0_0), new i7.ɵKeyEventsPlugin(p1_0), new i7.ɵHammerGesturesPlugin(p2_0, p2_1)];
        }, [i6.DOCUMENT, i6.DOCUMENT, i6.DOCUMENT, i7.HAMMER_GESTURE_CONFIG]), i0.ɵmpd(4608, i7.EventManager, i7.EventManager, [i7.EVENT_MANAGER_PLUGINS, i0.NgZone]),
        i0.ɵmpd(135680, i7.ɵDomSharedStylesHost, i7.ɵDomSharedStylesHost, [i6.DOCUMENT]),
        i0.ɵmpd(4608, i7.ɵDomRendererFactory2, i7.ɵDomRendererFactory2, [i7.EventManager,
            i7.ɵDomSharedStylesHost]), i0.ɵmpd(5120, i8.AnimationDriver, i9.ɵc, []),
        i0.ɵmpd(5120, i8.ɵAnimationStyleNormalizer, i9.ɵd, []), i0.ɵmpd(4608, i8.ɵAnimationEngine, i9.ɵb, [i8.AnimationDriver, i8.ɵAnimationStyleNormalizer]),
        i0.ɵmpd(5120, i0.RendererFactory2, i9.ɵe, [i7.ɵDomRendererFactory2, i8.ɵAnimationEngine,
            i0.NgZone]), i0.ɵmpd(6144, i7.ɵSharedStylesHost, null, [i7.ɵDomSharedStylesHost]),
        i0.ɵmpd(4608, i0.Testability, i0.Testability, [i0.NgZone]), i0.ɵmpd(4608, i7.Meta, i7.Meta, [i6.DOCUMENT]), i0.ɵmpd(4608, i7.Title, i7.Title, [i6.DOCUMENT]),
        i0.ɵmpd(4608, i10.AnimationBuilder, i9.ɵBrowserAnimationBuilder, [i0.RendererFactory2,
            i7.DOCUMENT]), i0.ɵmpd(4608, i11.ɵi, i11.ɵi, []), i0.ɵmpd(4608, i12.BrowserXhr, i12.BrowserXhr, []), i0.ɵmpd(4608, i12.ResponseOptions, i12.BaseResponseOptions, []), i0.ɵmpd(5120, i12.XSRFStrategy, i12.ɵb, []), i0.ɵmpd(4608, i12.XHRBackend, i12.XHRBackend, [i12.BrowserXhr,
            i12.ResponseOptions, i12.XSRFStrategy]), i0.ɵmpd(4608, i12.RequestOptions, i12.BaseRequestOptions, []), i0.ɵmpd(5120, i12.Http, i12.ɵc, [i12.XHRBackend,
            i12.RequestOptions]), i0.ɵmpd(5120, i13.ActivatedRoute, i13.ɵf, [i13.Router]),
        i0.ɵmpd(4608, i13.NoPreloading, i13.NoPreloading, []), i0.ɵmpd(6144, i13.PreloadingStrategy, null, [i13.NoPreloading]), i0.ɵmpd(135680, i13.RouterPreloader, i13.RouterPreloader, [i13.Router, i0.NgModuleFactoryLoader,
            i0.Compiler, i0.Injector, i13.PreloadingStrategy]), i0.ɵmpd(4608, i13.PreloadAllModules, i13.PreloadAllModules, []), i0.ɵmpd(5120, i13.ROUTER_INITIALIZER, i13.ɵi, [i13.ɵg]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) {
            return [p0_0];
        }, [i13.ROUTER_INITIALIZER]), i0.ɵmpd(512, i6.CommonModule, i6.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i7.ɵa, []), i0.ɵmpd(1024, i0.NgProbeToken, function () {
            return [i13.ɵb()];
        }, []), i0.ɵmpd(512, i13.ɵg, i13.ɵg, [i0.Injector]), i0.ɵmpd(256, i0.APP_ID, 'angular2-photo-gallery', []), i0.ɵmpd(2048, i7.ɵTRANSITION_ID, null, [i0.APP_ID]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p0_1, p1_0, p2_0, p2_1, p2_2) {
            return [i7.ɵc(p0_0, p0_1), i13.ɵh(p1_0), i7.ɵf(p2_0, p2_1, p2_2)];
        }, [[2, i7.NgProbeToken], [2, i0.NgProbeToken], i13.ɵg, i7.ɵTRANSITION_ID, i6.DOCUMENT,
            i0.Injector]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ɵe, i0.ɵe, [i0.NgZone, i0.ɵConsole,
            i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]),
        i0.ɵmpd(2048, i0.ApplicationRef, null, [i0.ɵe]), i0.ɵmpd(512, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(512, i7.BrowserModule, i7.BrowserModule, [[3, i7.BrowserModule]]), i0.ɵmpd(512, i9.BrowserAnimationsModule, i9.BrowserAnimationsModule, []), i0.ɵmpd(512, i11.ɵba, i11.ɵba, []), i0.ɵmpd(512, i11.FormsModule, i11.FormsModule, []),
        i0.ɵmpd(512, i12.HttpModule, i12.HttpModule, []), i0.ɵmpd(1024, i13.ɵa, i13.ɵd, [[3, i13.Router]]), i0.ɵmpd(512, i13.UrlSerializer, i13.DefaultUrlSerializer, []), i0.ɵmpd(512, i13.ChildrenOutletContexts, i13.ChildrenOutletContexts, []), i0.ɵmpd(256, i13.ROUTER_CONFIGURATION, {}, []),
        i0.ɵmpd(1024, i6.LocationStrategy, i13.ɵc, [i6.PlatformLocation, [2, i6.APP_BASE_HREF],
            i13.ROUTER_CONFIGURATION]), i0.ɵmpd(512, i6.Location, i6.Location, [i6.LocationStrategy]),
        i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i0.SystemJsNgModuleLoader, [i0.Compiler, [2, i0.SystemJsNgModuleLoaderConfig]]),
        i0.ɵmpd(1024, i13.ROUTES, function () {
            return [[{ path: '', component: i14.HomeComponent }, { path: 'about', component: i15.AboutComponent }]];
        }, []), i0.ɵmpd(1024, i13.Router, i13.ɵe, [i0.ApplicationRef, i13.UrlSerializer,
            i13.ChildrenOutletContexts, i6.Location, i0.Injector, i0.NgModuleFactoryLoader,
            i0.Compiler, i13.ROUTES, i13.ROUTER_CONFIGURATION, [2, i13.UrlHandlingStrategy],
            [2, i13.RouteReuseStrategy]]), i0.ɵmpd(512, i13.RouterModule, i13.RouterModule, [[2, i13.ɵa], [2, i13.Router]]), i0.ɵmpd(512, i16.AppRoutingModule, i16.AppRoutingModule, []), i0.ɵmpd(512, i1.AppModule, i1.AppModule, [])]);
});
//# sourceMappingURL=app.module.ngfactory.js.map