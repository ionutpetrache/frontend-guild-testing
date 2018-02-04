const TIMEOUT = 10000;

module.exports = {
    tags: ['new-user-registration'],

    'Register a new user': function(client) {
        client.url('http://localhost:3000')
            .waitForElementVisible('body', TIMEOUT)
            .assert.title('Express')
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
            .waitForElementVisible('#js-favorite-os>label[for="linux"]', TIMEOUT)
            .click('#js-favorite-os>label[for="linux"]')
            .waitForElementVisible('#vue', TIMEOUT)
            .click('#vue')
            .waitForElementVisible('#js-comments', TIMEOUT)
            .setValue('#js-comments', 'This guy likes the Frontend chapter fellows')
            .waitForElementVisible('#js-submit-form', TIMEOUT);

        client.end();
    }
};