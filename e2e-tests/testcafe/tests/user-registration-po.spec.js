import FirstPage from '../pages/first-model';

const firstPage = new FirstPage();

fixture `Registration set up`
    .page `http://localhost:3000`;

test('Submit user registration form', async t => {
    await t
        .typeText(firstPage.firstName, 'John')
        .typeText(firstPage.lastName, 'Doe')
        .typeText(firstPage.email, 'john.doe@example.com')
        .typeText(firstPage.dateOfBirth, '1876-03-14')
        .click(firstPage.sex.withAttribute('value', 'female'))
        .click(firstPage.selectJobType)
        .click(firstPage.selectJobType.find('option').withText('Software Tester'))
        .click(firstPage.osx)
        .click(firstPage.frameworks.withText('React'))
        .typeText(firstPage.comments, "That's all folks!!!")
        .expect(firstPage.comments.value).eql("That's all folks!!!");
});