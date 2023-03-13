import './style.css';
import { TodoItem, Project } from './AppLogic';
import {
  myTodos,
  myProjects,
  insertProjectToSideBar,
  projectSidebarButton,
  currentProjectHolder,
  displayTodosFromSpecificProject,
  allTodosButtonFunc,
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

const createTodoButton = document.getElementById('create');
const createProjectButton = document.getElementById('create-project');

const allProjects = new Project('All Projects'); // keeps track of ALL todos from ALL projects
myProjects.push(allProjects);

allTodosButtonFunc();

// CREATE BUTTON ON PROJECT FORM
createProjectButton.addEventListener('click', () => {
  const projectsNameInput = document.getElementById('project-name').value;
  const theProject = new Project(projectsNameInput);
  myProjects.push(theProject);

  insertProjectToSideBar();
  projectSidebarButton(); // compounding click issue
  console.table(myProjects);
});

// CREATE BUTTON ON TODO FORM
createTodoButton.addEventListener('click', () => {
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

  for (let i = 0; i < myProjects.length; i++) {
    const display = document.querySelector('.content-display');
    display.innerHTML = '';
    if (myProjects[i].name === currentProjectHolder) {
      myProjects[i].addTodoItem(todo);
    }
  }

  if (currentProjectHolder === 'All Projects') {
    for (let k = 0; k < myProjects[0].toDos.length; k++) {
      displayTodosFromSpecificProject(0, k);
    }
  } else {
    myProjects[0].addTodoItem(todo);
    console.log(`Added todo item to: ${currentProjectHolder}`);

    for (let i = 0; i < myProjects.length; i++) {
      for (let j = 0; j < myProjects[i].toDos.length; j++) {
        if (myProjects[i].name === currentProjectHolder) {
          displayTodosFromSpecificProject(i, j);
        }
      }
    }
  }
  console.table(myProjects);
});
