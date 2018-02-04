const TIMEOUT = 10000;

module.exports = {
    tags: ['new-user-registration-po'],

    'Register a new user - using Page Object Design Pattern': function(client) {
        const newUserPage = client.page.newuser();
        const formSection = newUserPage.section.form;

        newUserPage
            .navigate()
            .waitForElementVisible('body', TIMEOUT)
            .assert.title('Express');

        formSection.expect.element('@inputFirstName').to.be.visible;

        formSection
            .waitForElementVisible('@inputFirstName', TIMEOUT)
            .setValue('@inputFirstName', 'Gigi')
            .waitForElementVisible('@inputLastName', TIMEOUT)
            .setValue('@inputLastName', 'Testarescu')
            .waitForElementVisible('@inputEmail', TIMEOUT)
            .setValue('@inputEmail', 'gigi.testarescu@example.com')
            .waitForElementVisible('@inputDob', TIMEOUT)
            .setValue('@inputDob', '14.03.1984')
            .waitForElementVisible('@checkSexMale', TIMEOUT)
            .click('@checkSexMale')
            .waitForElementVisible('@textComments', TIMEOUT)
            .waitForElementVisible('@radioLinux', TIMEOUT)
            .click('@radioLinux')
            .waitForElementVisible('@checkboxVue', TIMEOUT)
            .click('@checkboxVue')
            .setValue('@textComments', 'This guy likes the Frontend chapter fellows')
            .waitForElementVisible('@buttonSaveData', TIMEOUT);

        client.end();
    }
};