const db = require('../model/index')
const User = db.users
const Op = db.Sequelize.Op

// Create and Save a new Tutorial
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const user = {
        sku: req.body.sku,
        image: req.body.url,
        brand: req.body.brand,
        title: req.body.title,
        price: req.body.price
    };

    User.create(user).then(data => { res.send(data) })
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    User.findAll().then(data => { res.json(data) })
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {

};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {

};