import { Component, Input } from '@angular/core';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';
import { Todo } from '../todo';

@Component({
  selector: 'ag-todo-list',
  standalone: true,
  imports: [TodoListItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  allTodos: Todo[] = [];
  todos: Todo[] = [];
  todosCompleted: Todo[] = [];

  constructor() {
    this.allTodos = [
      {
        id: 1,
        description: 'Learn the basics of Angular',
        completed: false,
      },
      {
        id: 2,
        description: 'Learn the basics of TypeScript',
        completed: false,
      },
    ];
    this.todos.push(...this.allTodos);
  }

  addTodo(todo: string) {
    let newTodo: Todo = {
      id: this.allTodos.length + 1,
      description: todo,
      completed: false,
    };

    this.allTodos.push(newTodo);
    this.todos.push(newTodo);
  }

  completeTodo(todo: Todo) {
    todo.completed = true;
    console.log('Completing todo', todo);
    this.todosCompleted.push(todo);
    console.log('Completed todos', this.todosCompleted);

    this.todos = this.todos.filter((t) => t.id !== todo.id);
  }

  uncompleteTodo(todo: Todo) {
    todo.completed = false;
    console.log('Uncompleting todo', todo);
    this.todos.push(todo);
    console.log('Completed todos', this.todosCompleted);

    this.todosCompleted = this.todosCompleted.filter((t) => t.id !== todo.id);
  }

  deleteTodo(todo: Todo) {
    console.log('Deleting todo', todo);
    this.allTodos = this.allTodos.filter((t) => t.id !== todo.id);
    this.todos = this.todos.filter((t) => t.id !== todo.id);
    this.todosCompleted = this.todosCompleted.filter((t) => t.id !== todo.id);
  }
}
