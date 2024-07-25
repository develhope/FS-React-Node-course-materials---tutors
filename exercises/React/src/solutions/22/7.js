import { createSlice } from '@reduxjs/toolkit'
import { createStore, combineReducers } from 'redux'

export const counterState = createSlice({
	name: 'counter',
	initialState: 0,
	reducers: {
		increment: (state, action) => state + action.payload,
		decrement: (state, action) => state - action.payload,
		reset: () => 0,
	},
})

export const todosState = createSlice({
	name: 'todos',
	initialState: [],
	reducers: {
		add: (state, action) => [...state, action.payload],
		remove: (state, action) => state.filter((todo) => todo.id !== action.payload),
		edit: (state, action) =>
			state.map((todo) => {
				if (todo.id === action.payload.id) {
					return { ...todo, ...action.payload.data }
				}
				return todo
			}),
	},
})

export const store = createStore(
	combineReducers({
		counter: counterState.reducer,
		todos: todosState.reducer,
	}),
)
