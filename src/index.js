import './style.css';
import { TodoItem, Project } from './AppLogic';
import {
  myProjects,
  insertProjectToSideBar,
  projectSidebarButton,
  currentProjectHolder,
  displayTodosFromSpecificProject,
} from './DOMStuff';

// future features to add: project delete button, more info button, close popups 'x' button

const addItemButton = document.querySelector('.add-todo'); // POPUP FUNCTIONALITY
addItemButton.addEventListener('click', () => {
  document.querySelector('.project-popup').style.display = 'none';
  document.querySelector('.edit-todo-popup').style.display = 'none';
  document.querySelector('.task-popup').style.display = 'block';
});

const addProjectButton = document.querySelector('.add-project');
addProjectButton.addEventListener('click', () => {
  document.querySelector('.task-popup').style.display = 'none';
  document.querySelector('.edit-todo-popup').style.display = 'none';
  document.querySelector('.project-popup').style.display = 'block';
});

const createTodoButton = document.getElementById('create');
const createProjectButton = document.getElementById('create-project');

const DefaultProjects = new Project('Default');
myProjects.push(DefaultProjects);

// CREATE BUTTON ON PROJECT FORM
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
      localStorage.setItem(myProjects[i].name, JSON.stringify(myProjects[i]));
    }
  }
});

function LOCAL_STORAGE_STUFF() {
  // retrieves projects from LS and pushes it into myProjects
  for (let m = 1; m < Object.values(localStorage).length; m++) {
    const ourObjects = JSON.parse(Object.values(localStorage)[m]);
    const projectFromLS = new Project(ourObjects.name);
    myProjects.push(projectFromLS);
  }
  // retrieves toDos from LS and pushes it into the projects in myProjects
  for (let q = 0; q < Object.values(localStorage).length; q++) {
    const ourObjects = JSON.parse(Object.values(localStorage)[q]);
    for (let r = 0; r < ourObjects.toDos.length; r++) {
      const todoFromLS = new TodoItem(
        ourObjects.toDos[r].title,
        ourObjects.toDos[r].description,
        ourObjects.toDos[r].dueDate,
        ourObjects.toDos[r].priority
      );
      myProjects[q].toDos.push(todoFromLS);
    }
  }
  // displays myProjects/LS values and also the sidebar project buttons to the DOM:
  console.log(myProjects);
  for (let k = 0; k < myProjects.length; k++) {
    const projectsDisplay = document.querySelector('.projects-display');
    const projectsSidebar = document.createElement('button');
    projectsSidebar.classList.add('project-button');
    projectsSidebar.innerHTML = myProjects[k].name;
    projectsDisplay.appendChild(projectsSidebar);
    projectSidebarButton();

    for (let l = 0; l < myProjects[k].toDos.length; l++) {
      if (myProjects[k].name === currentProjectHolder) {
        displayTodosFromSpecificProject(k, l);
      }
    }
  }
}
LOCAL_STORAGE_STUFF();

// CREATE BUTTON ON TODO FORM
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
