
const server = require("./src/app")
const PORT = 3001
const {connection} = require("./src/db")


connection.sync({force:false}).then(()=> {
    server.listen(3001, () => {
        console.log('Server raised in port ' + PORT);
    })
})





//! creado con NODE puro
// const http = require("http")
// const getCharById = require("../controllers/getCharById")
// const getCharDetail = require("../controllers/getCharDetails")

// http.createServer((req,res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     let id = req.url.split("/").pop()
//     if(req.url.includes("onsearch")){
//         getCharById(res, id)
//     }
//     if(req.url.includes("detail")){
//         getCharDetail(res, id)
//     }

// }).listen(3001, "localhost")