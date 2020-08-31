module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("products", {
        sku: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.TEXT
        },
        brand: {
            type: Sequelize.STRING
        },
        title: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.DECIMAL(10, 2)
        }
    })

    return Product
}