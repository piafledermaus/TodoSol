import { Component, Input, afterNextRender, afterRender } from '@angular/core';
import { TodoListItemComponent as TodoComponent } from '../todo/todo.component';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'ag-todo-list',
  standalone: true,
  imports: [TodoComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  allTodos: Todo[] = [];
  todos: Todo[] = [];
  todosCompleted: Todo[] = [];

  constructor(private todoService: TodoService) {
    this.allTodos = todoService.getTodos();
    for (let todo of this.allTodos) {
      if (todo.completed) {
        this.todosCompleted.push(todo);
      } else {
        this.todos.push(todo);
      }
    }
  }

  addTodo(todo: string) {
    let newTodo: Todo = {
      id: this.allTodos.length + 1,
      title: todo,
      details: '',
      completed: false,
    };

    this.allTodos.push(newTodo);
    this.todos.push(newTodo);
  }

  completeTodo(todo: Todo) {
    todo.completed = true;
    this.todosCompleted.push(todo);
    this.todos = this.todos.filter((t) => t.id !== todo.id);
    this.todoService.updateTodo(todo);
  }

  uncompleteTodo(todo: Todo) {
    todo.completed = false;
    this.todos.push(todo);
    this.todosCompleted = this.todosCompleted.filter((t) => t.id !== todo.id);
    this.todoService.updateTodo(todo);
  }

  deleteTodo(todo: Todo) {
    console.log('Deleting todo', todo);
    this.allTodos = this.allTodos.filter((t) => t.id !== todo.id);
    this.todos = this.todos.filter((t) => t.id !== todo.id);
    this.todosCompleted = this.todosCompleted.filter((t) => t.id !== todo.id);
    this.todoService.deleteTodo(todo);
  }
}
