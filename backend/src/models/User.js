const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password_reset_token: DataTypes.STRING,
            password_reset_expires: DataTypes.DATE
        }, {
            sequelize
        })
    }
}

module.exports = User;