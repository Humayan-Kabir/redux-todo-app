import { colorSelected } from "../actions";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:9000";

const updateColor = (todoId, color) => {
    return async(dispatch) => {
        const response = await fetch (`${API_URL}/todos/${todoId}`, {
            method: "PATCH",
            body: JSON.stringify({
                color: color,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
        const todo = await response.json();
        dispatch(colorSelected(todo.id, todo.color));
    };
};

export default updateColor;