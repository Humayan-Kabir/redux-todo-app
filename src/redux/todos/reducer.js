import * as actionTypes from "./actionTypes"
import { initialState } from "./initialState";

const todoId = (todos) => {
    const maxId = todos.reduce((maxId, todo) => Math.max(maxId, todo.id), -1);
    return maxId + 1;
}

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADDED:
            return [
                ...state,
                {
                    id: todoId(state),
                    isCompleted: false,
                    text: action.payload
                }
            ]
        
        case actionTypes.LOADED:
            return action.payload;

        case actionTypes.DELETED:
            return state.filter(todo => todo.id !== action.payload);
        
        case actionTypes.TOGGLED:
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        isCompleted: !todo.isCompleted
                    };
                }
                return todo;
            });

        case actionTypes.ALLCOMPLETED:
            return state.map(todo => {
                return {
                    ...todo,
                    isCompleted: true
                }
            });

        case actionTypes.CLEARCOMPLETED:
            return state.filter(todo => !todo.isCompleted)

        case actionTypes.COLORSELECTED:
            return state.map(todo => {
                if (todo.id === action.payload.todoId) {
                    return {
                        ...todo,
                        color: action.payload.color
                    }
                }
                return todo;
            });
        
        default:
            return state;
    };
};

export default todoReducer;