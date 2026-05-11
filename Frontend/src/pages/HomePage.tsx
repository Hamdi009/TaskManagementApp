import TaskForm from "../components/task/TaskForm"
import TaskList from "../components/task/TaskList"
import { useTasks } from "../hooks/useTasks"

function HomePage() {

    const {
        tasks,
        loading,
        error,
        addTask,
        editTask,
        removeTask
    } = useTasks()

    if (loading) {

        return (
            <div className="min-h-screen flex items-center justify-center text-2xl font-semibold">
                Loading tasks...
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
                    Task Manager Application
                </h1>
                {
                    error && (
                        <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6">
                            {error}
                        </div>
                    )
                }

                <TaskForm onAddTask={addTask} />

                <TaskList
                    tasks={tasks}
                    onDelete={removeTask}
                    onToggle={editTask}
                    onEdit={editTask}
                />

            </div>

        </div>
    )
}

export default HomePage