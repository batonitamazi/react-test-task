import "./App.css";
import { useContext, useEffect, useState } from "react";
import { themeContext } from "./providers/theme.provider";
import TodoLists from "./components/todos/TodoLists";
import TodoSearch from "./components/todosearch/TodoSearch";
import AddNoteDialog from "./components/addnote/AddNoteDialog";

function App() {
  const [todos, setTodos] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);
  const [active, setActive] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);
  const [editNote, setEditNote] = useState(null);


  const { changeTheme, theme } = useContext(themeContext);
  const unique = () => parseInt(Date.now() * Math.random());

  const handleAddTodo = (text) => {
    const newTodoList = [...todos, { id: unique(), text, isDone: false }];
    setTodos(newTodoList);
  };


  const handleDeleteTodo = (e) => {
    const newTodos = todos.filter((todo) => {
      return Number(todo.id) !== Number(e.target.id);
    });
    setTodos(newTodos);
  };


  const handleComplete = (e) => {
    const newTodos = [...todos];
    newTodos[e.target.id].isDone = !todos[e.target.id].isDone;
    setTodos(newTodos);
  };


  const handleFilterTodos = (filter) => {
    if (filter === "All") {
      setActive(filter);
      setFilteredArray(todos);
    } else if (filter === "Completed") {
      setActive(filter);
      setFilteredArray(todos.filter((todo) => todo.isDone));
    } else if (filter === "Actives") {
      setActive(filter);
      setFilteredArray(todos.filter((todo) => !todo.isDone));
    }
  };

  const handleEditOpen = (todoId) => {
    const todoToEdit = todos.find(todo => Number(todo.id) === Number(todoId));
    setOpen(true);
    setEditNote(todoToEdit);
  };

  const handleEditTodo = (editedTodo, id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text: editedTodo };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setOpen(false);
    setEditNote(null);
  };


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSearch = (searchText) => {
    if (!searchText) {
      setFilteredArray(todos);
    } else {
      const filteredTodos = todos.filter((todo) =>
        todo.text.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredArray(filteredTodos);
    }
  };


  useEffect(() => {
    setFilteredArray(todos);
    setActive(null);
  }, [todos]);

  return (
    <div className="main--container">
      <div className="todo--container">
        <div className="todo--header">
          <h1 className="todo--title">Todo List</h1>
        </div>
        <div className="todos--container">
          <div className="todo--actions-container">
            <TodoSearch handleSearch={handleSearch} />
            <select className="choose-search-type-select" onChange={(e) => handleFilterTodos(e.target.value)}>
              <option value="All">All</option>
              <option value="Completed">Completed</option>
              <option value="Actives">Incompleted</option>
            </select>
            <button className="theme--change-btn" onClick={changeTheme}>
              <img
                src={
                  theme === "dark"
                    ? "/images/icon-sun.svg"
                    : "/images/icon-moon.svg"
                }
                className="theme-img"
                alt="theme button"
                id="theme-img"
              />
            </button>
          </div>
          {todos.length > 0 && (
            <TodoLists
              active={active}
              filteredArray={filteredArray}
              handleDeleteTodo={handleDeleteTodo}
              handleComplete={handleComplete}
              handleEditOpen={handleEditOpen}

            />
          )}
        </div>
        <div className="add-btn-container">
          <button className="rounded-btn" onClick={handleClickOpen}>
            <img src="/images/plus-icon.svg" alt="add note icon" />
          </button>
        </div>
        <AddNoteDialog open={open} handleClose={handleClose} handleAddTodo={handleAddTodo} editNote={editNote} handleEditTodo={handleEditTodo} />

      </div>
    </div>
  );
}

export default App;
