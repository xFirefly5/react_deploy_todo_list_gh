import { FaRegTrashAlt } from "react-icons/fa"
function ToDoLine({todo, handleChecked, handleDelete}) {
    return (
        <li>
            <input
                type="checkbox"
                id="todo"
                checked={todo.checked}
                onChange={() => handleChecked(todo.id)}
            />
            <label
                style={(todo.checked) ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleChecked(todo.id)}
            >
                {todo.text}
            </label>
            <button className="delete" onClick={() => handleDelete(todo.id)}>
                <FaRegTrashAlt />
            </button>
        </li>        
    )
}

export default ToDoLine