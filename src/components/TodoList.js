import { useSelector, useDispatch } from "react-redux";
import Todo from "./Todo";
import fetchTodos from "../redux/todos/thunk/fetchTodos";
import { useEffect } from "react";

export default function TodoList() {
    const todos = useSelector(state => state.todos);
    const filters = useSelector(state => state.filters);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("dispatch fetchTodos")
        dispatch(fetchTodos);
    }, [dispatch]);

    const filterByStatus = (todo) => {
        const { status } = filters;
        switch (status) {
            case "Complete":
                return todo.isCompleted;

            case "Incomplete":
                return !todo.isCompleted;

            default:
                return true;
        }
    };

    const filterByColors = (todo) => {
        const { colors } = filters;
        if (colors.length > 0) {
            return colors.includes(todo?.color);
        }
        return true;
    };

    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {todos
                .filter(filterByStatus)
                .filter(filterByColors)
                .map((todo) => (
                    <Todo todo={todo} key={todo.id} />
                ))}
        </div>
    );
}
