export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export type AddTodo = {
  text: string;
};

export type NewTodo = {
  id: string;
  text: string;
  completed: boolean;
};

// eslint-disable-next-line no-shadow
export enum TODO_FILTER {
  ALL = 'ALL',
  COMPLETED = 'COMPLETED',
  ACTIVE = 'ACTIVE',
}
