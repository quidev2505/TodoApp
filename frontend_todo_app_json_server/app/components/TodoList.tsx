import { ITask } from "@/types/tasks";
import React from "react";
import Task from "./Task";

interface TodoListProps {
  tasks: ITask[];
}

export const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th className="w-1/2 font-bold">TASKS</th>
              <th className="font-bold">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {tasks.length > 0 ? (
              tasks && tasks.map((task) => <Task key={task.id} task={task} />)
            ) : (
              <tr>
                <td colSpan={2}>
                  <div role="alert" className="alert alert-error">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current shrink-0 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      color="white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-white">
                      Caution: Todo-work is empty !
                    </span>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};
