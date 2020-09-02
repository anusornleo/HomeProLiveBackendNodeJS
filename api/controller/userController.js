const db = require('../model/index')
const User = db.user
const Op = db.Sequelize.Op

// const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const { use } = require('passport');
const saltRounds = 10;
const myPlaintextPassword = "s0//P4$$w0rD";
const someOtherPlaintextPassword = "not_bacon";
const SECRET = "MY_SECRET_KEY";
var jwt = require("jsonwebtoken");

exports.create = (req, res) => {
    const user = {
        username: req.body.username,
        password: req.body.password
    }
    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(user.password, salt, function (err, hash) {
            user.password = hash;
            User.create(user).then(data => { res.send(data) })
        });
    });
}

exports.getData = (req, res) => {
    res.send("ยอดเงินคงเหลือ 50");
}

exports.login = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }

        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
            });
        }

        var token = jwt.sign({ id: user.id, username: user.username }, "config.secret", {
            expiresIn: 86400 // 24 hours
        });

        res.status(200).send({
            id: user.id,
            username: user.username,
            accessToken: token
        });
    })
}

exports.findAll = (req, res) => {
    User.findAll().then(data => { res.sent(data) })
}