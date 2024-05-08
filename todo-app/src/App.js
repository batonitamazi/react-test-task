import "./App.css";
import { useContext, useEffect, useState } from "react";
import { themeContext } from "./providers/theme.provider";
import TodoInput from "./components/todoInput/TodoInput";
import TodoLists from "./components/todos/TodoLists";
import TodoSearch from "./components/todosearch/TodoSearch";

function App() {
  const [todos, setTodos] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);
  const [active, setActive] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
    console.log(e.target.id);
    newTodos[e.target.id].isDone = !todos[e.target.id].isDone;
    setTodos(newTodos);
  };
  const clearCompleted = (e) => {
    const newTodos = todos.filter((todo) => {
      return todo.isDone !== true;
    });
    setTodos(newTodos);
  };
  const handleFilterTodos = (e, filter) => {
    if (filter === "All") {
      setActive(filter);
      return setFilteredArray(todos);
    } else if (filter === "Completed") {
      setActive(filter);
      return setFilteredArray(
        todos.filter((todo) => {
          return todo.isDone !== false;
        })
      );
    } else if (filter === "Actives") {
      setActive(filter);
      return setFilteredArray(
        todos.filter((todo) => {
          return todo.isDone !== true;
        })
      );
    }
    return todos;
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
            {/* <TodoInput handleAddTodo={handleAddTodo} /> */}
            <TodoSearch />
            <select className="choose-search-type-select">
              <option>All</option>
              <option>Completed</option>
              <option>Incomplete</option>
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
              todos={todos}
              active={active}
              filteredArray={filteredArray}
              handleDeleteTodo={handleDeleteTodo}
              handleComplete={handleComplete}
              clearCompleted={clearCompleted}
              handleFilterTodos={handleFilterTodos}
            />
          )}
        </div>
        <div className="add-btn-container">
        <button className="rounded-btn">
          plus
        </button>
        </div>
      </div>
    </div>
  );
}

export default App;
