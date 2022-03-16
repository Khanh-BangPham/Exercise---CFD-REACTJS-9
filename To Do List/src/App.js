import './App.css';
import { useState, useEffect } from 'react';
import ToDoList from './components/ToDoList';
function App() {
  const [toDoList, setTodoList] = useState([])
  const TODO_APP_KEY_STORAGE = 'TODO_APP';
  useEffect(() => {
    const toDoList = localStorage.getItem(TODO_APP_KEY_STORAGE);
    if(toDoList){
      setTodoList(JSON.parse(toDoList));
    }
  },[]);

  useEffect(() => {
    localStorage.setItem(TODO_APP_KEY_STORAGE, JSON.stringify(toDoList));
  }, [toDoList]);

  const handleAdd = (value) => {
    setTodoList([{
      id: Date.now() + '-' + Math.random(),
      name: value,
      isDone: 0
    }, ...toDoList]);
  }
  const handleCompleted = (task) => {
    task.isDone = 1
    setTodoList([...toDoList]);
  }

  return ( 
    <ToDoList toDoList={toDoList} handleAddFunc={handleAdd} handleCompletedFunc={handleCompleted}/>
  );
}

export default App;
