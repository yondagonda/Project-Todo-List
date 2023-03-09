import './style.css';
import { TheTodoItems, Project } from './AppLogic';
import {
  displayTodo,
  myTodos,
  insertProjectToSideBar,
  projectSidebarButton,
} from './DOMStuff';

// const addItemButton = document.querySelector('.add-todo'); // POPUP FUNCTIONALITY STUFF

// addItemButton.addEventListener('click', () => {
//   console.log('wassup');
//   document.querySelector('.task-popup').style.display = 'block';
// });
// const addProjectButton = document.querySelector('.add-project'); // this will enable popup functionality
// addProjectButton.addEventListener('click', () => {
//   console.log('yo');
//   document.querySelector('.project-popup').style.display = 'block';
// });

const myProjects = [];

const createProjectButton = document.getElementById('create-project'); // create button on project form
createProjectButton.addEventListener('click', () => {
  insertProjectToSideBar();
  projectSidebarButton(); // compounding click issue present

  const projectsNameInput = document.getElementById('project-name').value;
  const theProject = new Project(projectsNameInput);
  console.log(theProject);

  myProjects.push(theProject);
  console.log(myProjects);
});

const allProjects = new Project('All'); // a dummy project with tasks addable

const createTodo = document.getElementById('create'); // create button on todo form
createTodo.addEventListener('click', () => {
  const titleInput = document.getElementById('title').value;
  const descriptionInput = document.getElementById('description').value;
  const dueDateInput = document.getElementById('dueDate').value;
  const priorityInput = document.getElementById('priority').value;

  const todo = new TheTodoItems(
    titleInput,
    descriptionInput,
    dueDateInput,
    priorityInput
  );

  myTodos.push(todo);
  displayTodo();
  console.table(myTodos);

  allProjects.appendTodos(todo);
  console.log(allProjects);
});
