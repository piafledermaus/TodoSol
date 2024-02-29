import { Component } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'ag-root',
  standalone: true,
  imports: [TodoListComponent],
  template: `
    <main>
      <header class="header">
        <img class="logo" src="./assets/logo.png" alt="logo" />
      </header>
      <div class="container">
        <h2 class="title">Todo List</h2>
        <ag-todo-list></ag-todo-list>
      </div>
    </main>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {}
