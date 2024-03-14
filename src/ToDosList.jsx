import ToDoLine from "./ToDoLine"

function ToDosList({todos, handleChecked, handleDelete}) {

    return (
        <>
            <ul>
                {todos.map(todo => (
                    <ToDoLine
                        todo={todo}
                        key={todo.id}
                        handleChecked={handleChecked}
                        handleDelete={handleDelete}
                    />
                ))}
            </ul>
        </>
    )
}

export default ToDosList