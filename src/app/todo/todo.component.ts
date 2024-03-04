import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Todo } from '../todo';

@Component({
  selector: 'ag-todo',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoListItemComponent {
  @Input({ required: true }) todo!: Todo;
  @Output() todoCompleted = new EventEmitter<Todo>();
  @Output() todoUncompleted = new EventEmitter<Todo>();
  @Output() todoDeleted = new EventEmitter<Todo>();

  ngOnDestroy() {
    console.log('Destroying the todo', this.todo);
  }

  onTodoChange(event: Event) {
    const el = event.target as HTMLInputElement;
    if (el.checked) {
      this.todoCompleted.emit(this.todo);
    } else {
      this.todoUncompleted.emit(this.todo);
    }
  }

  onDeleteTodo() {
    this.todoDeleted.emit(this.todo);
  }
}
