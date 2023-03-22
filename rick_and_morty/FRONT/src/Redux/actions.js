import { ADD_FAVORITE, DELETE_FAVORITE, GET_FAVORITES, FILTER, ORDER } from "./types";
import axios from "axios"


export const addFavorite = (characterId) => {
    return async(dispatch) => {
        try {
            const response = await axios.post("http://localhost:3001/rickandmorty/fav",characterId)
                return dispatch({type : ADD_FAVORITE, payload : response.data})
            }
            catch (error) {
                return dispatch({type : "ERROR", payload : error})
            }
        }
        //! metodo sin AsyncAwait
        
    //     return (dispatch) => {
    //     axios.post("http://localhost:3001/rickandmorty/fav",characterId)
    //     .then(response => {
    //         return dispatch({type : ADD_FAVORITE, payload : response.data})
    //     })
    // }
}

export const deleteFavorite = (characterId) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(`http://localhost:3001/rickandmorty/fav/${characterId}`)
            return dispatch({type : DELETE_FAVORITE, payload : response.data})    
        }
        catch (error) {
            return dispatch({type : "ERROR", payload : error})
        }
    }   
        
    //! metodo sin AsyncAwait
    // return (dispatch) => {
    //     axios.delete(`http://localhost:3001/rickandmorty/fav/${characterId}`)
    //     .then(response => {
    //         return dispatch({type : DELETE_FAVORITE, payload : response.data})
    //     })
    // }

}

export const getFavoriteS = () => {
    return async(dispatch) => {
        try {
            const response = await axios.post("http://localhost:3001/rickandmorty/fav")
                return dispatch({type : GET_FAVORITES, payload : response.data})
            }
            catch (error) {
                return dispatch({type : "ERROR", payload : error})
            }
    }
}

export const filterCards = (gender) => {
    return {type : FILTER , payload : gender}
}

export const orderCards = (id) => {
    return {type : ORDER, payload : id}
} 