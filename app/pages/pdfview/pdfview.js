"use strict";
var core_1 = require("@angular/core");
require("nativescript-pdf-view");
var common_1 = require("@angular/common");
var global_config_1 = require("../../global_config");
var PdfComponent = (function () {
    function PdfComponent(_location) {
        this._location = _location;
        this.location = _location;
        this._dergi = global_config_1.Config._selected_dergi;
    }
    PdfComponent.prototype.geri = function () {
        this._location.back();
    };
    PdfComponent.prototype.ngOnInit = function () {
        this.pdf_url_ = this._dergi.pdf_url;
        this.title_ = this._dergi.title;
        alert(this._dergi.pdf_url);
    };
    PdfComponent = __decorate([
        core_1.Component({
            selector: "pdfview",
            templateUrl: "pages/pdfview/pdfview.html",
            //providers:[BoardService],
            styleUrls: ["pages/pdfview/pdfview.css"]
        }), 
        __metadata('design:paramtypes', [common_1.Location])
    ], PdfComponent);
    return PdfComponent;
}());
exports.PdfComponent = PdfComponent;
//# sourceMappingURL=pdfview.js.map