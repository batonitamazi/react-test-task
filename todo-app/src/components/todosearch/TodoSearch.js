import React, { useState } from 'react'
import './todosearch.css';

function TodoSearch() {
    return (
        <div className='todo--input--container'>
            <input
                className="input--field"
                type="text"
                id="todo-input"
                placeholder="Search Note..."
                // value={value}    
                // onChange={(e) => setValue(e.target.value)}
                // onKeyDown={handleSubmit}
                />
        </div>
    )
}

export default TodoSearch