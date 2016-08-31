"use strict";
var core_1 = require("@angular/core");
var global_config_1 = require("../../global_config");
var router_1 = require("@angular/router");
var dergi = (function () {
    function dergi() {
    }
    return dergi;
}());
exports.dergi = dergi;
var HomeComponent = (function () {
    function HomeComponent(_router) {
        this._router = _router;
        this.list_dergi = [];
        this.router = _router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.listLoaded = false;
        var dergi1 = new dergi();
        dergi1.pdf_url = "https://www.pdf-archive.com/2016/08/01/m-pact-plus-vots-a/m-pact-plus-vots-a.pdf";
        dergi1.pic_url = "https://previews.pdf-archive.com/2016/08/01/m-pact-plus-vots-a/thumb-m-pact-plus-vots-a-1.jpg";
        dergi1.title = "M-Pact Plus";
        this.list_dergi.push(dergi1);
        var dergi2 = new dergi();
        dergi2.pdf_url = "https://www.pdf-archive.com/2016/08/01/devops/devops.pdf";
        dergi2.pic_url = "https://previews.pdf-archive.com/2016/08/01/devops/thumb-devops-1.jpg";
        dergi2.title = "DevOps";
        this.list_dergi.push(dergi2);
        var dergi3 = new dergi();
        dergi3.pdf_url = "https://www.pdf-archive.com/2016/08/01/1z0-053/1z0-053.pdf";
        dergi3.pic_url = "https://previews.pdf-archive.com/2016/08/01/1z0-053/thumb-1z0-053-1.jpg";
        dergi3.title = "Oracle";
        this.list_dergi.push(dergi3);
    };
    HomeComponent.prototype.kitapsec = function (_item) {
        // this.listLoaded=true;
        // this.pdf_url=_item.pdf_url;
        global_config_1.Config._selected_dergi = _item;
        this._router.navigate(["/pdfview"]);
    };
    HomeComponent.prototype.geri = function () {
        this.listLoaded = false;
        this.pdf_url = "";
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "home",
            templateUrl: "pages/home/home.html",
            //providers:[BoardService],
            styleUrls: ["pages/home/home.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.js.map