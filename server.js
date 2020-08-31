const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors");
const app = express()
const port = 3000

var corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));


const db = require("./api/model/index");
db.sequelize.sync();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies

app.get('/', (req, res) => {
    res.json({ port: port })
})

require("./api/route/userRoute")(app);
require('./api/route/productRoute')(app)

app.listen(port, () => {
    console.log(`Start server at port ${port}.`)
})