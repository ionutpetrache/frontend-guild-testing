var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const dob = req.body.dob;

    res.render('user', {
        title: 'User Details',
        fname: fname,
        lname: lname,
        email: email,
        dob: dob
    });
});

module.exports = router;