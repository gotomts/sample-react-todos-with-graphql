import { gql } from '@apollo/client';

export const ALL_TODOS = gql`
  query {
    allTodos {
      id
      text
      completed
    }
  }
`;

export const ADD_TODOS = gql`
  mutation addTodo($text: String!) {
    addTodo(text: $text) {
      id
      text
      completed
    }
  }
`;

export const SET_FILTER = gql`
  mutation setFilter($filter: FILTER!) {
    setFilter(filter: $filter)
  }
`;
