import { Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

export const routes: Routes = [
  {
    path: 'todo-list',
    title: 'Todo List',
    component: TodoListComponent,
  },
  {
    path: 'todo/:id',
    title: 'Todo Details',
    component: TodoDetailsComponent,
  },
  {
    path: '',
    redirectTo: '/todo-list',
    pathMatch: 'full',
  },
];
