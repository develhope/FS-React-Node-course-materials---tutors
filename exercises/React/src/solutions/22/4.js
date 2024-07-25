import { combineReducers, createStore } from 'redux'

const ADD = 'TODO@ADD'
const REMOVE = 'TODO@REMOVE'
const EDIT = 'TODO@EDIT'

export function addTodo(todo) {
	return {
		type: ADD,
		payload: todo,
	}
}

export function removeTodo(id) {
	return {
		type: REMOVE,
		payload: id,
	}
}

export function editTodo(id, data) {
	return {
		type: EDIT,
		payload: { id, data },
	}
}

export function todosReducer(state = [], action) {
	switch (action.type) {
		case ADD:
			return [...state, action.payload]
		case REMOVE:
			return state.filter((todo) => todo.id !== action.payload)
		case EDIT:
			return state.map((todo) => {
				if (todo.id === action.payload.id) {
					return { ...todo, ...action.payload.data }
				}
				return todo
			})
		default:
			return state
	}
}

const INCREMENT = 'COUNTER@INCREMENT'
const DECREMENT = 'COUNTER@DECREMENT'
const RESET = 'COUNTER@RESET'

export function incrementCounter(by = 1) {
	return {
		type: INCREMENT,
		payload: by,
	}
}

export function decrementCounter(by = 1) {
	return {
		type: DECREMENT,
		payload: by,
	}
}

export function resetCounter() {
	return {
		type: RESET,
	}
}

export function counterReducer(state = 0, action) {
	switch (action.type) {
		case INCREMENT:
			return state + action.payload
		case DECREMENT:
			return state - action.payload
		case RESET:
			return defaultState
		default:
			return state
	}
}

const rootReducer = combineReducers({
	todos: todosReducer,
	counter: counterReducer,
})

export const store = createStore(rootReducer)
