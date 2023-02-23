import './style.css';
import { TodoItem, Project } from './AppLogic';
import { displayTodo, myTodos, insertProjectToSideBar } from './DOMStuff';

console.log(TodoItem);

const addItemButton = document.querySelector('.add-todo'); // this will enable popup functionality
addItemButton.addEventListener('click', () => {
  console.log('wassup');
  document.querySelector('.task-popup').style.display = 'block';
});

const addProjectButton = document.querySelector('.add-project'); // this will enable popup functionality
addProjectButton.addEventListener('click', () => {
  console.log('yo');
  document.querySelector('.project-popup').style.display = 'block';
});

const createProjectButton = document.getElementById('create-project');
createProjectButton.addEventListener('click', insertProjectToSideBar);

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
