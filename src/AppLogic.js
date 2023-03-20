/* eslint-disable max-classes-per-file */
import { currentProjectHolder } from './DOMStuff';

let count = 0;

class TodoItem {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.projectID = currentProjectHolder;
    this.id = count++;
  }
}

class Project {
  constructor(name) {
    this.name = name;
    this.toDos = [];
  }

  addTodoItem(todoItem) {
    this.toDos.push(todoItem);
  }

  removeTodoItem(id) {
    const todoIndex = this.toDos.findIndex((todo) => todo.id === id);
    if (todoIndex !== -1) {
      this.toDos.splice(todoIndex, 1);
      console.log(
        `todo item with ID ${id} was removed from project ${this.name} `
      );
    }
  }
}

export { TodoItem, Project };
