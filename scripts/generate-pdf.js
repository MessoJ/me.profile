const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generatePDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Read the HTML file
  const htmlPath = path.join(__dirname, '../public/resume.html');
  const htmlContent = fs.readFileSync(htmlPath, 'utf8');
  
  // Set content and wait for it to load
  await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
  
  // Generate PDF with ATS-friendly settings
  const pdfPath = path.join(__dirname, '../public/resume.pdf');
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '0.5in',
      right: '0.5in',
      bottom: '0.5in',
      left: '0.5in'
    },
    preferCSSPageSize: true
  });
  
  console.log('PDF generated successfully at:', pdfPath);
  await browser.close();
}

generatePDF().catch(console.error); 