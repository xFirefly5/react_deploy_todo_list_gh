import ToDosList from './ToDosList'

function Content({todos, handleChecked, handleDelete}) {
    return (
        <main>
            {todos.length ? (
                <ToDosList
                    todos={todos}
                    handleDelete={handleDelete}
                    handleChecked={handleChecked}
                />
            ) : (
                <h3>Your ToDo List is Empty!</h3>     
            )}
        </main>
    )
}

export default Content