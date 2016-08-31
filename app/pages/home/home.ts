import {Component,OnInit} from "@angular/core";

import {Config} from "../../global_config";
import {Router} from "@angular/router";


export class dergi{
    pic_url:string;
    title:string;
    pdf_url:string;
}

@Component({
  selector: "home",
  templateUrl: "pages/home/home.html",
  //providers:[BoardService],
  styleUrls: ["pages/home/home.css"]
})
export class HomeComponent implements OnInit{
    public router:Router;
    public list_dergi:Array<dergi>=[];
    public listLoaded:boolean;
    public pdf_url:string;
    constructor(private _router:Router){
        this.router=_router;
    }
    ngOnInit()
    {
        this.listLoaded=false;
        var dergi1:dergi=new dergi();
        dergi1.pdf_url="https://www.pdf-archive.com/2016/08/01/m-pact-plus-vots-a/m-pact-plus-vots-a.pdf";
        dergi1.pic_url="https://previews.pdf-archive.com/2016/08/01/m-pact-plus-vots-a/thumb-m-pact-plus-vots-a-1.jpg";
        dergi1.title="M-Pact Plus";
        this.list_dergi.push(dergi1);

        var dergi2:dergi=new dergi();
        dergi2.pdf_url="https://www.pdf-archive.com/2016/08/01/devops/devops.pdf";
        dergi2.pic_url="https://previews.pdf-archive.com/2016/08/01/devops/thumb-devops-1.jpg";
        dergi2.title="DevOps";
        this.list_dergi.push(dergi2);

        var dergi3:dergi=new dergi();
        dergi3.pdf_url="https://www.pdf-archive.com/2016/08/01/1z0-053/1z0-053.pdf";
        dergi3.pic_url="https://previews.pdf-archive.com/2016/08/01/1z0-053/thumb-1z0-053-1.jpg";
        dergi3.title="Oracle";
        this.list_dergi.push(dergi3);
    }

    kitapsec(_item:dergi)
    {
       // this.listLoaded=true;
       // this.pdf_url=_item.pdf_url;
        Config._selected_dergi=_item;
        this._router.navigate(["/pdfview"]);
    }
    geri()
    {
        this.listLoaded=false;
        this.pdf_url="";
    }
}