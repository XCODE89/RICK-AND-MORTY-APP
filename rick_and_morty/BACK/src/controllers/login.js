const {User} = require("../db")
const bcrypt = require("bcrypt")
const generateJWT = require("../utils/generateToken")

const authLogin = async (req) => {
    const {email, password} = req.body;
    const user = await User.findOne({
        where : {email:email}
    })
    if (!user) {
        return {error: "El usuario no existe"}
    }
    const comparePassword = bcrypt.compareSync(password, user.password);
    if (comparePassword) {
        const datos = {
            token : generateJWT(user.id)
        }
        return datos
    } else {
        return {error: "La contraseña es incorrecta"}
    }

}

const loginHandler = async (req, res) => {
    try {
        const response = await authLogin(req);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error:error.message})
    }
}

module.exports = loginHandler