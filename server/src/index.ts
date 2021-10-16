/* eslint-disable no-shadow */
/* eslint-disable no-console */
import { ApolloServer, gql, UserInputError } from 'apollo-server';
import { v4 as uuidv4 } from 'uuid';

enum FILTER {
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
  enum FILTER {
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
    setFilter(filter: FILTER!): FILTER!
  }
`;

const resolvers = {
  Query: {
    allTodos: () => {
      if (filter === 'ALL') return todos;

      return todos.filter((todo) =>
        filter === 'COMPLETED' ? todo.completed : !todo.completed,
      );
    },
  },
  Mutation: {
    addTodo: (_, args: { text: string }) => {
      const todo: Todo = { id: uuidv4(), text: args.text, completed: false };
      todos.push(todo);

      return todo;
    },
    toggleCompleted: (_, args: { id: string }) => {
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
    setFilter: (_, args: { filter: FILTER }) => {
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
