import { useState } from "react"
import AddToDo from "./AddToDo"
import Footer from "./Footer"
import Header from "./Header"
import Content from "./Content"
import SearchTodo from "./SearchTodo"


function App() {

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('TodoList')) || []);
  const [newTodo, setNewTodo] = useState("");
  const [search, setSearch] = useState("");

  const handleChecked = (id) => {
    const listTodos = todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo);
    setAndSaveTodos(listTodos)  
  };

  const handleDelete = (id) => {
    const listTodos = todos.filter(todo => todo.id !== id);
    setAndSaveTodos(listTodos)
  };

  const addTodo = (todo) => {
    const id = todos.length ? todos[todos.length - 1].id + 1 : 1;
    const newTodo = { id, text: todo, checked: false };
    const listTodos = [...todos, newTodo];
    setAndSaveTodos(listTodos)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo) return;
    addTodo(newTodo);
    setNewTodo("")
  };
  
  const setAndSaveTodos = (allTodos) => {
    setTodos(allTodos);
    localStorage.setItem("TodoList", JSON.stringify(allTodos));
  };

  return (
    <div className="App">
      <Header title="My ToDo list"/>
      <AddToDo
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        handleSubmit={handleSubmit}
      />
      <SearchTodo
        setSearch={setSearch}
        search={search}
      />
      <Content
        todos={todos.filter(todo => ((todo.text).toLowerCase()).includes(search.toLowerCase()))}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
      <Footer/>
    </div>
  )
}

export default App
