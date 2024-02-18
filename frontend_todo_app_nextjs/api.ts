import { ITask } from "./types/tasks";
import axios from "axios";
const baseURL = 'http://localhost:8000';

export const getAllTodos = async (): Promise<ITask[]> => {
    const res = await axios.get(`${baseURL}/task`);
    return res.data;
}

export const addTodo = async (data: string): Promise<void> => {
    const res = await axios.post(`${baseURL}/task`, {
        text: data
    })

    console.log(res)
}

export const editTodo = async (todo: ITask): Promise<ITask> => {
    const res = await axios.put(`${baseURL}/task/${todo.id}`, {
        text: todo.text
    })
    
    return res.data;
}

export const deleteTodo = async (id: string): Promise<void> => {
    await axios.delete(`${baseURL}/task/${id}`)
}