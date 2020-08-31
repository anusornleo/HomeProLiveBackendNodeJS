module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("pppp", {
        name: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.DOUBLE
        }
    });
    return User;
};