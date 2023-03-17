import './style.css';
import { TodoItem, Project } from './AppLogic';
import {
  myProjects,
  insertProjectToSideBar,
  projectSidebarButton,
  currentProjectHolder,
  displayTodosFromSpecificProject,
  saveTodoToLocal,
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

const DefaultProjects = new Project('Default');
myProjects.push(DefaultProjects);

// CREATE BUTTON ON PROJECT FORM
createProjectButton.addEventListener('click', () => {
  const projectsNameInput = document.getElementById('project-name').value;
  const theProject = new Project(projectsNameInput);
  myProjects.push(theProject);

  insertProjectToSideBar();
  projectSidebarButton();
  console.table(myProjects);

  for (let i = 0; i < myProjects.length; i++) {
    localStorage.setItem(projectsNameInput, JSON.stringify(myProjects[i]));
  }
});

const objectFromLS = JSON.parse(Object.values(localStorage));
console.log(objectFromLS);

for (let j = 0; j < objectFromLS.toDos.length; j++) {
  const todoFromLS = new TodoItem(
    objectFromLS.toDos[j].title,
    objectFromLS.toDos[j].description,
    objectFromLS.toDos[j].dueDate,
    objectFromLS.toDos[j].priority
  );
  myProjects[0].toDos.push(todoFromLS);
}

console.log(myProjects);

// for (let k = 0; k < myProjects.length; k++) {
//   for (let l = 0; l < myProjects[k].toDos.length; l++) {
//     if (myProjects[k].name === currentProjectHolder) {
//       displayTodosFromSpecificProject(k, l);
//     }
//   }
// }

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
