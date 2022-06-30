const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = require('../config/config');

class Post extends Model { };

Post.init(
    {
        postTitle: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        postContent: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },

    },
    {
        sequelize,
    }
);

module.exports = Post;