module.exports = app => {
    const product = require('../controller/productController')

    var router = require("express").Router();

    router.post('/', product.createx)

    router.get('/', product.findAll)

    router.post('/search', product.findBySearch)

    app.use('/api/products', router);
}