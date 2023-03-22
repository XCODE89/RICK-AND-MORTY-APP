const axios = require("axios")
const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = async (req, res) => {
    const {id} = req.params
    try {
        const response = await axios.get(URL + id)
        const data = response.data
        let char = {
            id : data.id, 
            image : data.image,
            name : data.name,
            gender : data.gender,
            species : data.species
        }
        res.status(200).json(char)
    }
    catch(error) {
        res.status(500).json({error : error.message})
    }
}
module.exports = getCharById

//!solicitud sin AsyncAwait
// const getCharById = (req, res) => {
//     const {id} = req.params
//     axios(URL + id)
//     .then(response => response.data)
//     .then(data => {
//         let char = {
//             id : data.id, 
//             image : data.image,
//             name : data.name,
//             gender : data.gender,
//             species : data.species
//         }
//         res.status(200).json(char)
//     },
//     (error) => {
//         res.status(500).json({error : error.message}) //! revusar 
//     }
// )
// }
// module.exports = getCharById

//! controlador hecho con node puro
// const axios = require("axios")

// const getCharById = (res, id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => response.data)
//     .then(data => {
//         let char = {
//             id : data.id, 
//             image : data.image,
//             name : data.name,
//             gender : data.gender,
//             species : data.species
//         }
//         res.writeHead(200, {"Content-type" : "application/json"});
//         res.end(JSON.stringify(char))
//     })
//     .catch(error => {
//         res.writeHead(500, {"Content-type" : "text/plain"})
//         res.end(`El personaje con el id: ${id} no fue encontrado`)
//     }) 

// }

// module.exports = getCharById;