const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = require('../config/config');

class Comment extends Model { };

Comment.init(
    {
        commentContent: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    },
    {
        sequelize,

    }
);

module.exports = Comment;