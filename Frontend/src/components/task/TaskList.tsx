import type { Task } from "../../types/Task"
import TaskItem from "./TaskItem"

interface TaskListProps {
    tasks: Task[]
    onDelete: (id: number) => void
    onToggle: (task: Task) => void
    onEdit: (task: Task) => void
}

function TaskList({
    tasks,
    onDelete,
    onToggle,
    onEdit
}: TaskListProps) {

    if (tasks.length === 0) {

        return (
            <div className="text-center text-gray-500 mt-10">
                No tasks available
            </div>
        )
    }

    return (

        <div className="grid gap-4">

            {
                tasks.map(task => (

                    <TaskItem
                        key={task.id}
                        task={task}
                        onDelete={onDelete}
                        onToggle={onToggle}
                        onEdit={onEdit}
                    />
                ))
            }

        </div>
    )
}

export default TaskList