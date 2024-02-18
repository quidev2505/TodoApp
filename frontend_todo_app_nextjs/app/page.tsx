import { getAllTodos } from "@/api";
import AddTask from "./components/AddTask";
import { TodoList } from "./components/TodoList";

export default async function Home() {
  const tasks = await getAllTodos();

  return (
    <div className="bg-[#5e93e9] w-full h-screen relative pt-28">
      <main className="max-w-4xl mx-auto  border border-[2px] rounded-md p-5 shadow-xl bg-white">
        <div className="text-center my-5 flex flex-col gap-4">
          <h1 className="text-3xl font-bold">TODO APP</h1>
          <AddTask />
        </div>

        <TodoList tasks={tasks} />
      </main>
    </div>
  );
}
