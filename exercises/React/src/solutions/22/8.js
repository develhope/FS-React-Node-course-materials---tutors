import { createSlice } from '@reduxjs/toolkit'
import { applyMiddleware, combineReducers, createStore } from 'redux'

export const loggingMiddleware = (store) => (next) => (action) => {
	console.log('dispatching', action)
	const result = next(action)

	return result
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
	applyMiddleware(loggingMiddleware),
)
