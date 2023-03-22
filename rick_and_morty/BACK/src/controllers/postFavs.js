let favs = require("../utils/favs")

const postFav = ((req, res) => {
    favs.push(req.body)
    res.status(201).json(favs)
})

const getAllFavs = ((req,res) => {
    res.status(200).json(favs)
})
const deleteFav = ((req, res) => {
    const {id} = req.params
    favs = favs.filter((favorite) => favorite.id !== Number(id))
    res.status(200).json(favs)
})

module.exports = {
    postFav,
    getAllFavs,
    deleteFav
}
