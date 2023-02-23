/* eslint-disable max-classes-per-file */
class Project {
  constructor(name) {
    this.name = name;
    this.toDos = [];
  }
}

class TodoItem {
  constructor(title, description, dueDate, priority, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
  }
}

export { TodoItem, Project };
