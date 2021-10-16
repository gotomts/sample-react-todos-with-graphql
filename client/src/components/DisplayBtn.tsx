/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
// import { VFC } from 'react';
// import { TODO_FILTER } from '../types/Todo';

// type Variables = {
//   filter: TODO_FILTER;
// };

// type DisplayBtnProps = {
//   setFilter: (Variables) => ;
// };

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
const DisplayBtn = ({ setFilter }: { setFilter: any }) => (
  <>
    <button
      className="px-2 border rounded"
      type="button"
      onClick={() => setFilter({ variables: { filter: 'ALL' } })}
    >
      SHOW_ALL
    </button>
    <button
      className="px-2 border rounded"
      type="button"
      onClick={() => setFilter({ variables: { filter: 'COMPLETED' } })}
    >
      SHOW_COMPLETED
    </button>
    <button
      className="px-2 border rounded"
      type="button"
      onClick={() => setFilter({ variables: { filter: 'ACTIVE' } })}
    >
      SHOW_ACTIVE
    </button>
  </>
);

export default DisplayBtn;
