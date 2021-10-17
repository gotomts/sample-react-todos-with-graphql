import { AddTodoMutationFn } from 'generated/graphql';
import { SyntheticEvent, useState, VFC } from 'react';

type FormProps = {
  addTodo: AddTodoMutationFn;
};

const Form: VFC<FormProps> = ({ addTodo }) => {
  const [text, setText] = useState('');
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    void addTodo({
      variables: { text },
    });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="px-2 border border-gray-400 rounded"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="px-2 ml-4 border border-gray-400 rounded"
      >
        ADD
      </button>
    </form>
  );
};

export default Form;
