import { deleted } from "../actions";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:9000";

const deleteTodo = (todoId) => {
    return async (dispatch) => {
        await fetch(`${API_URL}/todos/${todoId}`, {
            method: "DELETE",
        });

        dispatch(deleted(todoId));
    };
};

export default deleteTodo;
