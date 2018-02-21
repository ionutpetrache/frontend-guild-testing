'use strict';

let I;

module.exports = {

    _init() {
        I = require('../steps_file.js')();
    },

    // insert your locators and methods here
    fields: {
        inputFirstName: '#js-fname',
        inputLastName: '#js-lname',
        inputEmail: '#js-email',
        inputDob: '#js-dob',
        checkSexMale: '#js-sex-m',
        checkSexFemale: '#js-sex-f',
        selectJobType: '#js-position',
        radioLinux: '#linux',
        checkboxVue: '#vue',
        textComments: '#js-comments',
        buttonSaveData: '#js-submit-form'
    },

    addName: function() {
        return actor({
            addName: function(fname, lname) {
                this.fillField(this.fields.inputFirstName, fname);
                this.fillField(this.fields.inputLastName, lname);
            }
        });
    }
}