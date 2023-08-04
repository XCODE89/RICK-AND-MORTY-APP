
const express = require ("express");
const PORT = 3001
const router = require("./routes/index")
const cors = require("cors")

const server = express();
//?para poder traer todo del body sin problemas
server.use(express.json())
server.use(cors())

server.use("/rickandmorty", router)


module.exports = server
