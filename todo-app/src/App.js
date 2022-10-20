import './App.css';
import { useContext, useState } from "react";
import { themeContext } from './providers/theme.provider';
import TodoInput from './components/todoInput/TodoInput';
import TodoLists from './components/todos/TodoLists';


function App() {
  const [todos, setTodos] = useState([


  ])
  const { changeTheme, theme } = useContext(themeContext)
  const unique = () => parseInt(Date.now() * Math.random())
  const handleAddTodo = (text) => {
    const newTodoList = [...todos, { id: unique(), text, isDone: false }]
    setTodos(newTodoList)
  }
  const handleDeleteTodo = (e) => {
    const newTodos = todos.filter((todo) => { return (todo.id != e.target.id) });
    setTodos(newTodos);
  }
  const handleComplete = (e) => {
    const newTodos = [...todos];
    console.log(e.target.id)
    newTodos[e.target.id].isDone = !todos[e.target.id].isDone;
    setTodos(newTodos);
  }
  return (
    <div className='main--container'>
      <img src={theme === "dark" ? '/images/bg-desktop-dark.jpg' : '/images/bg-desktop-light.jpg'} className='background--image' alt='background' id='bg-img' />
      <div className='todo--container'>
        <div className='todo--header'>
          <h1 className='todo--title'>T O D O</h1>
          <button className="theme--change-btn" onClick={changeTheme}>
            <img src={theme === "dark" ? '/images/icon-sun.svg' : '/images/icon-moon.svg'} className="theme-img" alt='theme button' id='theme-img' />
          </button>
        </div>
        <div className='todos--container'>
          <TodoInput handleAddTodo={handleAddTodo} />
          {todos.length > 0 && (

            <TodoLists
              todos={todos}
              handleDeleteTodo={handleDeleteTodo}
              handleComplete={handleComplete}
            />
          )}
        </div>
      </div>
    </div>

  );
}

export default App;
