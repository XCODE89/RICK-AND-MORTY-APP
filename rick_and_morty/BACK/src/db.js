require("dotenv").config();
const {Sequelize} = require("sequelize");
const User = require("./models/user")
const {
    DB_USER, DB_PASSWORD, DB_HOST
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`, {
    logging: false,
    native: false,
});

User(sequelize)

module.exports = {
    ...sequelize.models,
    connection : sequelize
}