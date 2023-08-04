require("dotenv").config();
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = process.env

const generateJWT = (id) => {
    return jwt.sign({id}, JWT_SECRET, {
        expiresIn: "6h",
        algorithm: "HS256"
    })
}

module.exports = generateJWT