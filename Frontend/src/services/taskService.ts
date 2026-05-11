import axios from "axios";
import type { Task } from "../types/Task";

// base url
const API_URL = "http://localhost:8080/api/tasks";

// get all tasks 
export const getTasks = async (): Promise<Task[]> => {
    const response = await axios.get<Task[]>(API_URL);
    return response.data;
}

// create a new task

export const createTask = async (task: Omit<Task, "id">): Promise<Task> => {
    const response = await axios.post<Task>(API_URL, task);
    return response.data;
}

export const updateTask = async (id: number, task: Omit<Task, "id">): Promise<Task> => {
    const response = await axios.put<Task>(`${API_URL}/${id}`, task);
    return response.data;
}

export const deleteTask = async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
}
