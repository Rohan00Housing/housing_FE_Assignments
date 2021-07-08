import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Inputbox from './components/Inputbox';
import Task from './components/Task';

// function getTodoList(){
//   let todoData = localStorage.getItem('todoList');
//   let todos = [];

//   if(todoData){
//     todos = JSON.parse(todoData);
//   }
//   return todos;
// }

// function addTodo(todo){
//   let todos =  getTodoList();
//   todos.push(todo);
//   localStorage.setItem('todoList',JSON.stringify(todos));
// }


function App() {
  const [todos,setTodos] = useState(['task 1','task 2']);
  const [todo,setTodo] = useState('')

  // setTodos(newTask)
  function addTodo(){
    setTodos([...todos,todo]);
  }

  return (
    <div className="App">
      <Header />
      <Inputbox setTodo={setTodo} addTodo={addTodo}/>
      {
        todos.map((todo) => {
          return <Task task={todo}/>
        })
      }
    </div>
  );
}

export default App;
