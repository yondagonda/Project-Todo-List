class TodoItem {
  constructor(title, description, dueDate, priority, project) {
    this.title = title;
    this.description = description;
    this.duedate = dueDate;
    this.priority = priority;
    this.project = project;
  }

  returnTitle() {
    console.log(`this tasks dname is ${this.title}`);
  }
}

export default TodoItem;
