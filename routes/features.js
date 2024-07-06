const express = require('express');
const auth = require('../middleware/auth');
const { faker } = require('@faker-js/faker');
const { admin, editor, viewer } = require('../middleware/roles');
const NhiTools = require('../tools/nhi-validator').NhiTools;

const router = express.Router();

router.get('/randomPersonDetails', [auth, admin], (req, res) => {
    let firstname = faker.person.firstName();
    let surname = faker.person.lastName();
    res.send(
        {
            givenName: firstname,
            surname: surname,
            email: `${firstname}.${surname}1234@gmail.com`
        }
    )
})

router.get('/RandomNhi', [auth, admin], (req, res) => {
    let nhi = new NhiTools();
    res.send({nhi: nhi.generateNhi()});
});

router.post('/isNhiValid', [auth, admin], (req, res) => {
    var { nhi } = req.body
    let tools = new NhiTools();
    var check = tools.isNhiValid(nhi)
    res.send({"nhi": nhi, "valid": check});
});

module.exports = router;