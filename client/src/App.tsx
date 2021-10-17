/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { FC } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import List from 'components/List';
import Form from 'components/Form';
import DisplayBtn from 'components/DisplayBtn';
import {
  AllTodosDocument,
  AddTodoDocument,
  SetFilterDocument,
} from 'generated/graphql';

const App: FC = () => {
  const { loading, data } = useQuery(AllTodosDocument);
  const [addTodo] = useMutation(AddTodoDocument, {
    refetchQueries: [{ query: AllTodosDocument }],
  });
  const [setFilter] = useMutation(SetFilterDocument, {
    refetchQueries: [{ query: AllTodosDocument }],
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
