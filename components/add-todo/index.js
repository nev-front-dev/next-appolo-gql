import React, { useState } from "react";

export default function Index() {
  const [todoValue, setTodoValue] = useState("");

  const handlerAddPost = (e) => {
    e.preventDefault();
    setTodoValue(todoValue);
    console.log(todoValue);
    setTodoValue("");
  };

  return (
    <form className="flex flex-col space-y-3 mt-5">
      <input
        type="text"
        placeholder="Add todo"
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
      />
      <input
        type="submit"
        className="flex justify-center bg-lime-500 rounded-sm hover:cursor-pointer"
        value="ADD TODO"
        placeholder="ADD TODO"
        onClick={handlerAddPost}
      />
    </form>
  );
}
