export const addTask = (taskText) => ({type: 'ADD_TASK', payload: taskText});
export const toggleTask = (index) => ({type: 'TOGGLE_TASK', payload: index});
export const deleteTask = (index) => ({type: 'DELETE_TASK', payload: index});