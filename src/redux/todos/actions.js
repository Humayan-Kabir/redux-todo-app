import * as actionTypes from "./actionTypes"

export const added = (text) => {
    return {
        type: actionTypes.ADDED,
        payload: text
    };
};

export const loaded = (todos) => {
    return {
        type: actionTypes.LOADED,
        payload: todos
    }
}

export const deleted = (todoId) => {
    return {
        type: actionTypes.DELETED,
        payload: todoId
    }
}

export const toggled = (todoId) => {
    return {
        type: actionTypes.TOGGLED,
        payload: todoId
    }
};

export const colorSelected = (todoId, color) => {
    return {
        type: actionTypes.COLORSELECTED,
        payload: {
            todoId,
            color
        }
    };
}

export const allCompleted = () => {
    return {
        type: actionTypes.ALLCOMPLETED
    };
}

export const clearcompleted = () => {
    return {
        type: actionTypes.CLEARCOMPLETED
    }
}