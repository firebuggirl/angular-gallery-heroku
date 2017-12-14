"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/animations");
var HomeComponent = (function () {
    function HomeComponent(meta, title) {
        title.setTitle('My Spiffy Home Page');
        meta.addTags([
            { name: 'author', content: 'Coursetro.com' },
            { name: 'keywords', content: 'angular seo, angular 4 universal, etc' },
            { name: 'description', content: 'This is my Angular SEO-based App, enjoy it!' }
        ]);
        this.images = [
            {
                "url": "assets/img/desertyucca2.jpg",
                "title": "Desert Yucca",
                "caption": "Yucca Tree in the Mohave Desert."
            },
            {
                "url": "assets/img/desertplant.jpg",
                "title": "Cholla Cactus",
                "caption": "A Cholla Cactus decorates the Mohave landscape."
            },
            {
                "url": "assets/img/deserttree.jpg",
                "title": "Desert Tree",
                "caption": "The view from my workspace."
            },
            {
                "url": "assets/img/frontview.jpg",
                "title": "Front View",
                "caption": "View from home."
            },
            {
                "url": "assets/img/frontyardsundown.jpg",
                "title": "Front Yard Sundown",
                "caption": "Gazing out into the West."
            },
            {
                "url": "assets/img/frontyardsunset2.jpg",
                "title": "Western Sunset",
                "caption": "The view to the West."
            },
            {
                "url": "assets/img/highdesertlandscape.jpg",
                "title": "Joshua Trees",
                "caption": "The Joshua Tree landscape."
            },
            {
                "url": "assets/img/pappyharrietsskyfire.jpg",
                "title": "Sunset at Pappy and Harriet's",
                "caption": "Sunset in Pioneer Town CA."
            },
            {
                "url": "assets/img/pappyssunsetlandscape.jpg",
                "title": "Sunset at Pappy and Harriet's",
                "caption": "Sunset in Pioneer Town, CA."
            },
            {
                "url": "assets/img/pappysunset.jpg",
                "title": "Sunset at Pappy and Harriet's",
                "caption": "Sunset in Pioneer Town, CA."
            },
            {
                "url": "assets/img/sky.jpg",
                "title": "Western Night Sky",
                "caption": "Sundown in the Mohave Desert."
            },
            {
                "url": "assets/img/virgilhomeaug.jpg",
                "title": "King of the World",
                "caption": "Virgil dog contemplating a world takeover!"
            },
            {
                "url": "assets/img/virgilpappyandharrietsmedium.jpg",
                "title": "Virgil Dog",
                "caption": "Where are my treats?!"
            },
            {
                "url": "assets/img/yardflowers.jpg",
                "title": "Purple Schrub Tree",
                "caption": "Front yard Shrub Tree"
            },
            {
                "url": "assets/img/yuccacamp.jpg",
                "title": "Yucca Trees",
                "caption": "Yucca Trees in the Mohave"
            },
            {
                "url": "assets/img/yuccavalleysunset.jpg",
                "title": "Pioneer Town Sunset",
                "caption": "Pioneer Town Sunset looking West"
            }
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css'],
                animations: [
                    animations_1.trigger('explainerAnim', [
                        animations_1.transition('* => *', [
                            animations_1.query('.col', animations_1.style({ opacity: 0, transform: 'translateX(-40px)' })),
                            animations_1.query('.col', animations_1.stagger('500ms', [
                                animations_1.animate('800ms 1.2s ease-out', animations_1.style({ opacity: 1, transform: 'translateX(0)' })),
                            ])),
                            animations_1.query('.col', [
                                animations_1.animate(1000, animations_1.style('*'))
                            ])
                        ])
                    ])
                ]
            },] },
];
/** @nocollapse */
HomeComponent.ctorParameters = function () { return [
    { type: platform_browser_1.Meta, },
    { type: platform_browser_1.Title, },
]; };
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map