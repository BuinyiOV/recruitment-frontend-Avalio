const deleteTask = (tasks, deletedTaskIndex) => tasks.filter((task, index) => index !== deletedTaskIndex)

export default deleteTask;