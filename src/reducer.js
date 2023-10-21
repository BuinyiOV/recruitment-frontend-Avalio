import toggleTask from "./utils/toggleTask";
import addTask from "./utils/addTask";
import deleteTask from "./utils/deleteTask";


const initialState = {tasks: []};


const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TASK':

			return {
				tasks: addTask(state.tasks, action.payload)
			};

		case 'TOGGLE_TASK':

			return {
				tasks: toggleTask(action.payload, state.tasks),
			};

		case 'DELETE_TASK':
			
			return {
				tasks: deleteTask(state.tasks, action.payload),
			};

		default:
			return state;

	}
}

export default reducer;