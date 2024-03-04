import { Todo } from './todo';

export let TODOS: Todo[] = [
  {
    id: 1,
    title: 'Learn the basics of Angular',
    details: 'Learn the basics of Angular 17 and TypeScript by building a simple todo app.',
    completed: false,
    dueDate: new Date('2024-12-31'),
  },
  {
    id: 2,
    title: 'Learn the basics of TypeScript',
    details: 'Learn the basics of TypeScript by building a simple todo app.',
    completed: false,
  },
];
