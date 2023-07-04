import React, { useState } from 'react'
import './App.css'
import NewTask from './components/NewTask'
import TodoList from './components/TodoList'
import DeleteAll from './components/DeleteAll'

function App() {

  const [todoList, changeList] = useState([]);

  const appendList = (enteredTask)=>{
    changeList([...todoList,enteredTask]);
  };

  const deleteTask = (key)=>{
    let newTodoList = [...todoList];
    newTodoList.splice(key, 1);
    changeList([...newTodoList]);
  }

  const deleteAll = ()=>{
    changeList([]);
  }

  return (
    <div className='container'>
        <NewTask appendList={appendList}/>
        <hr/>
         {todoList.map((listItem, i)=>{
          return (
            <TodoList key={i} index={i}item={listItem} deleteTask={deleteTask}/>
          )
         })}
         <div className='tospace'></div>
        <DeleteAll deleteAll={deleteAll}/> 
      </div>
  );
}

export default App;
