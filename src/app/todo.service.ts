import { Injectable } from '@angular/core';
import { TODOS } from './mock.todos';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  getTodos() {
    return TODOS;
  }

  getTodo(id: number) {
    return TODOS.find((todo) => todo.id === id);
  }

  updateTodo(todo: Todo) {
    let index = TODOS.findIndex((t) => t.id === todo.id);
    TODOS[index] = todo;
  }

  deleteTodo(todo: Todo) {
    let index = TODOS.findIndex((t) => t.id === todo.id);
    TODOS.splice(index, 1);
  }
}
