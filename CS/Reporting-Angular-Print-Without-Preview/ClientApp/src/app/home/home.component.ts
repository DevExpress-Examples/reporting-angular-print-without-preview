import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { saveAs } from 'file-saver';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-home',
    templateUrl: './home.component.html'  
    
})

export class HomeComponent  {    
    @ViewChild('printFrame', { static: true }) printFrame: ElementRef;
    @ViewChild('myDropDownList', { static: true }) myDropDownList: ElementRef;
    selectedFormat = 'pdf';
    printUrl = this.sanitizer.bypassSecurityTrustResourceUrl("");    
    constructor(private sanitizer: DomSanitizer, private _http: HttpClient) {
    }
    onChange($event) {
        this.selectedFormat = $event.target.value;
    }
    printInNewWindow(url: string) {
        var frameElement = window.open(url, "_blank");
        frameElement.addEventListener("load", function (e) {
            if (frameElement.document.contentType !== "text/html")
                frameElement.print();
        });
    }
    printWithIFrame(url: string) {
        var iframe = this.printFrame.nativeElement as HTMLIFrameElement;
        iframe.addEventListener("load", () => {
            if (iframe.contentDocument.contentType != "text/html")
                iframe.contentWindow.print();
        });
        this.printUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }  
    export(url: string) {
        window.open(url, "_blank");
    }    
    downloadFile() {
        this._http.get('api/Home/Export', {
            params: { "format": this.selectedFormat }, responseType: 'blob'
        }).subscribe(blob => {
            saveAs(blob, 'TestReport.' + this.selectedFormat.toLowerCase());
        });
    }
}
