const passport = require("passport");
const authJwt = require("../middleware/authJWT");
var admin = require('firebase-admin');

module.exports = app => {
    const user = require('../controller/userController')

    var router = require("express").Router();

    router.post('/register', user.create)

    router.get('/', user.findAll)

    router.post('/login', user.login)

    router.get('/data', [authJwt.verifyToken], user.getData)

    // router.post('/createuser', (req, res) => {
    //     // admin.auth().getUser("a5USXABuBFM84TENAZy7IbV7QKT2")
    //     //     .then(function (userRecord) {
    //     //         // See the UserRecord reference doc for the contents of userRecord.
    //     //         console.log('Successfully fetched user data:', userRecord.toJSON());
    //     //         res.send("ddd")
    //     //     })
    //     //     .catch(function (error) {
    //     //         console.log('Error fetching user data:', error);
    //     //     });
    //     admin.auth().createUser({
    //         email: req.body.email,
    //         emailVerified: true,
    //         displayName: 'John Doe',
    //     })
    //         .then(function (userRecord) {
    //             // See the UserRecord reference doc for the contents of userRecord.
    //             console.log('Successfully created new user:', userRecord.uid);
    //             admin.auth().createCustomToken(userRecord.uid).then(data => {
    //                 res.send(data)
    //             })

    //         })
    //         .catch(function (error) {
    //             console.log('Error creating new user:', error);
    //         });
    // })

    app.use('/api/user', router);
}