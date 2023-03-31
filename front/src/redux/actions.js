import axios from "axios";
//TYPES
export const ADD_FAV = "ADD_FAV"
export const DELETE_FAV = "DELETE_FAV"
export const GET_FAV = "GET_FAV"
export const FILTER = "FILTER"
export const ORDER = "ORDER"

//ACTIONS
export const addFavorites = (character) => {
    return async function(dispatch) {
        try {
            const response = await axios.post("http://localhost:3001/rickandmorty/favs", character)    
            return dispatch({
                type: ADD_FAV,
                payload: response.data
            });         
        } catch (error) {
            return dispatch({
                type: "ERROR",
                payload: error,
            })
        };
    };
    
}

export const deleteFavorites = (id) => {
    return async function(dispatch) {
        try {
            const response = await axios.delete(`http://localhost:3001/rickandmorty/favs/${id}`)
            return dispatch({
                type: DELETE_FAV,
                payload: response.data,
            });            
        } catch (error) {
            return dispatch({
                type: "ERROR",
                payload: error,
            })
        }
    }
    // return { 
    //     type: DELETE_FAV,
    //     payload: id 
    // }
}

export const getFavorites = () => {
    return async function(dispatch) {
        try {
            const response = await axios.get("http://localhost:3001/rickandmorty/favs")    
            return dispatch({
                type: GET_FAV,
                payload: response.data
            });
                 
        } catch (error) {
            return dispatch({
                type: "ERROR",
                payload: error,
            })
        };
    };
    
    // return { 
    //     type: GET_FAV,
    //     payload: 
    // }
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
