import { ADD_FAV, DELETE_FAV, FILTER, ORDER, GET_FAV } from "./actions";

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
                myFavorites: action.payload, 
                allCharacters: action.payload, 
                errors: {}
            }
        case DELETE_FAV:
            return {
                ...state,
                myFavorites: action.payload,
                errors: {},
            }
        case GET_FAV:
            return{
                ...state,
                myFavorites: action.payload,
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