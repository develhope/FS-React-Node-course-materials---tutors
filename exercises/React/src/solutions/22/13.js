import { useDispatch, useSelector } from 'react-redux'
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

export function ReduxGithubUsers() {
	const users = useSelector((state) => state.users)
	const dispatch = useDispatch()

	function handleFormSubmit(event) {
		event.preventDefault()
		const username = event.target.elements.username.value

		dispatch(fetchUser(username))
	}

	return (
		<div>
			<form onSubmit={handleFormSubmit}>
				<input type="text" name="username" data-testid="input" />
				<button type="submit">Add</button>
			</form>

			<ul data-testid="users">
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	)
}
