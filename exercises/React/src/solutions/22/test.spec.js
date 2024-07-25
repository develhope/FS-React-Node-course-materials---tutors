import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'

import { counterReducer, decrementCounter, incrementCounter, resetCounter } from './1'
import { store as store10, usersState } from './10'
import { fetchUser } from './11'
import { ReduxCounter, store as store12 } from './12'
import { ReduxGithubUsers, store as store13 } from './13'
import { ReduxGithubUsers as ReduxGithubUsers14, store as store14 } from './14'
import { incrementCounter as incrementCounter2, store } from './2'
import { addTodo, editTodo, removeTodo, todosReducer } from './3'
import { addTodo as addTodo4, incrementCounter as incrementCounter4, store as store4 } from './4'
import { counterState, store as store6 } from './6'
import { store as store7, todosState } from './7'
import { counterState as counterState8, store as store8 } from './8'
import { counterState as counterState9, delayAction, store as store9 } from './9'

describe('22.1', () => {
	it('manages the state of a counter', () => {
		const counter = counterReducer(11, incrementCounter(2))

		expect(counter).toBe(13)

		const counter2 = counterReducer(counter, decrementCounter(3))

		expect(counter2).toBe(10)

		const counter3 = counterReducer(counter2, resetCounter())

		expect(counter).toBe(13)
		expect(counter2).toBe(10)
		expect(counter3).toBe(0)
	})
})

describe('22.2', () => {
	it('creates a store that uses counterReducer and dispatches actions correctly', () => {
		store.dispatch(incrementCounter2(10))

		const state = store.getState()

		expect(state).toBe(10)
	})
})

describe('22.3', () => {
	it('manages the state of a todo list', () => {
		const todos = todosReducer([], addTodo({ id: 1, title: 'Buy milk', completed: false }))
		expect(todos).toHaveLength(1)

		const todos2 = todosReducer(todos, addTodo({ id: 2, title: 'Buy eggs', completed: false }))
		expect(todos2).toHaveLength(2)

		const todos3 = todosReducer(todos2, editTodo(1, { completed: true }))
		expect(todos3).toHaveLength(2)
		expect(todos3[0].completed).toBe(true)

		const todos4 = todosReducer(todos3, removeTodo(1))
		expect(todos4).toHaveLength(1)
		expect(todos4[0].id).toBe(2)
	})
})

describe('22.4', () => {
	it('creates a store that uses both counterReducer and todosReducer', () => {
		store4.dispatch(incrementCounter4(10))
		store4.dispatch(addTodo4({ id: 1, title: 'Buy milk', completed: false }))

		const state = store4.getState()

		expect(state.counter).toBe(10)
		expect(state.todos).toHaveLength(1)
		expect(state.todos[0].id).toBe(1)
	})
})

describe('22.5', () => {
	it('allows to subscribe to the store', () => {
		const fn = jest.fn()
		store4.subscribe(fn)

		store4.dispatch(incrementCounter4(10))
		store4.dispatch(incrementCounter4(20))
		store4.dispatch(addTodo4({ id: 4, title: 'Buy milk', completed: false }))

		expect(fn).toHaveBeenCalledTimes(3)
	})
})

describe('22.6', () => {
	it('uses redux toolkit to create the counter state', () => {
		const counter = counterState.reducer(11, counterState.actions.increment(2))

		expect(counter).toBe(13)

		store6.dispatch(counterState.actions.decrement(3))
		const state = store6.getState()
		expect(state.counter).toBe(-3)
	})
})

describe('22.7', () => {
	it('uses redux toolkit to create the todos state', () => {
		const todos = todosState.reducer([], todosState.actions.add({ id: 1, title: 'Buy milk', completed: false }))
		expect(todos).toHaveLength(1)

		store7.dispatch(todosState.actions.add({ id: 2, title: 'Buy eggs', completed: false }))
		const state = store7.getState()
		expect(state.todos).toHaveLength(1)
	})
})

describe('22.8', () => {
	let _log = console.log
	beforeAll(() => {
		global.console.log = jest.fn()
	})
	afterAll(() => {
		global.console.log = _log
	})

	it('logs every action with the logging middleware', () => {
		store8.dispatch(counterState8.actions.increment(10))
		store8.dispatch(counterState8.actions.decrement(10))
		store8.dispatch(counterState8.actions.reset())

		expect(console.log).toHaveBeenCalledTimes(3)
	})
})

describe('22.9', () => {
	it('delays actions using the delay middleware', async () => {
		store9.dispatch(counterState9.actions.increment(10))
		store9.dispatch(delayAction(counterState9.actions.decrement(1), 200))

		expect(store9.getState().counter).toBe(10)
		await waitFor(() => new Promise((resolve) => setTimeout(resolve, 300)))

		expect(store9.getState().counter).toBe(9)
	})
})

describe('22.10', () => {
	it('handles the users state', () => {
		store10.dispatch(usersState.actions.add({ id: 1, name: 'John' }))

		const state = store10.getState()
		expect(state.users).toHaveLength(1)
		expect(state.users[0].name).toBe('John')
	})
})

describe('22.11', () => {
	it('fetches the user and dispatches an action', async () => {
		const thunk = fetchUser('johndoe')
		const fakeDispatch = jest.fn()

		await thunk(fakeDispatch)

		expect(fakeDispatch).toHaveBeenCalledTimes(1)
		expect(fakeDispatch).toHaveBeenCalledWith(expect.objectContaining({ type: 'users/add' }))
	})
})

describe('22.12', () => {
	it('connects to the redux store and dispatches actions to the counter', () => {
		render(
			<Provider store={store12}>
				<ReduxCounter />
			</Provider>,
		)

		fireEvent.click(screen.getByText('Increment'))
		expect(screen.getByTestId('counter')).toHaveTextContent('1')

		fireEvent.click(screen.getByText('Increment'))
		expect(screen.getByTestId('counter')).toHaveTextContent('2')

		fireEvent.click(screen.getByText('Decrement'))
		expect(screen.getByTestId('counter')).toHaveTextContent('1')

		fireEvent.click(screen.getByText('Reset'))
		expect(screen.getByTestId('counter')).toHaveTextContent('0')
	})
})

describe('22.13', () => {
	it('uses a thunk within a component to fetch users', async () => {
		render(
			<Provider store={store13}>
				<ReduxGithubUsers />
			</Provider>,
		)

		expect(screen.getByTestId('users')).toBeEmptyDOMElement()

		fireEvent.change(screen.getByTestId('input'), { target: { value: 'johndoe' } })
		fireEvent.click(screen.getByText('Add'))

		await waitFor(() => new Promise((resolve) => setTimeout(resolve, 300)))

		expect(screen.getByTestId('users').querySelectorAll('li')).toHaveLength(1)
	})
})

describe('22.14', () => {
	it('handles loading and error states', async () => {
		render(
			<Provider store={store14}>
				<ReduxGithubUsers14 />
			</Provider>,
		)

		fireEvent.change(screen.getByTestId('input'), { target: { value: 'johndoe' } })
		fireEvent.click(screen.getByText('Add'))

		expect(screen.queryByTestId('users')).not.toBeInTheDocument()
		expect(screen.queryByTestId('loading')).toBeInTheDocument()

		await waitFor(() => new Promise((resolve) => setTimeout(resolve, 300)))

		expect(screen.getByTestId('users').querySelectorAll('li')).toHaveLength(1)
	})
})
