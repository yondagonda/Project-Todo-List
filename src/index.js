import './style.css';
import TodoItem from './AppLogic';
import { displayTodo, myTodos, deleteTodo } from './DOMStuff';

console.log('sd');
console.log(TodoItem);
// const myTodos = [];
// displayTodo();

const addButton = document.querySelector('.add-todo'); // this will enable popup functionality
addButton.addEventListener('click', () => {
  console.log('wassup');
  document.querySelector('.popup').style.display = 'block';
});

const createTodo = document.getElementById('create');
createTodo.addEventListener('click', () => {
  const titleInput = document.getElementById('title').value;
  const descriptionInput = document.getElementById('description').value;
  const dueDateInput = document.getElementById('dueDate').value;
  const priorityInput = document.getElementById('priority').value;
  const todo = new TodoItem(
    titleInput,
    descriptionInput,
    dueDateInput,
    priorityInput
  );
  myTodos.push(todo);
  displayTodo();
  console.table(myTodos);
});
