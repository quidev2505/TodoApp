import { getAllTodos } from "@/api";
import AddTask from "./components/AddTask";
import { TodoList } from "./components/TodoList";

export default async function Home() {
  const tasks = await getAllTodos();

  return (
    <main className="max-w-4xl mx-auto mt-4 border border-[2px] rounded-md p-5 mt-32 shadow-xl">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">TODO APP</h1>
        <AddTask/>
      </div>
    
      <TodoList tasks={tasks}/>

    </main>
  );
}
