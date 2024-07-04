const express = require('express');
const bp = require('body-parser');
const Faker = require('faker/lib');
const app = express();
const PORT = 10500
let faker = new Faker();


app.use(bp.json());

app.listen(PORT, () => console.log(`Express server is running on port ${PORT}`));

app.get("/", (req, res) => {
    res.send({message: 'hello'});
});

app.get('/randomPersonDetails', (req, res) => {
    let firstname = faker.name.firstName();
    let surname = faker.name.lastName();
    res.send(
        {
            givenName: firstname,
            surname: surname,
            email: `${firstname}.${surname}1234@gmail.com`
        }
    )
})

