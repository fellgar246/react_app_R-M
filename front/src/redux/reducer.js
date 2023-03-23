import { ADD_FAV, ALL, DELETE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
    myFavorites: [],
    allCharacters: [],
    errors: {}
};

const rootReducer = (state= initialState, action) => {
    switch(action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites:[...state.allCharacters, action.payload], //TODO: cambiar myFavorites:payload
                allCharacters: [...state.allCharacters, action.payload], //TODO: cambiar allCharacters:payload
                errors: {}
            }
        case DELETE_FAV:
            const filteredList = state.myFavorites.filter(
                character => character.id !== action.payload
            );
            return {
                ...state,
                myFavorites: filteredList, //TODO: cambiar myFavorites: payload
                errors: {},
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
        case ALL:
            return {
                ...state,
                myFavorites: [...state.allCharacters]
            }
        case "ERROR": {
            return {
                ...state,
                errors: action.payload,
            }
        }
        default:
            return { ...state };
    }
};

export default rootReducer;