const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors");
const app = express()
const port = 3000
var admin = require('firebase-admin');
var serviceAccount = require("./homeprolive-793f0-firebase-adminsdk-w8nvo-fc4af31240.json");

var corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://homeprolive-793f0.firebaseio.com"
});


const db = require("./api/model/index");
db.sequelize.sync();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies

app.get('/', (req, res) => {
    res.json({ port: port })
})

require("./api/route/productRoute")(app);
require("./api/route/userRoute")(app)

app.listen(port, () => {
    console.log(`Start server at port ${port}.`)
})