import React from 'react'

function TodoList(props) {

    const onDelete = ()=>{
        props.deleteTask(props.index);
    }

    return (
        <li className='list-item'>
            {props.item}
            <span className='icons'>
            <i className="fa-solid fa-trash-can icon-delete" onClick={onDelete}></i>
            </span>
        </li>
    )
}

export default TodoList;