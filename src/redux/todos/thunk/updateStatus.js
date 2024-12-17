import { toggled } from "../actions";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:9000";

const updateStatus = (todoId, currentStatus) => async (dispatch) => {
    const response = await fetch(`${API_URL}/todos/${todoId}`, {
        method: "PATCH",
        body: JSON.stringify({
            isCompleted: !currentStatus,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    const todo = await response.json();

    dispatch(toggled(todo.id));
};

export default updateStatus;
