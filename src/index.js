import './style.css';
import { TodoItem, Project } from './AppLogic';
import {
  myProjects,
  insertProjectToSideBar,
  projectSidebarButton,
  currentProjectHolder,
  displayTodosFromSpecificProject,
  displayLocalStorage,
} from './DOMStuff';

// FUTURE FEATURES TO ADD: project delete button, a more info button?

// POPUP FUNCTIONALITY
document.querySelector('.add-todo').addEventListener('click', () => {
  document.querySelector('.project-popup').style.display = 'none';
  document.querySelector('.edit-todo-popup').style.display = 'none';
  document.querySelector('.task-popup').style.display = 'block';
});

document.querySelector('.add-project').addEventListener('click', () => {
  document.querySelector('.task-popup').style.display = 'none';
  document.querySelector('.edit-todo-popup').style.display = 'none';
  document.querySelector('.project-popup').style.display = 'block';
});

// CREATE BUTTON ON PROJECT FORM
const createProjectButton = document.getElementById('create-project');
createProjectButton.addEventListener('click', () => {
  document.querySelector('.project-popup').style.display = 'none';

  const projectsNameInput = document.getElementById('project-name').value;
  const theProject = new Project(projectsNameInput);
  myProjects.push(theProject);

  insertProjectToSideBar();
  projectSidebarButton();
  console.table(myProjects);

  for (let i = 0; i < myProjects.length; i++) {
    if (myProjects[i].name === projectsNameInput) {
      localStorage.setItem(myProjects[0].name, JSON.stringify(myProjects[0]));
      localStorage.setItem(myProjects[i].name, JSON.stringify(myProjects[i]));
    }
  }
});

const DefaultProject = new Project('Default');
myProjects.push(DefaultProject);

displayLocalStorage();

// CREATE BUTTON ON TODO FORM
const createTodoButton = document.getElementById('create');
createTodoButton.addEventListener('click', () => {
  document.querySelector('.task-popup').style.display = 'none';

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

  for (let i = 0; i < myProjects.length; i++) {
    const display = document.querySelector('.content-display');
    display.innerHTML = '';
    if (myProjects[i].name === currentProjectHolder) {
      myProjects[i].addTodoItem(todo);
    }
  }

  for (let i = 0; i < myProjects.length; i++) {
    for (let j = 0; j < myProjects[i].toDos.length; j++) {
      if (myProjects[i].name === currentProjectHolder) {
        displayTodosFromSpecificProject(i, j);
        localStorage.setItem(myProjects[i].name, JSON.stringify(myProjects[i]));
      }
    }
  }
  console.table(myProjects);
});
