import { Selector } from 'testcafe';

fixture `Setting up before testing`
    .page `http://localhost:3000`;

test('Register user', async t => {

    await t.expect(Selector('body').find('h1').innerText)
        .eql('Express');

    await t
        .typeText('#js-fname', 'John')
        .typeText('#js-lname', 'Doe')
        .typeText('#js-email', 'john.doe@example.com')
        .typeText('#js-dob', '1876-03-14')
        .click('input[value="male"]')
        .typeText('#js-comments', 'E=MC**2');
});