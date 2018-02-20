const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const iPhone = devices['iPhone X'];
const { expect } = require('chai');

(async() => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.emulate(iPhone);

    // Connect to Chrome DevTools
    const client = await page.target().createCDPSession()

    // Set throttling property
    await client.send('Network.emulateNetworkConditions', {
        'offline': false,
        'downloadThroughput': 200 * 1024 / 8,
        'uploadThroughput': 200 * 1024 / 8,
        'latency': 20
    });

    await page.goto('http://localhost:3000');
    let title = await page.title();
    expect(title).to.equal('End to end Testing');
    await page.type('#js-fname', 'Ionut');
    await page.type('#js-lname', 'Petrache');
    await page.type('#js-email', 'ionut.petrache@example.com')
    await page.type('#js-dob', '01.06.1984');
    await page.click('#js-sex-m');
    await page.select('#js-position', 'st');
    await page.click('#osx');
    await page.click('#vue')
    await page.type('#js-comments', 'Let me write here some comments.Just like that');
    await page.screenshot({ path: './output/user-register.png', fullPage: true });
    await page.click('#js-submit-form');


    await page.waitForSelector('#js-submit-form', { hidden: true });

    await page.waitForSelector('div.card', { visible: true });
    title = await page.title();
    expect(title).to.equal('User Details');

    await page.waitForSelector('.js-one', { visible: true });
    const firstName = await page.evaluate(() => document.querySelector('.js-one>h1').textContent);
    expect(firstName).to.have.string('Ionut');

    await page.waitForSelector('.js-two', { visible: true });
    const lastName = await page.evaluate(() => document.querySelector('.js-two>h2').textContent);
    expect(lastName).to.have.string('Petrache');

    await page.waitForSelector('.js-three', { visible: true });
    const expEmail = await page.evaluate(() => document.querySelector('.js-three>h3').textContent);
    expect(expEmail).to.have.string('ionut.petrache@example.com');

    await page.screenshot({ path: './output/user-details.png', fullPage: true });

    await browser.close();
})();