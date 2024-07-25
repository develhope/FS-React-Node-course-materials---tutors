import { useState } from 'react'

export function TodoList() {
	const [todos, setTodos] = useState([])

	function handleAddTodo(event) {
		event.preventDefault()

		const todo = event.target.elements.todo.value

		setTodos((todos) => [...todos, todo])
	}

	return (
		<div>
			<form onSubmit={handleAddTodo}>
				<input data-testid="todo-input" name="todo" />
				<button type="submit">Add</button>
			</form>

			<ul data-testid="todo-list">
				{todos.map((todo, index) => (
					<li key={index}>{todo}</li>
				))}
			</ul>
		</div>
	)
}
