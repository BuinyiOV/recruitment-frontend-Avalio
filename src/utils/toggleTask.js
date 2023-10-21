const toggleTask = (taskIndex, tasks) => {
	const updatedTasks = [...tasks];
	const taskToToggle = updatedTasks[taskIndex];
	taskToToggle.completed = !taskToToggle.completed;

	return updatedTasks
}

export default toggleTask;