"use strict";
var router_1 = require("nativescript-angular/router");
var home_1 = require("./pages/home/home");
var pdfview_1 = require("./pages/pdfview/pdfview");
exports.routes = [
    { path: "", component: home_1.HomeComponent },
    { path: "pdfview", component: pdfview_1.PdfComponent } //,
];
/*
@RouteConfig([{path: '/component/:id/:id2',name: 'MyCompB', component:MyCompB}])
export class MyCompA {
    onClick(){
        this._router.navigate( ['MyCompB', {id: "someId", id2: "another ID"}]);
    }
}*/
exports.APP_ROUTER_PROVIDERS = [
    router_1.nsProvideRouter(exports.routes, {})
];
//# sourceMappingURL=app.routes.js.map