import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

(async () => {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  const screenshotsDir = join(__dirname, 'screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  console.log('Navigating to http://localhost:5173/...');
  
  // Listen for console messages
  const consoleMessages = [];
  page.on('console', msg => {
    consoleMessages.push({
      type: msg.type(),
      text: msg.text()
    });
  });

  // Listen for page errors
  const pageErrors = [];
  page.on('pageerror', error => {
    pageErrors.push(error.message);
  });

  try {
    await page.goto('http://localhost:5173/', {
      waitUntil: 'networkidle2',
      timeout: 30000
    });

    console.log('✓ Page loaded successfully');

    // Wait a moment for React to render
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Take initial screenshot
    console.log('Taking screenshot: 1-initial-load.png');
    await page.screenshot({
      path: join(screenshotsDir, '1-initial-load.png'),
      fullPage: false
    });

    // Check for Hero section
    console.log('Checking for Hero section...');
    const heroExists = await page.evaluate(() => {
      const body = document.body.innerText.toLowerCase();
      return body.includes('openglobus') || body.includes('hero') || document.querySelector('h1') !== null;
    });
    console.log(heroExists ? '✓ Hero section visible' : '✗ Hero section NOT found');

    // Take hero screenshot
    await page.screenshot({
      path: join(screenshotsDir, '2-hero-section.png'),
      fullPage: false
    });

    // Scroll down to Industry section
    console.log('Scrolling to Industry section...');
    await page.evaluate(() => {
      window.scrollTo(0, window.innerHeight * 2);
    });
    await new Promise(resolve => setTimeout(resolve, 1000));

    await page.screenshot({
      path: join(screenshotsDir, '3-industry-section.png'),
      fullPage: false
    });

    // Check for images in Industry section
    const industryImages = await page.evaluate(() => {
      const images = Array.from(document.querySelectorAll('img'));
      return {
        total: images.length,
        loaded: images.filter(img => img.complete && img.naturalHeight > 0).length,
        broken: images.filter(img => !img.complete || img.naturalHeight === 0).length
      };
    });
    console.log(`Industry section images: ${industryImages.loaded} loaded, ${industryImages.broken} broken (total: ${industryImages.total})`);

    // Scroll to footer
    console.log('Scrolling to footer...');
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    await new Promise(resolve => setTimeout(resolve, 1000));

    await page.screenshot({
      path: join(screenshotsDir, '4-footer.png'),
      fullPage: false
    });

    // Take full page screenshot
    console.log('Taking full page screenshot...');
    await page.screenshot({
      path: join(screenshotsDir, '5-full-page.png'),
      fullPage: true
    });

    // Report console errors
    console.log('\n=== CONSOLE MESSAGES ===');
    const errors = consoleMessages.filter(m => m.type === 'error');
    const warnings = consoleMessages.filter(m => m.type === 'warning');
    
    if (errors.length > 0) {
      console.log(`\n❌ ${errors.length} Console Error(s):`);
      errors.forEach((err, i) => console.log(`${i + 1}. ${err.text}`));
    } else {
      console.log('✓ No console errors');
    }

    if (warnings.length > 0) {
      console.log(`\n⚠ ${warnings.length} Console Warning(s):`);
      warnings.forEach((warn, i) => console.log(`${i + 1}. ${warn.text}`));
    }

    // Report page errors
    if (pageErrors.length > 0) {
      console.log(`\n❌ ${pageErrors.length} Page Error(s):`);
      pageErrors.forEach((err, i) => console.log(`${i + 1}. ${err}`));
    } else {
      console.log('✓ No page errors');
    }

    console.log(`\n✓ Screenshots saved to: ${screenshotsDir}`);

  } catch (error) {
    console.error('❌ Error during testing:', error.message);
  } finally {
    await browser.close();
  }
})();
