import { useState } from 'react'

export function Counter({ initialValue = 0, incrementBy = 1 }) {
	const [counter, setCounter] = useState(initialValue)

	function handleIncrement() {
		setCounter((c) => c + incrementBy)
	}

	return (
		<div>
			<h2>Counter: {counter}</h2>
			<button onClick={handleIncrement}>Increment</button>
		</div>
	)
}


// An **immediate value** when the next state does NOT depend on the previous state.
// A **function** when the next state depends on the previous state.