import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

import TaskItem from './TaskItem';
import sortTasksByCompleted from "../utils/sortTasks";

const TaskList = () => {

	const tasks = useSelector(state => state.tasks);

	const sortedTasks = sortTasksByCompleted(tasks)

	return (

		<ul className="list">
			{sortedTasks.map((task, index) => (
				<li key={uuidv4 + index}>
						<TaskItem task={task} />
				</li>
			))}
		</ul>
	);
};

export default TaskList;
