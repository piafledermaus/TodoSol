import { Injectable } from '@angular/core';
import { TODOS } from './mock.todos';
import { ITodo } from './todo';

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

  addTodo(todo: ITodo) {
    // get a new id
    let id = 1;
    for (let t of TODOS) {
      if (t.id >= id) {
        id = t.id + 1;
      }
    }
    todo.id = id;
    TODOS.push(todo);
  }

  updateTodo(todo: ITodo) {
    let index = TODOS.findIndex((t) => t.id === todo.id);
    TODOS[index] = todo;
  }

  deleteTodo(todo: ITodo) {
    let index = TODOS.findIndex((t) => t.id === todo.id);
    TODOS.splice(index, 1);
  }
}
