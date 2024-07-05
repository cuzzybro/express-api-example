const express = require('express');
const auth = require('../middleware/auth');
const { faker } = require('@faker-js/faker');
const { admin, editor, viewer } = require('../middleware/roles');

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

module.exports = router;