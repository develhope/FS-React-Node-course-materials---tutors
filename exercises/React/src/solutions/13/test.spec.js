import { fireEvent, render, screen } from '@testing-library/react'
import { TodoList } from './1'
import { TodoList as TodoList2 } from './2'
import { TodoList as TodoList3 } from './3'
import { TodoList as TodoList4 } from './4'

describe('13.1', () => {
	it('renders the TodoList component, allowing to add todos through the form', () => {
		render(<TodoList />)

		const todolist = screen.getByTestId('todo-list')
		expect(todolist).toBeEmptyDOMElement()

		fireEvent.change(screen.getByTestId('todo-input'), { target: { value: 'buy milk' } })
		fireEvent.click(screen.getByText('Add'))

		expect(todolist).toHaveTextContent('buy milk')

		fireEvent.change(screen.getByTestId('todo-input'), { target: { value: 'buy eggs' } })
		fireEvent.click(screen.getByText('Add'))

		expect(todolist).toHaveTextContent('buy milkbuy eggs')
	})
})

describe('13.2', () => {
	it('clears the input every time a todo is added', () => {
		render(<TodoList2 />)

		fireEvent.change(screen.getByTestId('todo-input'), { target: { value: 'buy milk' } })
		fireEvent.click(screen.getByText('Add'))

		expect(screen.getByTestId('todo-input')).toHaveValue('')
	})
})

describe('13.3', () => {
	it('clears the todo list when the reset button is clicked', () => {
		render(<TodoList3 />)

		const todolist = screen.getByTestId('todo-list')

		fireEvent.change(screen.getByTestId('todo-input'), { target: { value: 'buy milk' } })
		fireEvent.click(screen.getByText('Add'))

		expect(todolist).toHaveTextContent('buy milk')

		fireEvent.click(screen.getByText('Reset'))

		expect(todolist).toBeEmptyDOMElement()
	})
})

describe('13.4', () => {
	it('removes a todo when the remove button is clicked', () => {
		render(<TodoList4 />)

		const todolist = screen.getByTestId('todo-list')

		fireEvent.change(screen.getByTestId('todo-input'), { target: { value: 'buy milk' } })
		fireEvent.click(screen.getByText('Add'))

		fireEvent.change(screen.getByTestId('todo-input'), { target: { value: 'buy eggs' } })
		fireEvent.click(screen.getByText('Add'))

		expect(todolist.querySelectorAll('li').length).toBe(2)

		const firstItem = screen.getByText('buy milk')
		const removeItem = firstItem.querySelector('button')

		fireEvent.click(removeItem)

		expect(todolist.querySelectorAll('li').length).toBe(1)
	})
})
