import React, { useState } from 'react'
import './todoinput.css';

function TodoInput({handleAddTodo}) {
    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        if (e.key === "Enter") {
            if (!value) return;
            handleAddTodo(value)
            setValue("");
        }
    }
    return (
        <div className='todo--input--container'>
            <div className='checkbox'>
            </div>
            <input
                className="input--field"
                type="text"
                id="todo-input"
                placeholder="Create new todo..."
                value={value}    
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleSubmit}
                />
        </div>
    )
}

export default TodoInput