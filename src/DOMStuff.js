/* eslint-disable no-use-before-define */
let myTodos = [];

function displayTodo() {
  const display = document.querySelector('.content-display');
  display.innerHTML = ' ';

  for (let i = 0; i < myTodos.length; i++) {
    const todoEntry = document.createElement('div');
    todoEntry.classList.add('todo-entry');
    display.appendChild(todoEntry);

    const todoEntryContainer = document.createElement('div');
    todoEntryContainer.classList.add('todo-entry-container');
    todoEntry.appendChild(todoEntryContainer);

    const todoTitle = document.createElement('div');
    todoTitle.classList.add('todoTitle');
    todoTitle.innerText = myTodos[i].title;
    todoEntryContainer.appendChild(todoTitle);

    const todoDescription = document.createElement('div');
    todoDescription.classList.add('todoDescription');
    todoDescription.innerText = myTodos[i].description;
    todoEntryContainer.appendChild(todoDescription);

    const todoDueDate = document.createElement('div'); // this will need updating/changing
    todoDueDate.classList.add('todoDueDate');
    todoDueDate.innerText = myTodos[i].duedate;
    todoEntryContainer.appendChild(todoDueDate);

    const todoPriority = document.createElement('div');
    todoPriority.classList.add('todoPriority');
    todoPriority.innerText = myTodos[i].priority;
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
    trashButton.dataset.id = [i]; // data-id for our delete button
    trashButton.innerHTML = 'trash';
    todoButtons.appendChild(trashButton);

    const infoButton = document.createElement('button');
    infoButton.classList.add('info-button');
    infoButton.innerHTML = 'info';
    todoButtons.appendChild(infoButton);
  }
  deleteTodo();
  // return myTodos;
}

function deleteTodo() {
  const deleteButton = document.querySelectorAll('.trash-button');
  deleteButton.forEach((del) => {
    del.addEventListener('click', (e) => {
      const dataID = +e.target.getAttribute('data-id');
      // console.log(dataID);
      myTodos = myTodos.filter((Todos, index) => index !== dataID);
      console.table(myTodos);
      displayTodo();
    });
  });
}

function insertProjectToSideBar() {
  const projectsDisplay = document.querySelector('.projects-display');
  // projectsDisplay.innerHTML = ' ';
  const projectsNameInput = document.getElementById('project-name').value;
  if (projectsNameInput !== '') {
    const projectsSidebar = document.createElement('button');
    projectsSidebar.classList.add('project-button');
    projectsSidebar.innerHTML = projectsNameInput;
    projectsDisplay.appendChild(projectsSidebar);
  }
}

export { displayTodo, myTodos, insertProjectToSideBar };
