import { loaded } from "../actions";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:9000";

const fetchTodos = async (dispatch) => {
    const response = await fetch(`${API_URL}/todos`);
    const todos = await response.json();
    console.log(todos);
    dispatch(loaded(todos));
};

export default fetchTodos;