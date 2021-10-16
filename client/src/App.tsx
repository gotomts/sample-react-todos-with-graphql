/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable import/no-cycle */
import { FC } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import DisplayBtn from './components/DisplayBtn';
import List from './components/List';
import Form from './components/Form';

export const ALL_TODOS = gql`
  query {
    allTodos {
      id
      text
      completed
    }
  }
`;

const ADD_TODOS = gql`
  mutation addTodo($text: String!) {
    addTodo(text: $text) {
      id
      text
      completed
    }
  }
`;

const SET_FILTER = gql`
  mutation setFilter($filter: FILTER!) {
    setFilter(filter: $filter)
  }
`;

const App: FC = () => {
  const { loading, data } = useQuery(ALL_TODOS);
  const [addTodo] = useMutation(ADD_TODOS, {
    refetchQueries: [{ query: ADD_TODOS }],
  });
  const [setFilter] = useMutation(SET_FILTER, {
    refetchQueries: [{ query: SET_FILTER }],
  });

  console.log('App', addTodo);

  return (
    <>
      <header className="py-2 px-4 bg-purple-400">
        <h1 className="text-white text-2xl">React-todo with GraphQL</h1>
      </header>
      <main className="flex flex-col items-center my-12">
        <Form addTodo={addTodo} />
        <div className="py-12">
          <List {...{ loading, data }} />
        </div>
        <div className="flex gap-4">
          <DisplayBtn setFilter={setFilter} />
        </div>
      </main>
    </>
  );
};

export default App;
