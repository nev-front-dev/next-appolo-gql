import Head from "next/head";
import Image from "next/image";
import AddTodo from "../components/add-todo";
import TodoList from "../components/todo-list";

export default function Home() {
  return (
    <>
      <Head>
        <title>NEXT APPOLO GQL APP</title>
        <meta name="description" content="NEXT APPOLO GQL APP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="flex justify-center text-3xl font-semibold">
        NEXT APPOLO GQL APP
      </h1>
      <main className="flex flex-col mx-auto w-1/3">
        <AddTodo />
        <TodoList />
      </main>
    </>
  );
}
