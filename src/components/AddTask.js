
import { useState } from 'react';
import { useDispatch } from "react-redux";

import {addTask} from '../actions';
import { AddSvg } from './Svg';

const AddTask = () => {

	const [newTaskText, setNewTaskText] = useState('');
	const dispatch = useDispatch();


	const handleInputChange = (e) => {
		setNewTaskText(e.target.value);
	};

	const handleAddClick = () => {
		if (newTaskText.trim() !== '') {
			dispatch(addTask(newTaskText))
			setNewTaskText('');
		}
	};

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			handleAddClick()
		}
	};


		return (
			<div className="add-new-task">
				<input className="add-new-task__input"
					type="text"
					placeholder="Add new task..."
					value={newTaskText}
					onChange={handleInputChange}
					onKeyDown={handleKeyPress}/>
				<button className="add-new-task__btn"
					onClick={handleAddClick}>
						<AddSvg/>
				</button>
			</div>
		);
}


export default AddTask;
