import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'ag-todo-list-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.css',
})
export class TodoListItemComponent {
  @Input({ required: true }) todo!: Todo;
  @Output() todoCompleted = new EventEmitter<Todo>();
  @Output() todoUncompleted = new EventEmitter<Todo>();
  @Output() todoDeleted = new EventEmitter<Todo>();

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
