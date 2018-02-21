module.exports = {
    url: function() {
        return this.api.launchUrl;
    },

    elements: {
        header: 'h1'
    },

    sections: {
        form: {
            selector: '#js-form-registration',
            elements: {
                inputFirstName: { selector: '#js-fname' },
                inputLastName: { selector: '#js-lname' },
                inputEmail: { selector: '#js-email' },
                inputDob: { selector: '#js-dob' },
                checkSexMale: { selector: '#js-sex-m' },
                checkSexFemale: { selector: '#js-sex-f' },
                selectJobType: { selector: '#js-position' },
                radioLinux: { selector: '#linux' },
                checkboxVue: { selector: '#vue' },
                textComments: { selector: '#js-comments' },
                buttonSaveData: { selector: '#js-submit-form' }
            }
        }
    }
};