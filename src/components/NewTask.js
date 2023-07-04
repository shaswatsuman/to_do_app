import React, { useState } from 'react'

function NewTask(props) {

    const [enteredTask, setEnteredTask] = useState('');

    function inputTextHandler(event) {
       setEnteredTask(event.target.value);
    }

    function onClickHandler() {
        if(enteredTask!=='' && enteredTask.length<=20)
         props.appendList(enteredTask);
        setEnteredTask('');
    }

    return (
        <div className='new-task-todo'>
            <input type='text' value={enteredTask} className='enter-task-todo' placeholder='Enter your new task(LESS THAN 20 CHARACTERS)' onChange={inputTextHandler}></input>
            <button className='add-new-task' onClick={onClickHandler}>+</button>
        </div>
    )
}

export default NewTask;