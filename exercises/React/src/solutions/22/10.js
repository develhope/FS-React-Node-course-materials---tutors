import { createSlice } from '@reduxjs/toolkit'
import { combineReducers, createStore } from 'redux'

export const usersState = createSlice({
	name: 'users',
	initialState: [],
	reducers: {
		add: (state, action) => [...state, action.payload],
		remove: (state, action) => state.filter((user) => user.id !== action.payload),
	},
})

export const store = createStore(combineReducers({ users: usersState.reducer }))
