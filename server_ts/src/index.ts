/* eslint-disable no-console */
import { ApolloServer, gql, UserInputError } from 'apollo-server';
import { v4 as uuidv4 } from 'uuid';

enum Filter {
  ALL = 'ALL',
  COMPLETED = 'COMPLETED',
  ACTIVE = 'ACTIVE',
}
let filter = 'ALL';
type Todo = {
  id: string;
  text: string;
  completed: boolean;
};
const todos: Todo[] = [
  { id: '8rjijr9j9-9', text: 'shopping', completed: false },
];
const typeDefs = gql`
  enum Filter {
    ALL
    COMPLETED
    ACTIVE
  }

  type Todo {
    id: ID!
    text: String!
    completed: Boolean!
  }

  type Query {
    allTodos: [Todo!]!
  }

  type Mutation {
    addTodo(text: String!): Todo!
    toggleCompleted(id: ID!): Todo!
    setFilter(filter: Filter!): Filter!
  }
`;

const resolvers = {
  Query: {
    allTodos: () => {
      console.log('allTodos', todos);
      if (filter === 'ALL') return todos;

      return todos.filter((todo) =>
        filter === 'COMPLETED' ? todo.completed : !todo.completed,
      );
    },
  },
  Mutation: {
    addTodo: (_, args: { text: string }) => {
      console.log('addTodo', args.text);
      const todo: Todo = { id: uuidv4(), text: args.text, completed: false };
      todos.push(todo);

      return todo;
    },
    toggleCompleted: (_, args: { id: string }) => {
      console.log('toggleCompleted', args.id);
      const todo = todos.find((t) => t.id === args.id);
      if (!todo) {
        throw new UserInputError('id not found', {
          invalidArgs: args.id,
        });
      }

      todo.completed = !todo.completed;
      todos.map((t) => (t.id === todo.id ? todo : t));

      return todo;
    },
    setFilter: (_, args: { filter: Filter }) => {
      console.log('setFilter', args.filter);
      filter = args.filter;

      return filter;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

void server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
