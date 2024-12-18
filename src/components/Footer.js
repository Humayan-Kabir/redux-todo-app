import { useDispatch, useSelector } from "react-redux";
import { statusChanged, colorChanged } from "../redux/filters/action"

const numberOfTodos = (no_of_todos) => {
    switch (no_of_todos) {
        case 0:
            return "No task";
        case 1:
            return "1 task";
        default:
            return `${no_of_todos} tasks`;
    }
};

export default function Footer() {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    const filters = useSelector(state => state.filters);
    const todosRemaining = todos.filter((todo) => !todo.isCompleted).length;
    const { status, colors } = filters;
    
    const handleStatusChanged = (status) => {
        dispatch(statusChanged(status))
    };

    const handleColorChanged = (color) => {
        dispatch(colorChanged(color))
    };

    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{numberOfTodos(todosRemaining)} tasks left</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li 
                    className={`cursor-pointer ${status === "All" && "font-bold"}`}
                    onClick={() => handleStatusChanged("All")}
                >All</li>
                <li>|</li>
                <li 
                    className={`cursor-pointer ${status === "Incomplete" && "font-bold"}`}
                    onClick={() => handleStatusChanged("Incomplete")}
                >Incomplete</li>
                <li>|</li>
                <li 
                    className={`cursor-pointer ${status === "Complete" && "font-bold"}`}
                    onClick={() => handleStatusChanged("Complete")}
                >Complete</li>
                <li></li>
                <li></li>
                <li
                    className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
                        colors.includes("green") && "bg-green-500"
                    }`}
                    onClick={() => handleColorChanged("green")}
                ></li>
                <li
                    className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
                        colors.includes("red") && "bg-red-500"
                    }`}
                    onClick={() => handleColorChanged("red")}
                ></li>
                <li
                    className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
                        colors.includes("yellow") && "bg-yellow-500"
                    }`}
                    onClick={() => handleColorChanged("yellow")}
                ></li>
            </ul>
        </div>
    );
}
