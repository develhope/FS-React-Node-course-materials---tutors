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

const loadingState = createSlice({
	name: 'loading',
	initialState: 0,
	reducers: {
		start: (state, action) => state + 1,
		end: (state, action) => state - 1,
	},
})

const errorsState = createSlice({
	name: 'errors',
	initialState: [],
	reducers: {
		add: (state, action) => [...state, action.payload],
		clear: (state, action) => [],
	},
})

export function fetchUser(username) {
	return async function (dispatch) {
		try {
			dispatch(loadingState.actions.start())
			const response = await fetch(`https://api.github.com/users/${username}`)
			const user = await response.json()

			dispatch(usersState.actions.add(user))
		} catch (error) {
			dispatch(errorsState.actions.add(error))
		} finally {
			dispatch(loadingState.actions.end())
		}
	}
}

export const store = createStore(
	combineReducers({
		users: usersState.reducer,
		ui: combineReducers({ loading: loadingState.reducer, errors: errorsState.reducer }),
	}),
	applyMiddleware(thunk),
)

export function ReduxGithubUsers() {
	console.log(store.getState())

	const users = useSelector((state) => state.users)
	const loading = useSelector((state) => state.ui.loading)
	const errors = useSelector((state) => state.ui.errors)
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

			{loading && <div data-testid="loading">Loading...</div>}

			{!loading && (
				<ul data-testid="users">
					{users.map((user) => (
						<li key={user.id}>{user.name}</li>
					))}
				</ul>
			)}
		</div>
	)
}
