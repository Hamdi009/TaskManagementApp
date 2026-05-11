import { useEffect, useState } from "react";
import type { Task } from "../types/Task";
import { createTask, deleteTask, getTasks, updateTask } from "../services/taskService";


export const useTasks = () => {
    const [tasks, setTasks] = useState<Task[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>("")
        useEffect(() => {
        fetchTasks()
    }, [])

    const fetchTasks = async () => {
        try {
            setLoading(true)
            const data = await getTasks()
            setTasks(data)
        } catch (err) {
            setError("Failed to fetch tasks")
        } finally {
            setLoading(false)
        }
    }

    const addTask = async (task: Omit<Task, "id">) => {
        try {
            const newTask = await createTask(task)
            setTasks(prev => [...prev, newTask])
        } catch (err) {
            setError("Failed to create new task")
        }
    }

    const editTask = async (task: Task) => {
        try {
            const updatedTask = await updateTask(task.id, task)
            setTasks(prev => prev.map(t => t.id === task.id ? updatedTask : t))
        } catch (err) {
            setError("Failed to update task")
        }
    }

    const removeTask = async (id: number) => {
        try {
            await deleteTask(id)
            setTasks(prev => prev.filter(task => task.id !== id))
        } catch (err) {
            setError("Failed to delete task")
        }
    }

    return { tasks, loading, error, addTask, editTask, removeTask }
}
