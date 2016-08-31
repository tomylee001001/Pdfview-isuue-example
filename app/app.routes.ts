import {RouterConfig} from "@angular/router";
import {nsProvideRouter} from "nativescript-angular/router"
import {HomeComponent} from "./pages/home/home";
import {PdfComponent} from "./pages/pdfview/pdfview";

export const routes: RouterConfig = [
  { path: "", component: HomeComponent },
  { path: "pdfview", component: PdfComponent }//,
  //{ path: "player/:id", component: PlayerPage }
];
/*
@RouteConfig([{path: '/component/:id/:id2',name: 'MyCompB', component:MyCompB}])
export class MyCompA {
    onClick(){
        this._router.navigate( ['MyCompB', {id: "someId", id2: "another ID"}]);
    }
}*/
export const APP_ROUTER_PROVIDERS = [
  nsProvideRouter(routes, {})
];