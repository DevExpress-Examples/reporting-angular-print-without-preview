import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
    @ViewChild('printFrame', { static: true }) printFrame: ElementRef;
    printUrl = this.sanitizer.bypassSecurityTrustResourceUrl("");
    constructor(private sanitizer: DomSanitizer) {
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
}
