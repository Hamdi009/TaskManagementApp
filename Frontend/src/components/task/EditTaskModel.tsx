import { useState } from "react"
import type { Task } from "../../types/Task"

interface EditTaskModalProps {
    task: Task
    onClose: () => void
    onSave: (task: Task) => void
}

function EditTaskModal({
    task,
    onClose,
    onSave
}: EditTaskModalProps) {

    const [title, setTitle] = useState(task.title)
    const [description, setDescription] = useState(task.description)
    const [error, setError] = useState("")

    const handleSubmit = (
        e: React.FormEvent
    ) => {

        e.preventDefault()

        if (!title.trim()) {

            setError("Title is required")

            return
        }

        onSave({
            ...task,
            title,
            description
        })

        onClose()
    }

    return (

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">

            <div className="bg-white rounded-xl p-6 w-full max-w-md">

                <h2 className="text-2xl font-bold mb-4">
                    Edit Task
                </h2>

                {
                    error && (
                        <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">
                            {error}
                        </div>
                    )
                }

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg p-3 mb-4"
                    />

                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg p-3 mb-4"
                    />

                    <div className="flex gap-3 justify-end">

                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-300 px-4 py-2 rounded-lg"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                        >
                            Save
                        </button>

                    </div>

                </form>

            </div>

        </div>
    )
}

export default EditTaskModal