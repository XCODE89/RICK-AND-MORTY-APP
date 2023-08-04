const {User} = require("../db")
const bcrypt = require("bcrypt");

const postUser = async(req) => {
    let {name, email, password, rePassword} = req.body 
    if(!name || !email || !password || !rePassword) {
        return {error:"debe rellenar los campos"}
    }
    if(password !== rePassword){
        return {error:"las contraseñas no coinciden"}
    }

    const searchEmail = await User.findOne({
        where : {email:email}
    })
    if(searchEmail) {
        return {error:"el correo ya esta registrado"}
    }
    const passCryipt = await bcrypt.hash(password, 8)
    const newUser = await User.create({
        username:name,
        email:email,
        password:passCryipt
    })
    return newUser
}



const postUserHandler = async(req, res) => {
    try {
        const result = await postUser(req)
        res.status(200).json(result)
    } catch (err) {
        res.status(400).json(err.message)
    }
}

module.exports = postUserHandler