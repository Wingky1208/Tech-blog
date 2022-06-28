const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

Post.init(
    {
        title: DataTypes.STRING,
        boday: DataTypes.STRING
    },
    {
        sequelize
    }
);

module.exports = Post;