import { useEffect, useRef, useState } from 'react'

export function Counter({ initialValue = 0, incrementBy = 1 }) {
	const [counter, setCounter] = useState(initialValue)
	const directionRef = useRef('none')

	useEffect(() => {
		if (counter > initialValue) {
			if (directionRef.current !== 'up') {
				console.log('Going up!')
			}

			directionRef.current = 'up'
		} else if (counter < initialValue) {
			if (directionRef.current !== 'down') {
				console.log('Going down!')
			}

			directionRef.current = 'down'
		} else {
			directionRef.current = 'none'
		}
		/**
		 * initialValue viene passato qui per gestire il
		 * caso in cui dovesse essere modificato il valore
		 * passato come prop al componente
		 */
	}, [counter, initialValue])

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
