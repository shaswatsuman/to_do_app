import React, { useState } from 'react'

function DeleteAll(props) {

    function onClickHandler() {
        props.deleteAll();
    }

    return (
            <button className='del-all delete-all' onClick={onClickHandler}>Delete All Tasks</button>
    )
}

export default DeleteAll;