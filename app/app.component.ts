import {Component} from "@angular/core";
import {NS_ROUTER_DIRECTIVES} from "nativescript-angular/router";

@Component({
  selector: "main",
  directives: [NS_ROUTER_DIRECTIVES],
  template: "<page-router-outlet></page-router-outlet>"
})
export class AppComponent {}
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