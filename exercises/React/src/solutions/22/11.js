import { createSlice } from '@reduxjs/toolkit'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

export const usersState = createSlice({
	name: 'users',
	initialState: [],
	reducers: {
		add: (state, action) => [...state, action.payload],
		remove: (state, action) => state.filter((user) => user.id !== action.payload),
	},
})

export function fetchUser(username) {
	return async function (dispatch) {
		const response = await fetch(`https://api.github.com/users/${username}`)
		const user = await response.json()

		dispatch(usersState.actions.add(user))
	}
}

export const store = createStore(combineReducers({ users: usersState.reducer }), applyMiddleware(thunk))
