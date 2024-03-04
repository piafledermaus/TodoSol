export interface Todo {
  id: number;
  title: string;
  details: string;
  completed: boolean;
  dueDate?: Date;
}
