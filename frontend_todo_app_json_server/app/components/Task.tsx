"use client";
import { ITask } from "@/types/tasks";
import React, { FormEventHandler } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useState } from "react";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "@/api";

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);

  const router = useRouter();

  const [taskToEdit, setTaskToEdit] = useState(task.text);

  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    await editTodo({
      id: task.id,
      text: taskToEdit,
    });

    setTaskToEdit("");
    setOpenModalEdit(false);
    router.refresh();
  };


  const handleDeleteTask = async(id: string) => {
    await deleteTodo(id)
    setOpenModalDelete(false)
    router.refresh()
  }

  return (
    <tr key={task.id}>
      <td className="w-full">{task.text}</td>
      {/* Edit */}
      <td className="flex flex-row gap-5">
        <FiEdit
          onClick={() => setOpenModalEdit(true)}
          cursor="pointer"
          className="text-blue-500"
          size={20}
        />
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className="font-bold text-lg">Edit task</h3>
            <div className="modal-action">
              <input
                value={taskToEdit}
                onChange={(e) => setTaskToEdit(e.target.value)}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </Modal>
        {/* Delete */}
        <FiTrash2  
        onClick={() => setOpenModalDelete(true)}
        cursor="pointer" className="text-red-500" size={20} />
        <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
          <h3 className="text-lg">Are you sure to delete this task ?    </h3>
          <div className="modal-action">
            <button className="btn -mt-3" onClick={() => handleDeleteTask(task.id)}>
              Yes
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default Task;
