import { useState } from "react"
import type { Task } from "../../types/Task"
import EditTaskModal from "./EditTaskModel"


interface TaskItemProps {
    task: Task
    onDelete: (id: number) => void
    onToggle: (task: Task) => void
    onEdit: (task: Task) => void
}

function TaskItem({
    task,
    onDelete,
    onToggle,
    onEdit
}: TaskItemProps) {

    const [isEditing, setIsEditing] = useState(false)

    return (

        <>

            <div className="bg-white p-5 rounded-xl shadow-md flex flex-col gap-4 hover:shadow-lg transition">

                <div className="flex items-start justify-between gap-4">

                    <div>

                        <h3
                            className={`text-xl font-semibold ${task.completed
                                    ? "line-through text-gray-400"
                                    : "text-gray-800"
                                }`}
                        >
                            {task.title}
                        </h3>

                        <p className="text-gray-600 mt-2">
                            {task.description}
                        </p>

                    </div>

                    <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${task.completed
                                ? "bg-green-100 text-green-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                    >
                        {
                            task.completed
                                ? "Completed"
                                : "Pending"
                        }
                    </span>

                </div>

                <div className="flex flex-wrap gap-3">

                    <button
                        onClick={() =>
                            onToggle({
                                ...task,
                                completed: !task.completed
                            })
                        }
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Toggle
                    </button>

                    <button
                        onClick={() => setIsEditing(true)}
                        className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
                    >
                        Edit
                    </button>

                    <button
                        onClick={() => {

                            const confirmed = window.confirm(
                                "Delete this task?"
                            )

                            if (confirmed) {
                                onDelete(task.id)
                            }
                        }}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                    >
                        Delete
                    </button>

                </div>

            </div>

            {
                isEditing && (
                    <EditTaskModal
                        task={task}
                        onClose={() => setIsEditing(false)}
                        onSave={onEdit}
                    />
                )
            }

        </>
    )
}

export default TaskItem