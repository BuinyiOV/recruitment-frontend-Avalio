import { useSelector, useDispatch } from 'react-redux';

import { toggleTask, deleteTask } from '../actions';
import { DoneSvg, DeleteSvg } from './Svg';

const TaskItem = ({ task }) => {
	const dispatch = useDispatch();
	const tasks = useSelector(state => state.tasks);

	const handleToggle = () => {
		dispatch(toggleTask(tasks.indexOf(task)));
	};

	const handleDelete = () => {
		dispatch(deleteTask(tasks.indexOf(task)));
	};

	return (
		<div className={`list__item ${task.completed ? 'done' : ''}`}>
			<span className='list__item-text'>{task.text}</span>
			{task.completed ? null :
				<button className="list__item-btn-done"
							onClick={handleToggle}>
								<DoneSvg/>
				</button>}
			<button className="list__item-btn-delete"
				onClick={handleDelete}>
					<DeleteSvg/>
			</button>
		</div>
	);
};

export default TaskItem;
