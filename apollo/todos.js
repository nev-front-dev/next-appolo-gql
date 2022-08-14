import { gql } from "@apollo/client";

export const ALL_TODOS = gql`
  query ALL_TODOS {
    todos: allTodos {
      title
      complited
    }
  }
`;
