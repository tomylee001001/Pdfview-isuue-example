"use strict";
require("reflect-metadata");
var http_1 = require("@angular/http");
var application_1 = require("nativescript-angular/application");
var app_component_1 = require("./app.component");
var app_routes_1 = require("./app.routes");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("CardView", function () { return require("nativescript-cardview").CardView; });
element_registry_1.registerElement("PullToRefresh", function () { return require("nativescript-pulltorefresh").PullToRefresh; });
application_1.nativeScriptBootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, app_routes_1.APP_ROUTER_PROVIDERS]);
/*
// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {AppComponent} from "./app.component";

nativeScriptBootstrap(AppComponent);
*/ 
//# sourceMappingURL=main.js.map