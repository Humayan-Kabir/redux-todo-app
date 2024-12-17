import { added } from "../actions";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:9000";

const addTodo = (todoText) => async (dispatch) => {
    const response = await fetch(`${API_URL}/todos`, {
        method: "POST",
        body: JSON.stringify({
            text: todoText,
            isCompleted: false,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    const todo = await response.json();

    dispatch(added(todo.text));
};

export default addTodo;