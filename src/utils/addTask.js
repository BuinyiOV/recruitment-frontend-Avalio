const addTask = (tasks, newTaskText) => ([...tasks, {completed: false, text: newTaskText}])

export default addTask;