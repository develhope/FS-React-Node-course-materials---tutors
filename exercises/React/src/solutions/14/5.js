import { useState } from 'react'
import classes from './TodoList.module.css'

export function TodoList() {
	const [todos, setTodos] = useState([])

	function handleAddTodo(event) {
		event.preventDefault()

		const todo = event.target.elements.todo.value

		setTodos((todos) => [...todos, todo])

		event.target.elements.todo.value = ''
	}

	function handleResetTodos() {
		setTodos([])
	}

	function handleRemoveTodo(todo) {
		setTodos((todos) => todos.filter((t) => t !== todo))
	}

	return (
		<div>
			<form onSubmit={handleAddTodo}>
				<input data-testid="todo-input" name="todo" />
				<button type="submit">Add</button>
			</form>
			<button onClick={handleResetTodos}>Reset</button>

			<ul data-testid="todo-list">
				{todos.map((todo, index) => (
					<li className={classes.todo} key={index}>
						{todo} <button onClick={() => handleRemoveTodo(todo)}>x</button>
					</li>
				))}
			</ul>
		</div>
	)
}
