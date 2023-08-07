const {User} = require("../db")

const getInfoUser = async (req, res) => {
    const user = req.user;
    const infoUser = await User.findOne({ where: { id: user.id }, attributes: ['username'] });
    res.json({ username : infoUser.username });
}

module.exports = getInfoUser;