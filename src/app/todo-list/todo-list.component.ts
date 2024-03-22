import { Component, Input, afterNextRender, afterRender } from '@angular/core';
import { TodoListItemComponent as TodoComponent } from '../todo/todo.component';
import { ITodo, Todo } from '../todo';
import { TodoService } from '../todo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ag-todo-list',
  standalone: true,
  imports: [TodoComponent, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  todos: ITodo[] = [];

  todoModel: Todo = Todo.defaultTodo();

  constructor(private todoService: TodoService) {
    this.todos = todoService.getTodos();
  }

  addTodoForm() {
    this.todoService.addTodo(this.todoModel);
    this.todoModel = Todo.defaultTodo();
    this.todos = this.todoService.getTodos();
  }

  completeTodo(todo: ITodo) {
    todo.completed = true;
    this.todoService.updateTodo(todo);
    this.todos = this.todoService.getTodos();
  }

  uncompleteTodo(todo: ITodo) {
    todo.completed = false;
    this.todoService.updateTodo(todo);
    this.todos = this.todoService.getTodos();
  }

  deleteTodo(todo: ITodo) {
    this.todoService.deleteTodo(todo);
    this.todos = this.todoService.getTodos();
  }
}
