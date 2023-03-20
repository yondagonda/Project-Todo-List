/* eslint-disable import/no-mutable-exports */
import { format } from 'date-fns';
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
  todoTitle.innerText = `To-do: ${myProjects[x].toDos[y].title}`;
  todoEntryContainer.appendChild(todoTitle);

  const todoDescription = document.createElement('div');
  todoDescription.classList.add('todoDescription');
  if (myProjects[x].toDos[y].description !== '') {
    todoDescription.innerText = `Description: ${myProjects[x].toDos[y].description}`;
  }
  todoEntryContainer.appendChild(todoDescription);

  const todoDueDate = document.createElement('div');
  todoDueDate.classList.add('todoDueDate');
  if (myProjects[x].toDos[y].dueDate !== '') {
    todoDueDate.innerText = `${format(
      new Date(myProjects[x].toDos[y].dueDate),
      'dd MMM yyyy'
    )}`;
  }
  todoEntryContainer.appendChild(todoDueDate);

  const todoPriority = document.createElement('div');
  todoPriority.classList.add('todoPriority');
  todoPriority.innerText = `Priority: ${myProjects[x].toDos[y].priority}`;
  todoEntryContainer.appendChild(todoPriority);

  const todoButtons = document.createElement('div');
  todoButtons.classList.add('todo-buttons');
  todoEntry.appendChild(todoButtons);

  const editButton = document.createElement('button');
  editButton.classList.add('edit-button');
  editButton.dataset.id = myProjects[x].toDos[y].id;
  editButton.innerHTML = 'Edit';
  todoButtons.appendChild(editButton);

  const trashButton = document.createElement('button');
  trashButton.classList.add('trash-button');
  trashButton.dataset.id = myProjects[x].toDos[y].id;
  trashButton.innerHTML = 'Delete';
  todoButtons.appendChild(trashButton);

  // const infoButton = document.createElement('button'); // REMOVING MORE INFO BUTTON FOR NOW
  // infoButton.classList.add('info-button');
  // infoButton.innerHTML = 'Info';
  // todoButtons.appendChild(infoButton);

  // TRASH BUTTON FUNCTIONALITY
  trashButton.addEventListener('click', (e) => {
    dataID = +e.target.getAttribute('data-id');
    display.innerHTML = '';
    myProjects[x].removeTodoItem(dataID);
    // first we update the LS by replacing LS' current values with the updated myProjects values
    for (let k = 0; k < myProjects.length; k++) {
      if (myProjects[k].name === currentProjectHolder) {
        localStorage.setItem(myProjects[k].name, JSON.stringify(myProjects[k]));
      }
    }
    // then we display it to the DOM
    if (myProjects[x].name === currentProjectHolder) {
      for (let j = 0; j < myProjects[x].toDos.length; j++) {
        displayTodosFromSpecificProject(x, j);
      }
    }
    console.table(myProjects);
  });

  editButton.addEventListener('click', (e) => {
    document.querySelector('.task-popup').style.display = 'none';
    document.querySelector('.project-popup').style.display = 'none';
    document.querySelector('.edit-todo-popup').style.display = 'block';

    dataID = +e.target.getAttribute('data-id'); // FETCHES VALUES TO POPULATE EDIT FORM
    console.log(`now editing todo ID: ${dataID}`);
    if (myProjects[x].toDos[y].id === dataID) {
      document.getElementById('edit-title').value =
        myProjects[x].toDos[y].title;
      document.getElementById('edit-description').value =
        myProjects[x].toDos[y].description;
      document.getElementById('edit-due-date').value =
        myProjects[x].toDos[y].dueDate;
      document.getElementById('edit-priority').value =
        myProjects[x].toDos[y].priority;
    }
    return dataID;
  });
}

const confirmEditButton = document.getElementById('confirm-edit'); // EDIT BUTTON FUNCTIONALITY
confirmEditButton.addEventListener('click', () => {
  document.querySelector('.edit-todo-popup').style.display = 'none';
  const display = document.querySelector('.content-display');
  display.innerHTML = '';

  for (let i = 0; i < myProjects.length; i++) {
    for (let j = 0; j < myProjects[i].toDos.length; j++) {
      if (myProjects[i].toDos[j].id === dataID) {
        myProjects[i].toDos[j].title =
          document.getElementById('edit-title').value;
        myProjects[i].toDos[j].description =
          document.getElementById('edit-description').value;
        myProjects[i].toDos[j].dueDate =
          document.getElementById('edit-due-date').value;
        myProjects[i].toDos[j].priority =
          document.getElementById('edit-priority').value;
        console.log(myProjects);
        // now we render myProjects and update LS through the forloops below
        for (let k = 0; k < myProjects.length; k++) {
          if (myProjects[k].name === currentProjectHolder) {
            for (let l = 0; l < myProjects[k].toDos.length; l++) {
              displayTodosFromSpecificProject(k, l);

              localStorage.setItem(
                myProjects[k].name,
                JSON.stringify(myProjects[k])
              );
            }
          }
        }
      }
    }
  }
});

function insertProjectToSideBar() {
  const projectsNameInput = document.getElementById('project-name').value;
  if (projectsNameInput !== '') {
    const projectsSidebar = document.createElement('button');
    projectsSidebar.classList.add('project-button');
    projectsSidebar.innerHTML = projectsNameInput;
    document.querySelector('.projects-display').appendChild(projectsSidebar);
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
      document.querySelector(
        '.content-header'
      ).innerText = `${currentProjectHolder}`;
      return currentProjectHolder;
    });
  });
}

// cancel button functionality for our popups
const cancelTodo = document.getElementById('cancel-todo');
cancelTodo.addEventListener('click', () => {
  document.querySelector('.task-popup').style.display = 'none';
});
const cancelProject = document.getElementById('cancel-project');
cancelProject.addEventListener('click', () => {
  document.querySelector('.project-popup').style.display = 'none';
});
const cancelEdit = document.getElementById('cancel-edit');
cancelEdit.addEventListener('click', () => {
  document.querySelector('.edit-todo-popup').style.display = 'none';
});

function displayLocalStorage() {
  // retrieves projects from LS and pushes projects into myProjects
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
    const projectsSidebar = document.createElement('button');
    projectsSidebar.classList.add('project-button');
    projectsSidebar.innerHTML = myProjects[k].name;
    document.querySelector('.projects-display').appendChild(projectsSidebar);
    projectSidebarButton();

    for (let l = 0; l < myProjects[k].toDos.length; l++) {
      if (myProjects[k].name === currentProjectHolder) {
        displayTodosFromSpecificProject(k, l);
      }
    }
  }
}

export {
  myProjects,
  insertProjectToSideBar,
  projectSidebarButton,
  currentProjectHolder,
  displayTodosFromSpecificProject,
  displayLocalStorage,
};
