// src/components/ToDoList.tsx
import React, { useState } from "react";

interface Task {
	id: number;
	text: string;
	completed: boolean;
}

const ToDoList: React.FC = () => {
	const [tasks, setTasks] = useState<Task[]>([
		{
			id: 1,
			text: "Create Guest Experience mobile check-in",
			completed: false,
		},
		{ id: 2, text: "Document current CI/CD process", completed: false },
		{
			id: 3,
			text: "Perform Code Review for final Pillow-Talk release",
			completed: false,
		},
		{
			id: 4,
			text: "Implement new Color Palette from Design Team",
			completed: false,
		},
		{
			id: 5,
			text: "Fix image uploading process for guest check-in",
			completed: false,
		},
		{ id: 6, text: "Provide on-boarding documentation", completed: false },
	]);
	const [newTask, setNewTask] = useState<string>("");

	const addTask = () => {
		if (newTask.trim() === "") return;
		setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
		setNewTask("");
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			addTask();
		}
	};

	const toggleTaskCompletion = (taskId: number) => {
		setTasks(
			tasks.map((task) =>
				task.id === taskId ? { ...task, completed: !task.completed } : task
			)
		);
	};

	const deleteTask = (taskId: number) => {
		setTasks(tasks.filter((task) => task.id !== taskId));
	};

	return (
		<div className="w-full h-full min-h-screen bg-gray-800 text-white flex items-center justify-center">
			<div className="max-w-lg w-full p-5 bg-gray-900 rounded shadow-lg">
				<h1 className="text-center text-2xl mb-5">To Do List</h1>
				<ul className="mb-5">
					{tasks.map((task) => (
						<li
							key={task.id}
							className="flex justify-between items-center mb-2"
						>
							<div className="flex items-center">
								<input
									type="checkbox"
									checked={task.completed}
									onChange={() => toggleTaskCompletion(task.id)}
									className="form-checkbox h-5 w-5 text-green-500"
								/>
								<span
									className={`ml-2 ${task.completed ? "line-through" : ""}`}
								>
									{task.text}
								</span>
							</div>
							<button
								onClick={() => deleteTask(task.id)}
								className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
							>
								🗑️
							</button>
						</li>
					))}
				</ul>

                <hr/>

				<div className="flex justify-center items-center mb-5">
					<span>Done: {tasks.filter((task) => task.completed).length}</span>
				</div>
				<div className="flex flex-col">
					<label htmlFor="new-task" className="mb-2 text-lg">
						Add todo :
					</label>
					<input
						id="new-task"
						type="text"
						value={newTask}
						onChange={(e) => setNewTask(e.target.value)}
						onKeyDown={handleKeyDown}
						className="p-2 mb-2 rounded text-black"
						placeholder="Enter task"
					/>
					<button
						onClick={addTask}
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					>
						ADD TASK
					</button>
				</div>
			</div>
		</div>
	);
};

export default ToDoList;
