const PORT = 4000;
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.listen(PORT, () => {
    console.log("server up and running on http://localhost: ${PORT}");
});

//body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//cors
app.use(cors());

app.get("/", (req, res) => {
    res.send("hello");
})



