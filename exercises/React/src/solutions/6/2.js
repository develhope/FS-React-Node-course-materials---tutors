import { useState } from 'react'

export function Counter({ initialValue = 0, incrementBy = 1 }) {
	const [counter, setCounter] = useState(initialValue)

	function handleIncrement() {
		setCounter((c) => c + incrementBy)
	}

	function handleDecrement() {
		setCounter((c) => c - incrementBy)
	}

	function handleReset() {
		setCounter(initialValue)
	}

	return (
		<div>
			<CounterDisplay count={counter} />
			<button onClick={handleIncrement}>Increment</button>
			<button onClick={handleDecrement}>Decrement</button>
			<button onClick={handleReset}>Reset</button>
		</div>
	)
}

export function CounterDisplay({ count }) {
	return <h2>{count}</h2>
}
