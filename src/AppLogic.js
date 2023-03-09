/* eslint-disable max-classes-per-file */
class Project {
  constructor(name) {
    this.name = name;
    this.toDos = [];
  }

  appendTodos(todoItem) {
    this.toDos.push(todoItem);
  }
}

class TheTodoItems {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  get todoTitle() {
    return `${this.title}`;
  }
}

export { TheTodoItems, Project };
