import {FaPlusCircle} from 'react-icons/fa'

function AddToDo({ newTodo, setNewTodo, handleSubmit}) {

    return (
        <form className="AddToDo" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="add">Add a ToDo:</label>
            <input
                type="text"
                id="add"
                placeholder="type here"
                required
                autoFocus
                value={newTodo}
                onChange={(e)=>setNewTodo(e.target.value)}
            />
            <button type="submit" onClick={handleSubmit}>
                <FaPlusCircle />
            </button>  
        </form>
    )
}

export default AddToDo