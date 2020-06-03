## How to print and export DevExpress reports without previewing them on a web page in an ASP.NET Core Angular application

This example prints and exports a report in a browser without previewing it on a web page.

**Printing**

On the **server side**, add a controller action to:
- [create a report](https://docs.devexpress.com/XtraReports/2440/get-started-with-devexpress-reporting/create-a-report-from-a-to-z);
- [export the report to PDF](https://docs.devexpress.com/XtraReports/2574/detailed-guide-to-devexpress-reporting/store-and-distribute-reports/export-reports/export-to-pdf): you can do so asynchronously using the [XtraReport.ExportToPdfAsync](https://docs.devexpress.com/XtraReports/DevExpress.XtraReports.UI.XtraReport.ExportToPdfAsync.overloads) method;
- send back to the client.

On the **client-side**, two options are available:

* Print a report in a new tab.
Create a print button and invoke a new tab by using the client-side `window.Open(url, "_blank")` method to open a new tab and allow clients to print a document.

* Print a report with iFrame. 
Once a client clicks the print button, invoke the browser's Print dialog in the `HTMLIFrameElement` so that users can proceed with printing the document.

*NOTE: We don't recommend printing with an invisible iFrame element because it's not guaranteed to work reliably across all browsers.* 

See also: 

* [Web Reporting](https://docs.devexpress.com/XtraReports/9814/create-end-user-reporting-applications/web-reporting)
* [Print Reports in Web Applications](https://docs.devexpress.com/XtraReports/5093/create-end-user-reporting-applications/web-reporting/asp-net-webforms-reporting/print-and-export)

**Exporting**

Create a server-side controller action to export a report to a format selected by a user. See: [Export Reports](https://docs.devexpress.com/XtraReports/1302/detailed-guide-to-devexpress-reporting/store-and-distribute-reports/export-reports).