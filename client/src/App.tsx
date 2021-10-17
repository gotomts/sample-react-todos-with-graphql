/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { FC } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_TODOS, ALL_TODOS, SET_FILTER } from 'graphql/query';
import List from 'components/List';
import Form from 'components/Form';
import DisplayBtn from 'components/DisplayBtn';

const App: FC = () => {
  const { loading, data } = useQuery(ALL_TODOS);
  const [addTodo] = useMutation(ADD_TODOS, {
    refetchQueries: [{ query: ALL_TODOS }],
  });
  const [setFilter] = useMutation(SET_FILTER, {
    refetchQueries: [{ query: ALL_TODOS }],
  });

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
