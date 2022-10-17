import './App.css';
import { ChangeEventHandler, useContext } from "react";
import { themeContext } from './providers/theme.provider';


function App() {
  const { changeTheme, theme } = useContext(themeContext)




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
        <div className='todo--input--container'>
          <div className='checkbox'>
          </div>
          <input className="input--field" type="text" name="text input" id="todo-input"
            aria-label="todo-text" placeholder="Create new todo..."/>
        </div>
      </div>
    </div>

  );
}

export default App;
