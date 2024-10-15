const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const sequelize = require('../config/database');

class User extends Model {
    static async hashPassword(password) {
        return await bcrypt.hash(password, 10);
    }

    async checkPassword(password) {
        return await bcrypt.compare(password, this.password);
    }
}

User.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [6, 255],
        },
    },
}, { sequelize, modelName: 'User' });

User.addHook('beforeCreate', async (user) => {
    user.password = await User.hashPassword(user.password);
});

module.exports = User;
