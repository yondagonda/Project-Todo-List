/* eslint-disable import/no-mutable-exports */
// import { TodoItem, Project } from './AppLogic';

let myTodos = [];
const myProjects = [];
let currentProjectHolder = 'All Projects';

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
  todoDueDate.innerText = myProjects[x].toDos[y].duedate;
  todoEntryContainer.appendChild(todoDueDate);

  const todoPriority = document.createElement('div');
  todoPriority.classList.add('todoPriority');
  todoPriority.innerText = myProjects[x].toDos[y].priority;
  todoEntryContainer.appendChild(todoPriority);

  const todoButtons = document.createElement('div'); // buttons on our todo items starts here
  todoButtons.classList.add('todo-buttons');
  todoEntry.appendChild(todoButtons);

  const editButton = document.createElement('button');
  editButton.classList.add('edit-button');
  editButton.innerHTML = 'edit';
  todoButtons.appendChild(editButton);

  const trashButton = document.createElement('button');
  trashButton.classList.add('trash-button');
  trashButton.dataset.id = [y]; // data-id for our delete button
  trashButton.innerHTML = 'trash';
  todoButtons.appendChild(trashButton);

  const infoButton = document.createElement('button');
  infoButton.classList.add('info-button');
  infoButton.innerHTML = 'info';
  todoButtons.appendChild(infoButton);
  deleteTodo(); // remove this?
}

function deleteTodo() {
  // use as a method on our class instead?
  const deleteButton = document.querySelectorAll('.trash-button');
  deleteButton.forEach((del) => {
    del.addEventListener('click', (e) => {
      const dataID = +e.target.getAttribute('data-id');
      myTodos = myTodos.filter((Todos, index) => index !== dataID);
      console.table(myTodos);
      // displayTodo(); redundant now, needs replacement
    });
  });
}

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

function allTodosButtonFunc() {
  const allTodosButton = document.querySelector('.all');
  allTodosButton.addEventListener('click', () => {
    const display = document.querySelector('.content-display');
    display.innerHTML = '';
    for (let k = 0; k < myProjects[0].toDos.length; k++) {
      displayTodosFromSpecificProject(0, k);
    }
    currentProjectHolder = 'All Projects';
    console.log('You are now in project:', currentProjectHolder);
    return currentProjectHolder;
  });
}

export {
  myTodos,
  myProjects,
  insertProjectToSideBar,
  projectSidebarButton,
  currentProjectHolder,
  displayTodosFromSpecificProject,
  allTodosButtonFunc,
};
