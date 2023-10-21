
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import Colors from "./Colors";



function App() {
	return (
			<div className="container black">
				<header className="header">
					<Colors/>
					<h1 className="header__title">To do list</h1>
				</header>
					<AddTask/>
					<TaskList/>
			</div>
	);
}

export default App;
