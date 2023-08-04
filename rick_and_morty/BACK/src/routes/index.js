const {Router} = require("express")
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetails")
const {postFav, getAllFavs, deleteFav} = require("../controllers/postFavs")
const postUserHandler = require("../controllers/createUser");
const loginHandler = require("../controllers/login");

const router = Router();

router.post("/", postUserHandler)
router.post("/login", loginHandler) 

router.get("/onsearch/:id", getCharById)
router.get("/detail/:id", getCharDetail)

router.post("/fav", postFav)
router.get("/fav", getAllFavs)
router.delete("/fav/:id", deleteFav)

module.exports = router