import {Component,OnInit} from "@angular/core";
import  "nativescript-pdf-view";
import {Location} from "@angular/common";
import {dergi} from "../home/home";
import {Config} from "../../global_config";
@Component({
  selector: "pdfview",
  templateUrl: "pages/pdfview/pdfview.html",
  //providers:[BoardService],
  styleUrls: ["pages/pdfview/pdfview.css"]
})
export class PdfComponent implements OnInit{
    public location:Location;
    public _dergi:dergi;
    public title_:string;
    public pdf_url_:string;
    constructor(private _location:Location){
        this.location=_location;
        
    }
    geri()
    {
        this._location.back();
    }
    ngOnInit()
    {
        this._dergi=Config._selected_dergi;
        this.pdf_url_=this._dergi.pdf_url;
        this.title_=this._dergi.title;
        alert(this._dergi.pdf_url);
    }
}