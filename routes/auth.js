const jwt = require('jsonwebtoken');
const express = require('express');
const bcrypt = require('bcryptjs');

const router = express.Router();

router.post("/", async (req, res) => {

    const users = [{ email: "automation.tester@nztestlab.net", password: "$2a$15$Ed3iComc5kDNo8ZVYEMSrec8GloCdKqPpboY/oSEVacF0TSfEvZ9i", roles: [ "admin", "editor", "viewer" ]}]

    let user = users.find(u => u.email === req.body.email );
    if (!user){ 
        res.status(401).send({ "error": "Invalid email or password." });
        return
    }

    const valid = await bcrypt.compare(req.body.password, user.password)
    if (!valid) {
        res.status(401).send({ "error": "Invalid email or password." });
        return
    }

    const token = jwt.sign({
        id: user._id,
        roles: user.roles,
    }, "jwtPrivateKey", { expiresIn: "15m"});

    res.send({
        ok: true,
        token: token
    });
});

module.exports = router;