const TIMEOUT = 30000;

module.exports = {
    tags: ['new-user-registration'],

    'Register a new user': function(client) {
        client.url('http://localhost:3000')
            .waitForElementVisible('body', TIMEOUT)
            .assert.title('End to end Testing')
            .waitForElementVisible('#js-fname', TIMEOUT)
            .setValue('#js-fname', 'Gigi')
            .waitForElementVisible('#js-lname', TIMEOUT)
            .setValue('#js-lname', 'Testarescu')
            .waitForElementVisible('#js-email', TIMEOUT)
            .setValue('#js-email', 'gigi.testarescu@example.com')
            .waitForElementVisible('#js-dob', TIMEOUT)
            .setValue('#js-dob', '14.03.1984')
            .waitForElementVisible('input[value="female"]', TIMEOUT)
            .click('input[value="female"]')
            .waitForElementVisible('#js-position', TIMEOUT)
            .click('#js-position')
            .waitForElementVisible('option[value="st"]', TIMEOUT)
            .click('option[value="st"]')
            .waitForElementVisible('#js-favorite-os>div>label[for="linux"]', TIMEOUT)
            .click('#js-favorite-os>div>label[for="linux"]')
            .waitForElementVisible('#vue', TIMEOUT)
            .click('#vue')
            .waitForElementVisible('#js-comments', TIMEOUT)
            .setValue('#js-comments', 'This guy likes the Frontend chapter fellows')
            .waitForElementVisible('#js-submit-form', TIMEOUT)
            .click('#js-submit-form')
            .waitForElementNotPresent('#js-submit-form', TIMEOUT)
            .waitForElementVisible('.card-header-title', TIMEOUT)
            .assert.urlContains('/user')
            .waitForElementVisible('.js-one', TIMEOUT)
            .assert.containsText('.js-one>h1', 'Gigi')
            .waitForElementVisible('.js-two', TIMEOUT)
            .assert.containsText('.js-two>h2', 'Testarescu')
            .waitForElementVisible('.js-three', TIMEOUT)
            .assert.containsText('.js-three>h3', 'gigi.testarescu@example.com')
            .waitForElementPresent('.js-four', TIMEOUT);


        client.end();
    }
};