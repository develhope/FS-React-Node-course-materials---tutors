import { createSlice } from '@reduxjs/toolkit'
import { applyMiddleware, combineReducers, createStore } from 'redux'

export const loggingMiddleware = (store) => (next) => (action) => {
	console.log('dispatching', action)
	const result = next(action)

	return result
}

export const delayMiddleware = (store) => (next) => (action) => {
	if (!action.delay) {
		return next(action)
	}

	setTimeout(() => {
		next(action)
	}, action.delay)
}

export function delayAction(action, delay) {
	action.delay = delay

	return action
}

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
	applyMiddleware(loggingMiddleware, delayMiddleware),
)
