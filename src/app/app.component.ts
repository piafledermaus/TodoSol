import { Component } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'ag-root',
  standalone: true,
  imports: [TodoListComponent, RouterOutlet],
  template: `
    <main>
      <header class="header">
        <img class="logo" src="./assets/logo.png" alt="logo" />
      </header>
      <div class="container">
        <h2 class="title">{{ title }}</h2>
        <!-- <ag-todo-list></ag-todo-list> -->
        <router-outlet></router-outlet>
      </div>
    </main>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Todo List';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.title = event.url === '/' ? 'Todo List' : 'Todo Details';
      }
    });
  }
}
