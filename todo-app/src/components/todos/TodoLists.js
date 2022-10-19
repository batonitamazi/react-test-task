import React, { useState } from 'react'
import './todolist.css';


const buttons = [
    {
        name: 'All'
    },
    {
        name: 'Active'
    },
    {
        name: 'Completed'
    },
]

function TodoLists({ todos, handleDeleteTodo }) {
    const [active, setActive] = useState(null)
    const handleClick = (e) => {
        setActive(e.target.value)
    }
    


    return (
        <div className='todo--list'>
            <div className='todo--list--container'>
                {todos.map((todo, index) => {
                    return (
                        <div className='todos--list--container' key={index}>
                            <div className='todo--card'>
                                <div className="checkbox--todo" type='checkbox'>
                                </div>
                                <span className='todo--text'>{todo.text}</span>
                            </div>
                            <img  src='images/icon-cross.svg' alt='delete' id={Number(todo.id)} onClick={handleDeleteTodo}/>
                        </div>
                    )
                })}
            </div>
            <div className='bottom-buttons'>
                <p className='item--counter'>
                    {todos.length} items left
                </p>
                <div className='button-group'>
                    {buttons.map((btn, index) => {
                        return (
                            <button onClick={handleClick} value={btn.name} className={active === btn.name ? 'filter--button active' : 'filter--button'} id="all" key={index}>{btn.name}</button>
                        )
                    })}

                </div>
                <button onClick={handleClick} id='clear' className={active ? 'filter--button active' : 'filter--button'}>
                    Clear Completed
                </button>
            </div>
        </div>
    )
}

export default TodoLists