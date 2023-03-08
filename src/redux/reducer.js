import { ADD_FAV, DELETE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
    myFavorites: [],
    allCharacters: []
};

const rootReducer = (state= initialState, action) => {
    switch(action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites:[...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            }
        case DELETE_FAV:
            const filteredList = state.myFavorites.filter(
                character => character.id !== action.payload
            );
            return {
                ...state,
                myFavorites: filteredList,
            }
        case FILTER:
            const allCharsFiltered = state.allCharacters.filter(char => char.gender === action.payload)
            return {
                ...state,
                myFavorites: allCharsFiltered,
            }
        case ORDER:
            return {
                ...state,
                myFavorites:
                    action.payload === "Ascendente" 
                    ? state.allCharacters.sort((a, b) => a.id - b.id)
                    : state.allCharacters.sort((a, b) => b.id - a.id)
            }
        default:
            return { ...state };
    }
};

export default rootReducer;