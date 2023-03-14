/* eslint-disable import/no-mutable-exports */
import { TodoItem, Project } from './AppLogic';

const myProjects = [];
let currentProjectHolder = 'Default';
let dataID;

function displayTodosFromSpecificProject(x, y) {
  const display = document.querySelector('.content-display');
  const todoEntry = document.createElement('div');
  todoEntry.classList.add('todo-entry');
  display.appendChild(todoEntry);
  const todoEntryContainer = document.createElement('div');
  todoEntryContainer.classList.add('todo-entry-container');
  todoEntry.appendChild(todoEntryContainer);

  const todoTitle = document.createElement('div');
  todoTitle.classList.add('todoTitle');
  todoTitle.innerText = myProjects[x].toDos[y].title;
  todoEntryContainer.appendChild(todoTitle);

  const todoDescription = document.createElement('div');
  todoDescription.classList.add('todoDescription');
  todoDescription.innerText = myProjects[x].toDos[y].description;
  todoEntryContainer.appendChild(todoDescription);

  const todoDueDate = document.createElement('div'); // this will need updating/changing
  todoDueDate.classList.add('todoDueDate');
  todoDueDate.innerText = myProjects[x].toDos[y].dueDate;
  todoEntryContainer.appendChild(todoDueDate);

  const todoPriority = document.createElement('div');
  todoPriority.classList.add('todoPriority');
  todoPriority.innerText = myProjects[x].toDos[y].priority;
  todoEntryContainer.appendChild(todoPriority);

  const todoButtons = document.createElement('div');
  todoButtons.classList.add('todo-buttons');
  todoEntry.appendChild(todoButtons);

  const editButton = document.createElement('button');
  editButton.classList.add('edit-button');
  editButton.dataset.id = myProjects[x].toDos[y].id;
  editButton.innerHTML = 'edit';
  todoButtons.appendChild(editButton);

  const trashButton = document.createElement('button');
  trashButton.classList.add('trash-button');
  trashButton.dataset.id = myProjects[x].toDos[y].id;
  trashButton.innerHTML = 'trash';
  todoButtons.appendChild(trashButton);

  const infoButton = document.createElement('button');
  infoButton.classList.add('info-button');
  infoButton.innerHTML = 'info';
  todoButtons.appendChild(infoButton);

  trashButton.addEventListener('click', (e) => {
    dataID = +e.target.getAttribute('data-id'); // TRASH BUTTON FUNCTIONALITY
    display.innerHTML = '';
    myProjects[x].removeTodoItem(dataID);
    if (myProjects[x].name === currentProjectHolder) {
      for (let j = 0; j < myProjects[x].toDos.length; j++) {
        displayTodosFromSpecificProject(x, j);
      }
    }
    console.table(myProjects);
  });

  editButton.addEventListener('click', (e) => {
    dataID = +e.target.getAttribute('data-id'); // FETCHES VALUES TO POPULATE EDIT FORM
    console.log(`now editing todo ID: ${dataID}`);
    if (myProjects[x].toDos[y].id === dataID) {
      document.getElementById('edit-title').value =
        myProjects[x].toDos[y].title;
      document.getElementById('edit-description').value =
        myProjects[x].toDos[y].description;
    }
    return dataID;
  });
}

const confirmEditButton = document.getElementById('confirm-edit');
confirmEditButton.addEventListener('click', () => {
  const display = document.querySelector('.content-display');
  display.innerHTML = '';

  for (let i = 0; i < myProjects.length; i++) {
    for (let j = 0; j < myProjects[i].toDos.length; j++) {
      if (myProjects[i].toDos[j].id === dataID) {
        myProjects[i].toDos[j].title =
          document.getElementById('edit-title').value;
        myProjects[i].toDos[j].description =
          document.getElementById('edit-description').value;
        console.log(myProjects); // now we render myProjects through the forloops below

        for (let k = 0; k < myProjects.length; k++) {
          if (myProjects[k].name === currentProjectHolder) {
            for (let l = 0; l < myProjects[k].toDos.length; l++) {
              displayTodosFromSpecificProject(k, l);
            }
          }
        }
      }
    }
  }
});

function insertProjectToSideBar() {
  const projectsDisplay = document.querySelector('.projects-display');
  const projectsNameInput = document.getElementById('project-name').value;

  if (projectsNameInput !== '') {
    const projectsSidebar = document.createElement('button');
    projectsSidebar.classList.add('project-button');
    projectsSidebar.innerHTML = projectsNameInput;
    projectsDisplay.appendChild(projectsSidebar);
  }
}

function projectSidebarButton() {
  const projectB = document.querySelectorAll('.project-button');
  projectB.forEach((p) => {
    p.addEventListener('click', (e) => {
      const display = document.querySelector('.content-display');
      display.innerHTML = '';
      currentProjectHolder = e.target.innerHTML;

      for (let i = 0; i < myProjects.length; i++) {
        if (myProjects[i].name === currentProjectHolder) {
          for (let j = 0; j < myProjects[i].toDos.length; j++) {
            displayTodosFromSpecificProject(i, j);
          }
        }
      }
      console.log('You are now in project:', currentProjectHolder);
      return currentProjectHolder;
    });
  });
}

export {
  myProjects,
  insertProjectToSideBar,
  projectSidebarButton,
  currentProjectHolder,
  displayTodosFromSpecificProject,
};
