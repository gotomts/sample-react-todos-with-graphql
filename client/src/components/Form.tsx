import { SyntheticEvent, useState, VFC } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Form: VFC<{ addTodo: any }> = ({ addTodo }) => {
  const [text, setText] = useState('');
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    addTodo({
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
