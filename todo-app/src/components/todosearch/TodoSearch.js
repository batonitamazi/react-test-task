import React, { useState } from 'react'
import './todosearch.css';

function TodoSearch({ handleSearch }) {
    const [searchText, setSearchText] = useState("");

    const handleChange = (e) => {
        setSearchText(e.target.value);
        handleSearch(e.target.value);
    };
    return (
        <div className='todo--input--container'>
            <input
                className="input--field"
                type="text"
                id="todo-input"
                placeholder="Search Note..."
                value={searchText}
                onChange={handleChange}
            />
        </div>
    )
}

export default TodoSearch