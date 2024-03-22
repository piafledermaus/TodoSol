export interface ITodo {
  id: number;
  title: string;
  details: string;
  completed: boolean;
  dueDate?: Date;
}

export class Todo implements ITodo {
  constructor(
    public id: number,
    public title: string,
    public details: string,
    public completed: boolean,
    public dueDate?: Date
  ) {}

  static defaultTodo(): ITodo {
    return {
      id: 0,
      title: '',
      details: '',
      completed: false,
    };
  }
}
