const db = require('../model/index')
const Product = db.products
const Op = db.Sequelize.Op

exports.createx = (req, res) => {

    const product = {
        sku: req.body.sku,
        image: req.body.url,
        brand: req.body.brand,
        title: req.body.title,
        price: req.body.price,
    }
    Product.create(product).then(data => { res.send(data) })

}

exports.findAll = (req, res) => {
    Product.findAll().then(data => {
        res.json(data)
    })
}

exports.findBySearch = (req, res) => {
    const text = req.body.text
    Product.findAll({
        where: {
            sku: {
                [Op.like]: text + '%'
            }
        }
    }).then(data => {
        res.json(data)
    })
}