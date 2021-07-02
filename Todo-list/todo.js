const newTodo = document.getElementById('new-todo');
const todos = document.getElementById('todos');

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
  let data = localStorage.getItem('list1');
  let listOfTodos = []
  if(data){
    listOfTodos = JSON.parse(data);
  }

  listOfTodos.splice(i,1);
  localStorage.setItem('list1',JSON.stringify(listOfTodos));
  showTodos();
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
  let listOfTodos = [];
  let todosContent = "";

  if(data){
    listOfTodos = JSON.parse(data);
  }

  for(let i=0;i<listOfTodos.length;i++){
    todosContent = todosContent + `<li>${listOfTodos[i]}&nbsp;&nbsp;<button onclick="deleteTodo(${i})">X</button>&nbsp;&nbsp;<button onclick="updateTodo(${i})">update</button></li>`;
  }

  todos.innerHTML = todosContent;

}