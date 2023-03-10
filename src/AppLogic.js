/* eslint-disable max-classes-per-file */
import { currentProjectHolder } from './DOMStuff';

class TodoItem {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    // this.id = Date.now();
    this.projectID = currentProjectHolder;
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

  // removeTodoItem(id) {
  //   const todoIndex = this.toDos.findIndex((todo) => todo.id === id);
  //   if (todoIndex !== -1) {
  //     this.toDos.splice(todoIndex, 1);
  //     console.log(
  //       `todo item with ID ${id} was removed from project ${this.name} `
  //     );
  //   } else {
  //     console.log(`could not find todoitem with ID ${id} in project`);
  //   }
  // }
}

export { TodoItem, Project };
