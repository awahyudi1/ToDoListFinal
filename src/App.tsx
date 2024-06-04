// src/App.tsx
import React from "react";
import ToDoList from "./components/ToDoList";

const App: React.FC = () => {
	return (
		<div className="min-h-screen bg-gray-100 flex items-center justify-center">
			<ToDoList />
		</div>
	);
};

export default App;
