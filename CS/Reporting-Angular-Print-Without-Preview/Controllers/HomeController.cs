using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using DevExpress.XtraPrinting;
using DevExpress.XtraReports.UI;
using dxSampleAngularReportingPrintWithoutPreview.PredefinedReports;
using Microsoft.AspNetCore.Mvc;

namespace dxSampleAngularReportingPrintWithoutPreview.Controllers {
    [Route("api/[controller]")]
    public class HomeController : Controller {
        public IActionResult Index() {
            return View();
        }

        public IActionResult Error() {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }       
        [HttpGet("[action]")]
        public async Task<object> Print() {
            var report = new TestReport();
            using (var ms = new MemoryStream()) {
                await report.ExportToPdfAsync(ms, new DevExpress.XtraPrinting.PdfExportOptions { ShowPrintDialogOnOpen = true });
                return File(ms.ToArray(), System.Net.Mime.MediaTypeNames.Application.Pdf);
            }
        }
    }
}
