import { Selector } from 'testcafe';

export default class FirstPage {
    constructor() {
        this.firstName = Selector('#js-fname');
        this.lastName = Selector('#js-lname');
        this.email = Selector('#js-email');
        this.dateOfBirth = Selector('#js-dob');
        this.selectJobType = Selector('#js-position');
        this.sex = Selector('input[name="js-sex"]');
        this.os = Selector('#js-favorite-os>label');
        this.frameworks = Selector('#js-frameworks>label');
        this.comments = Selector('#js-comments');
        this.submitForm = Selector('#js-submit-form');
    }
}