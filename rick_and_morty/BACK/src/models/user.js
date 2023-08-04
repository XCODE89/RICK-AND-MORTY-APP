
const {DataTypes, Sequelize} = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("User", {
        id : {
            type : DataTypes.UUID,
            primaryKey : true,
            defaultValue : Sequelize.UUIDV4
        },
        username : {
            type : DataTypes.STRING,
            allowNull : false
        },
        password : {
            type : DataTypes.STRING,
            allowNull : false
        },
        email : {
            type : DataTypes.STRING,
            allowNull : false
        },
        favorites : {
            type : DataTypes.ARRAY(DataTypes.STRING),
            defaultValue : []
        }
    })
}