
const sortTasksByCompleted = (tasks) => {
	tasks.sort((a, b) => {
		if (a.completed === b.completed) {
			return 0;
		} else if (a.completed) {
			return 1;
		} else {
			return -1;
		}
	});

	return tasks;
}

export default sortTasksByCompleted;