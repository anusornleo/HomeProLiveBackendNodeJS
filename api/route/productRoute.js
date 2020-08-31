module.exports = app => {
    const product = require('../controller/productController')

    var router = require("express").Router();

    router.post('/', product.createx)

    router.get('/', product.findAll)

    app.use('/api/products', router);
}