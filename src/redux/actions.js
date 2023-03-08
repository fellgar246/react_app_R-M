//TYPES
export const ADD_FAV = "ADD_FAV"
export const DELETE_FAV = "DELETE_FAV"
export const FILTER = "FILTER"
export const ORDER = "ORDER"

//ACTIONS
export const addFavorites = (character) => {
    return { 
        type: ADD_FAV,
        payload: character
    }
}

export const deleteFavorites = (id) => {
    return { 
        type: DELETE_FAV,
        payload: id 
    }
}

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender,
    }
}

export const orderCards = (id) => {
    return {
        type: ORDER,
        payload: id
    }
}