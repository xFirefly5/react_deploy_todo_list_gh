
function SearchTodo({search, setSearch}) {
    return (
        <form className="SearchTodo" onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor="search">Search Todos</label>
            <input
                type="text"
                placeholder="search ToDos"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    )
}

export default SearchTodo