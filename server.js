const express = require('express');
const bp = require('body-parser');
const { faker } = require('@faker-js/faker')
const app = express();
const PORT = 10500


app.use(bp.json());

app.listen(PORT, () => console.log(`Express server is running on port ${PORT}`));

app.get("/", (req, res) => {
    res.send({message: 'hello'});
});

app.get('/randomPersonDetails', (req, res) => {
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

