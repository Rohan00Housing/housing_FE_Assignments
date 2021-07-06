const newTodo = document.getElementById('new-todo');
const todos = document.getElementById('todos-pending');
const completedTasks = document.getElementById('todos-completed')

showTodos();

let indexToUpdate = 0;

function addTodo(){
  let data = localStorage.getItem('list1');
  let todo = newTodo.value;
  let listOfTodos = [];

  if(data){
    listOfTodos = JSON.parse(data);
  }

  if(document.getElementById('add-btn').innerText === 'Update Todo'){
    listOfTodos[indexToUpdate] = todo;
  }
  else{
    listOfTodos.push(todo);
  }

  localStorage.setItem('list1',JSON.stringify(listOfTodos));
  showTodos();
  newTodo.value = "";
  document.getElementById('add-btn').innerText = 'Add Todo';
}

function deleteTodo(i){
  console.log('hitting');
  let deletedTask = '';
  let data = localStorage.getItem('list1');
  let listOfTodos = []
  if(data){
    listOfTodos = JSON.parse(data);
  }
  deletedTask = listOfTodos[i];
  listOfTodos.splice(i,1);
  localStorage.setItem('list1',JSON.stringify(listOfTodos));
  showTodos();
  return deletedTask;
}

function updateTodo(i){
  document.getElementById('add-btn').innerText = 'Update Todo';
  indexToUpdate = i;

  let data = localStorage.getItem('list1');
  let listOfTodos = []
  if(data){
    listOfTodos = JSON.parse(data);
  }

  newTodo.value = listOfTodos[i];

}

function showTodos(){
  let data = localStorage.getItem('list1');
  let completedTaskData = localStorage.getItem('list2');
  let listOfTodos = [];
  let todosContent = "";
  let completedTaskContent = "";
  let listOfCompletedTodos = [];

  if(data){
    listOfTodos = JSON.parse(data);
  }
  if(completedTaskData){
    listOfCompletedTodos = JSON.parse(completedTaskData);
  }

  for(let i=0;i<listOfTodos.length;i++){
    todosContent = todosContent + `<li draggable="true" ondragstart="drag(event)" id="${i}" style="margin: 10%;">${listOfTodos[i]}&nbsp;&nbsp;<button onclick="deleteTodo(${i})">X</button>&nbsp;&nbsp;<button onclick="updateTodo(${i})">update</button></li>`;
  }
  todos.innerHTML = todosContent;

  for(let i=0;i<listOfCompletedTodos.length;i++){
    completedTaskContent = completedTaskContent + `<li draggable="true" ondragstart="drag(event) style="margin: 10%;">${listOfCompletedTodos[i]}&nbsp;&nbsp;</li>`;
  }
  completedTasks.innerHTML = completedTaskContent;
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("text");
  console.log('abc');
  // ev.target.appendChild(document.getElementById(data));
  let movedTask = deleteTodo(parseInt(data));
  let completedTaskData = localStorage.getItem('list2');
  let listOfCompletedTodos = [];

  if(completedTaskData){
    listOfCompletedTodos = JSON.parse(completedTaskData);
  }
  listOfCompletedTodos.push(movedTask);
  localStorage.setItem('list2',JSON.stringify(listOfCompletedTodos));
  showTodos();
}