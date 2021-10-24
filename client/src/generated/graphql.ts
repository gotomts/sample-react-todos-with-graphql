import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Filter = 'ACTIVE' | 'ALL' | 'COMPLETED';

export type Mutation = {
  __typename?: 'Mutation';
  addTodo: Todo;
  setFilter: Filter;
  toggleCompleted: Todo;
};

export type MutationAddTodoArgs = {
  text: Scalars['String'];
};

export type MutationSetFilterArgs = {
  filter?: Maybe<Filter>;
};

export type MutationToggleCompletedArgs = {
  id: Scalars['ID'];
};

export type Node = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  allTodos?: Maybe<Array<Todo>>;
  node?: Maybe<Node>;
  nodes: Array<Maybe<Node>>;
};

export type QueryNodeArgs = {
  id: Scalars['ID'];
};

export type QueryNodesArgs = {
  ids: Array<Scalars['ID']>;
};

export type Todo = Node & {
  __typename?: 'Todo';
  completed: Scalars['Boolean'];
  id: Scalars['ID'];
  text: Scalars['String'];
};

export type AddTodoMutationVariables = Exact<{
  text: Scalars['String'];
}>;

export type AddTodoMutation = {
  __typename?: 'Mutation';
  addTodo: {
    __typename?: 'Todo';
    id: string;
    text: string;
    completed: boolean;
  };
};

export type SetFilterMutationVariables = Exact<{
  filter: Filter;
}>;

export type SetFilterMutation = { __typename?: 'Mutation'; setFilter: Filter };

export type ToggleCompletedMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type ToggleCompletedMutation = {
  __typename?: 'Mutation';
  toggleCompleted: {
    __typename?: 'Todo';
    id: string;
    text: string;
    completed: boolean;
  };
};

export type AllTodosQueryVariables = Exact<{ [key: string]: never }>;

export type AllTodosQuery = {
  __typename?: 'Query';
  allTodos?:
    | Array<{
        __typename?: 'Todo';
        id: string;
        text: string;
        completed: boolean;
      }>
    | null
    | undefined;
};

export const AddTodoDocument = gql`
  mutation addTodo($text: String!) {
    addTodo(text: $text) {
      id
      text
      completed
    }
  }
`;
export type AddTodoMutationFn = Apollo.MutationFunction<
  AddTodoMutation,
  AddTodoMutationVariables
>;

/**
 * __useAddTodoMutation__
 *
 * To run a mutation, you first call `useAddTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTodoMutation, { data, loading, error }] = useAddTodoMutation({
 *   variables: {
 *      text: // value for 'text'
 *   },
 * });
 */
export function useAddTodoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddTodoMutation,
    AddTodoMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddTodoMutation, AddTodoMutationVariables>(
    AddTodoDocument,
    options,
  );
}
export type AddTodoMutationHookResult = ReturnType<typeof useAddTodoMutation>;
export type AddTodoMutationResult = Apollo.MutationResult<AddTodoMutation>;
export type AddTodoMutationOptions = Apollo.BaseMutationOptions<
  AddTodoMutation,
  AddTodoMutationVariables
>;
export const SetFilterDocument = gql`
  mutation setFilter($filter: Filter!) {
    setFilter(filter: $filter)
  }
`;
export type SetFilterMutationFn = Apollo.MutationFunction<
  SetFilterMutation,
  SetFilterMutationVariables
>;

/**
 * __useSetFilterMutation__
 *
 * To run a mutation, you first call `useSetFilterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetFilterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setFilterMutation, { data, loading, error }] = useSetFilterMutation({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useSetFilterMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SetFilterMutation,
    SetFilterMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SetFilterMutation, SetFilterMutationVariables>(
    SetFilterDocument,
    options,
  );
}
export type SetFilterMutationHookResult = ReturnType<
  typeof useSetFilterMutation
>;
export type SetFilterMutationResult = Apollo.MutationResult<SetFilterMutation>;
export type SetFilterMutationOptions = Apollo.BaseMutationOptions<
  SetFilterMutation,
  SetFilterMutationVariables
>;
export const ToggleCompletedDocument = gql`
  mutation toggleCompleted($id: ID!) {
    toggleCompleted(id: $id) {
      id
      text
      completed
    }
  }
`;
export type ToggleCompletedMutationFn = Apollo.MutationFunction<
  ToggleCompletedMutation,
  ToggleCompletedMutationVariables
>;

/**
 * __useToggleCompletedMutation__
 *
 * To run a mutation, you first call `useToggleCompletedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleCompletedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleCompletedMutation, { data, loading, error }] = useToggleCompletedMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleCompletedMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ToggleCompletedMutation,
    ToggleCompletedMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ToggleCompletedMutation,
    ToggleCompletedMutationVariables
  >(ToggleCompletedDocument, options);
}
export type ToggleCompletedMutationHookResult = ReturnType<
  typeof useToggleCompletedMutation
>;
export type ToggleCompletedMutationResult =
  Apollo.MutationResult<ToggleCompletedMutation>;
export type ToggleCompletedMutationOptions = Apollo.BaseMutationOptions<
  ToggleCompletedMutation,
  ToggleCompletedMutationVariables
>;
export const AllTodosDocument = gql`
  query allTodos {
    allTodos {
      id
      text
      completed
    }
  }
`;

/**
 * __useAllTodosQuery__
 *
 * To run a query within a React component, call `useAllTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTodosQuery(
  baseOptions?: Apollo.QueryHookOptions<AllTodosQuery, AllTodosQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllTodosQuery, AllTodosQueryVariables>(
    AllTodosDocument,
    options,
  );
}
export function useAllTodosLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllTodosQuery,
    AllTodosQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllTodosQuery, AllTodosQueryVariables>(
    AllTodosDocument,
    options,
  );
}
export type AllTodosQueryHookResult = ReturnType<typeof useAllTodosQuery>;
export type AllTodosLazyQueryHookResult = ReturnType<
  typeof useAllTodosLazyQuery
>;
export type AllTodosQueryResult = Apollo.QueryResult<
  AllTodosQuery,
  AllTodosQueryVariables
>;
