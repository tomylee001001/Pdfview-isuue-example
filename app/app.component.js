"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "main",
            directives: [router_1.NS_ROUTER_DIRECTIVES],
            template: "<page-router-outlet></page-router-outlet>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/*
import {Component,OnInit} from "@angular/core";
import  "nativescript-pdf-view";

export class test{
    public data:string;
    public col_nr:number;
    public row_br:number;
}

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {
     constructor() {
    }
    ngOnInit() {}
}*/ 
//# sourceMappingURL=app.component.js.map