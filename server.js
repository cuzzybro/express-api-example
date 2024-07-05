const express = require('express');
const authRouter = require("./routes/auth");
const features = require('./routes/features')


const app = express();
const PORT = 10500


app.use(express.json({ limit: "5mb" }));
app.use("/api/token", authRouter);
app.use("/api/features", features);

app.listen(PORT, () => console.log(`Express server is running on port ${PORT}`));

app.get("/api/", (req, res) => {
    res.send({message: 'hello'});
});
