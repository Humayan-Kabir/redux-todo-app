import * as actionTypes from "./actionTypes"
import { initialState } from "./initialState"

const filterReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.COLORCHANGED:
            if (state.colors.includes(action.payload)) {
                return {
                    ...state,
                    colors: state.colors.filter(color => color !== action.payload)
                }
            } 
            return {
                ...state,
                colors: [...state.colors, action.payload]
            }

        case actionTypes.STATUSCHANGED:
            return {
                ...state,
                status: action.payload
            };

        default:
            return state;
    }
};
export default filterReducer;