const {Router} = require("express")
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetails")
const {postFav, getAllFavs, deleteFav} = require("../controllers/postFavs")

const router = Router();

router.get("/onsearch/:id", getCharById)
router.get("/detail/:id", getCharDetail)

router.post("/fav", postFav)
router.get("/fav", getAllFavs)
router.delete("/fav/:id", deleteFav)

module.exports = router