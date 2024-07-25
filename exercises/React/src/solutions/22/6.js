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

export const store = createStore(
	combineReducers({
		counter: counterState.reducer,
	}),
)
