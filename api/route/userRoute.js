module.exports = app => {
    const products = require("../controller/userController");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", products.create);

    // Retrieve all Tutorials
    router.get("/", products.findAll);


    app.use('/api/product', router);
};