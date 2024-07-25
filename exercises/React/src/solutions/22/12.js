import { createSlice } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux'

export const counterState = createSlice({
	name: 'counter',
	initialState: 0,
	reducers: {
		increment: (state, action) => state + action.payload,
		decrement: (state, action) => state - action.payload,
		reset: () => 0,
	},
})

export const store = createStore(
	combineReducers({
		counter: counterState.reducer,
	}),
)

export function ReduxCounter() {
	const counter = useSelector((state) => state.counter)
	const dispatch = useDispatch()

	return (
		<div>
			<h1>Redux Counter</h1>
			<p>
				<button onClick={() => dispatch(counterState.actions.increment(1))}>Increment</button>
				<button onClick={() => dispatch(counterState.actions.decrement(1))}>Decrement</button>
				<button onClick={() => dispatch(counterState.actions.reset())}>Reset</button>
			</p>
			<p>
				<strong data-testid="counter">{counter}</strong>
			</p>
		</div>
	)
}
