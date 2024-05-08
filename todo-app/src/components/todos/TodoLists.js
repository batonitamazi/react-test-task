import React from 'react'
import './todolist.css';



function TodoLists({ filteredArray, handleDeleteTodo, handleComplete, handleEditOpen }) {


    return (
        <>
            <div className='todo--list'>
                <div className='todo--list--container'>
                    {filteredArray.map((todo, index) => {
                        return (
                            <div className='todos--list--container' key={index}>
                                <div className='todo--card'>
                                    <div className={todo.isDone ? "checkbox--todo completed--todo" : "checkbox--todo"} type='checkbox' onClick={handleComplete} id={index}>
                                        {todo.isDone && <img src='/images/icon-check.svg' alt='check' id={index} className='check--img' />}
                                    </div>
                                    <span className={todo.isDone ? 'todo--text todo--text--completed' : 'todo--text'}>{todo.text}</span>
                                </div>
                                <img className='edit--icon' src='images/edit-icon.svg' alt='edit' id={Number(todo.id)} onClick={(e) => handleEditOpen(e.target.id)} />
                                <img className='delete--icon' src='images/trash-icon.svg' alt='delete' id={Number(todo.id)} onClick={handleDeleteTodo} />
                            </div>
                        )
                    })}
                </div>
            </div>

        </>
    )
}

export default TodoLists