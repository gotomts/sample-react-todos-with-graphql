import { useApolloClient } from '@apollo/client';
import { VFC } from 'react';
import {
  AllTodosQuery,
  AllTodosDocument,
  ToggleCompletedDocument,
} from 'generated/graphql';

type ListProps = {
  loading: boolean;
  data?: AllTodosQuery;
};

const List: VFC<ListProps> = ({ loading, data }) => {
  const client = useApolloClient();

  if (loading) {
    return <div className="font-bold text-lg">Loading...</div>;
  }

  const toggleCompleted = (id: string) => {
    void client.mutate({
      mutation: ToggleCompletedDocument,
      variables: { id },
      refetchQueries: [{ query: AllTodosDocument }],
    });
  };

  return (
    <ul>
      {data?.allTodos?.map(({ id, text, completed }) => (
        <li
          key={id}
          style={{ textDecoration: completed ? 'line-through' : 'none' }}
        >
          {text}
          <button
            type="button"
            className="px-2 ml-4 border border-gray-400 rounded"
            onClick={() => toggleCompleted(id)}
          >
            DONE
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
