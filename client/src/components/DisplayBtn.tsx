import { SetFilterMutationFn } from 'generated/graphql';
import { VFC } from 'react';

type DisplayBtnProps = {
  setFilter: SetFilterMutationFn;
};

const DisplayBtn: VFC<DisplayBtnProps> = ({ setFilter }) => (
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
