import { useState } from "react"

interface TaskFormProps {
    onAddTask: (
        task: {
            title: string
            description: string
            completed: boolean
        }
    ) => void
}

function TaskForm({ onAddTask }: TaskFormProps) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (
        e: React.FormEvent
    ) => {

        e.preventDefault()

        if (!title.trim()) {

            setError("Title is required")

            return
        }

        if (title.trim().length < 3) {

            setError(
                "Title must contain at least 3 characters"
            )

            return
        }

        setError("")

        onAddTask({
            title,
            description,
            completed: false
        })

        setTitle("")
        setDescription("")
    }

    return (

        <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow-md mb-6"
        >

            <h2 className="text-2xl font-semibold mb-4">
                Create Task
            </h2>

            {
                error && (

                    <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">
                        {error}
                    </div>
                )
            }

            <input
                type="text"
                placeholder="Task title"
                value={title}
                onChange={(e) => {

                    setTitle(e.target.value)

                    if (error) {
                        setError("")
                    }
                }}
                className="w-full border border-gray-300 rounded-lg p-3 mb-4"
            />

            <textarea
                placeholder="Task description"
                value={description}
                onChange={(e) =>
                    setDescription(e.target.value)
                }
                className="w-full border border-gray-300 rounded-lg p-3 mb-4"
            />

            <button
                type="submit"
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
                Add Task
            </button>

        </form>
    )
}

export default TaskForm