const express = require('express');
const bp = require('body-parser');
const app = express();
const PORT = 10500

app.use(bp.json());

app.listen(PORT, () => console.log(`Express server is running on port ${PORT}`));

app.get("/", (req, res) => {
    res.send({message: 'hello'});
});



