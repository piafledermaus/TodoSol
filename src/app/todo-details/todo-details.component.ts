import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'ag-todo-details',
  standalone: true,
  imports: [DatePipe, RouterLink, RouterLinkActive],
  templateUrl: './todo-details.component.html',
  styleUrl: './todo-details.component.css'
})
export class TodoDetailsComponent {
  todo!: Todo | undefined;
  todoStatusClasses: {
    'todo-status-completed': boolean;
    'todo-status-incompleted': boolean;
  } = {
      'todo-status-completed': false,
      'todo-status-incompleted': false,
    };

  constructor(private service: TodoService) { }

  @Input()
  set id(todoId: string) {
    this.todo = this.service.getTodo(parseInt(todoId, 10));
    this.todoStatusClasses['todo-status-completed'] = this.todo!.completed;
    this.todoStatusClasses['todo-status-incompleted'] = !this.todo!.completed;
    console.log('TodoDetailsComponent:', this.todo);
    console.log('TodoDetailsComponent:', this.todoStatusClasses);
  }

}
