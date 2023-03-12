import './style.css';
import { TodoItem, Project } from './AppLogic';
import {
  displayTodo,
  myTodos,
  myProjects,
  insertProjectToSideBar,
  projectSidebarButton,
  currentProjectHolder,
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

const createProjectButton = document.getElementById('create-project'); // CREATE BUTTON ON PROJECT FORM
createProjectButton.addEventListener('click', () => {
  const projectsNameInput = document.getElementById('project-name').value;
  const theProject = new Project(projectsNameInput);
  myProjects.push(theProject);

  insertProjectToSideBar();
  projectSidebarButton(); // compounding click issue
  console.table(myProjects);
});

const allProjects = new Project('All Projects'); // keeps track of all todos from all projects
myProjects.push(allProjects);

const createTodoButton = document.getElementById('create'); // CREATE BUTTON ON TODO FORM
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
  // displayTodo();

  for (let i = 0; i < myProjects.length; i++) {
    if (myProjects[i].name === currentProjectHolder) {
      myProjects[i].addTodoItem(todo);
      myProjects[0].addTodoItem(todo); // so that everything gets added to 'all projects'
    }
  }

  if (currentProjectHolder === undefined) {
    myProjects[0].addTodoItem(todo);
  } else {
    console.log('yo');
    for (let i = 0; i < myProjects.length; i++) {
      if (myProjects[i].name === currentProjectHolder) {
        const display = document.querySelector('.content-display');

        display.innerHTML += myProjects[i].toDos[0].title;
      }
    }
  }
  console.table(myProjects);
});

/*     for (let i = 0; i < myProjects[i].toDos.length; i++) {
      const display = document.querySelector('.content-display');
      // display.innerHTML = '';
      for (let j = 0; j < myProjects[j].toDos[i].length; j++) {
        const todoEntry = document.createElement('div');
        todoEntry.classList.add('todo-entry');
        display.appendChild(todoEntry);
        const todoEntryContainer = document.createElement('div');
        todoEntryContainer.classList.add('todo-entry-container');
        todoEntry.appendChild(todoEntryContainer);

        const todoTitle = document.createElement('div');
        todoTitle.classList.add('todoTitle');
        todoTitle.innerText = myProjects[i].toDos[j].title;
        todoEntryContainer.appendChild(todoTitle);
      }
    } */
