import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ITodo } from '../todo';

@Component({
  selector: 'ag-todo',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoListItemComponent {
  @Input({ required: true }) todo!: ITodo;
  @Output() todoCompleted = new EventEmitter<ITodo>();
  @Output() todoUncompleted = new EventEmitter<ITodo>();
  @Output() todoDeleted = new EventEmitter<ITodo>();

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
