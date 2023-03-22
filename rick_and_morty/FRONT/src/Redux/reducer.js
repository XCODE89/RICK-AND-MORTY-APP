import { ADD_FAVORITE, DELETE_FAVORITE, GET_FAVORITES, FILTER, ORDER } from "./types";

const initialState = {
    myFavorites : [],
    allCharacters : [],
    errors : {}
}

const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ADD_FAVORITE : return{
            ...state,
            myFavorites : payload,
            allCharacters : payload,
            errors: {}
        }
        case DELETE_FAVORITE : 
            return {
                ...state,
                myFavorites : payload,
                errors : {}
            }
        case GET_FAVORITES :
            return {
                ...state,
                myFavorites : payload,
                errors : {}
            }
        case FILTER : 
            const allCharsFiltered = state.allCharacters.filter((char => char.gender === payload))
            return {
                ...state,
                myFavorites : allCharsFiltered
            }
        case ORDER : return {
            ...state,
            myFavorites : 
                payload === "Ascendente"
                ? state.allCharacters.sort((a, b) => a.id - b.id)
                : state.allCharacters.sort((a, b) => b.id - a.id)
        }
        case "ERROR" : return {
            ...state,
            error : payload
        }
        default : return {...state}
    }
}

export default reducer;