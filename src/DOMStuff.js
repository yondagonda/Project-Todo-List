import TodoItem from './AppLogic';

function popup() {
  const add = document.querySelector('.add-todo');
  add.addEventListener('click', () => {
    console.log('wassup');
  });
  document.querySelector('.popup').style.display = 'block';
}

const myTodos = [];

function displayTodo() {
  const display = document.querySelector('.content-display');
  display.innerHTML = ' ';

  for (let i = 0; i < myTodos.length; i++) {
    const todoEntry = document.createElement('div'); // data-id for our todo items
    todoEntry.classList.add('todo-entry');
    todoEntry.dataset.id = [i];
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
    trashButton.innerHTML = 'trash';
    todoButtons.appendChild(trashButton);

    const infoButton = document.createElement('button');
    infoButton.classList.add('info-button');
    infoButton.innerHTML = 'info';
    todoButtons.appendChild(infoButton);
  }
}

const createTodo = document.getElementById('create');
createTodo.addEventListener('click', () => {
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
  console.log(myTodos);
  displayTodo();
});

export { popup, displayTodo };
