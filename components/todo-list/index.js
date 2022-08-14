import React from "react";
import Todo from "../todo";
import { useQuery } from "@apollo/client";
import { ALL_TODOS } from "../../apollo/todos";

export default function Index() {
  const { loading, error, data } = useQuery(ALL_TODOS);

  if (loading) {
    return <h2>Loading...!</h2>;
  }
  if (error) {
    return <h2>Error...</h2>;
  }

  const todos = data.todos;

  return (
    <div className="mt-5">
      {todos.map((post) => (
        <Todo key={post.title} {...post}/>
      ))}
    </div>
  );
}