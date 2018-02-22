import { Selector } from 'testcafe';
// import { expect } from 'chai';


fixture `Setting up before testing`
    .page `http://localhost:3000`;

const cardTitle = Selector('.card-header-title');
const headerOne = Selector('h1');
const headerTwo = Selector('h2');
const headerThree = Selector('h3');

test('Register user', async t => {

    await t.expect(Selector('body').find('h1').innerText)
        .eql('End to end Testing');

    // form submission    
    await t
        .typeText('#js-fname', 'John')
        .typeText('#js-lname', 'Doe')
        .typeText('#js-email', 'john.doe@example.com')
        .typeText('#js-dob', '1876-03-14')
        .click('input[value="male"]')
        .click('#js-position')
        .click(Selector('#js-position').find('option').withText('Software Tester'))
        .click('#osx')
        .click('#react')
        .typeText('#js-comments', 'Some comments so that textarea is not empty')
        .click('#js-submit-form');


    // user detail validation
    await t
        .expect(cardTitle.exists).ok()
        .expect(cardTitle.visible).ok()
        .expect(cardTitle.innerText).eql('User info')
        .expect(headerOne.exists).ok()
        .expect(headerOne.visible).ok()
        .expect(headerOne.innerText).eql('First Name: John')
        .expect(headerTwo.exists).ok()
        .expect(headerTwo.visible).ok()
        .expect(headerTwo.innerText).eql('Last Name: Doe')
        .expect(headerThree.exists).ok()
        .expect(headerThree.visible).ok()
        .expect(headerThree.innerText).eql('Email: john.doe@example.com');
});