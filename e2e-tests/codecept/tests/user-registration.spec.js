const { expect } = require('chai');
const { name, internet, lorem } = require('faker');

Feature('User Registration', { retries: 1 });

Scenario('Register new employee', async(I) => {
    I.amOnPage('/');
    I.see('End to end Testing');

    let title = await I.grabTitle();
    expect(title).to.equal('End to end Testing');

    I.fillField('#js-fname', name.firstName());
    I.fillField('#js-lname', name.lastName());
    I.fillField('#js-email', internet.email());
    I.executeScript(function() {
        document.querySelector('#js-dob').value = '1984-03-14'
    });
    I.checkOption('Female');
    I.selectOption('#js-position', 'Software Tester')
    I.checkOption('OS X');
    I.checkOption('Vue');
    I.fillField('#js-comments', lorem.sentence());
    I.click('#js-submit-form');
    I.dontSeeElementInDOM('#js-submit-form');
    I.seeInCurrentUrl('/user');
    I.see('User info');
    I.waitForText('First Name:', 5, '.card-content');
    I.see('First Name:');
    I.waitForText('Last Name:', 5, '.card-content');
    I.see('Last Name:');
    I.waitForText('Email:', 5, '.card-content');
    I.see('Email:');

});