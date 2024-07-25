import { render, fireEvent, screen } from '@testing-library/react'
import { InteractiveWelcome } from './1'
import { Login } from './2'
import { Login as Login3 } from './3'
import { Login as Login4 } from './4'
import { Login as Login5 } from './5'

describe('9.1', () => {
	it('renders the name typed in the input within the welcome component', async () => {
		const result = render(<InteractiveWelcome />)

		expect(result.container).toHaveTextContent('Hello, !')
		fireEvent.change(screen.getByTestId('input'), { target: { value: 'John' } })
		expect(result.container).toHaveTextContent('Hello, John!')
	})
})

describe('9.2', () => {
	it('tracks the input values within the state of the Login component', async () => {
		render(<Login />)

		expect(screen.getByTestId('state')).toHaveTextContent('{ "username": "", "password": "", "remember": false }')

		fireEvent.change(screen.getByTestId('username'), { target: { value: 'john' } })
		fireEvent.change(screen.getByTestId('password'), { target: { value: 'hello123' } })
		fireEvent.click(screen.getByTestId('remember'))

		expect(screen.getByTestId('state')).toHaveTextContent(
			'{ "username": "john", "password": "hello123", "remember": true }',
		)
	})
})

describe('9.3', () => {
	it('calls the login function when the login button is clicked', async () => {
		const fn = jest.fn()
		render(<Login3 onLogin={fn} />)

		expect(screen.getByTestId('state')).toHaveTextContent('{ "username": "", "password": "", "remember": false }')
		expect(screen.getByTestId('login')).toBeDisabled()

		fireEvent.change(screen.getByTestId('username'), { target: { value: 'john' } })
		fireEvent.change(screen.getByTestId('password'), { target: { value: 'hello123' } })
		fireEvent.click(screen.getByTestId('remember'))

		expect(screen.getByTestId('state')).toHaveTextContent(
			'{ "username": "john", "password": "hello123", "remember": true }',
		)
		expect(screen.getByTestId('login')).toBeEnabled()

		fireEvent.click(screen.getByTestId('login'))

		expect(fn).toHaveBeenCalledWith(
			expect.objectContaining({
				username: 'john',
				password: 'hello123',
				remember: true,
			}),
		)
	})
})

describe('9.4', () => {
	it('resets the form when the reset button is clicked', async () => {
		const fn = jest.fn()
		render(<Login4 onLogin={fn} />)

		expect(screen.getByTestId('state')).toHaveTextContent('{ "username": "", "password": "", "remember": false }')

		fireEvent.change(screen.getByTestId('username'), { target: { value: 'john' } })
		fireEvent.change(screen.getByTestId('password'), { target: { value: 'hello123' } })
		fireEvent.click(screen.getByTestId('remember'))

		expect(screen.getByTestId('state')).toHaveTextContent(
			'{ "username": "john", "password": "hello123", "remember": true }',
		)

		fireEvent.click(screen.getByTestId('reset'))

		expect(screen.getByTestId('state')).toHaveTextContent('{ "username": "", "password": "", "remember": false }')
	})
})

describe('9.5', () => {
	it('use form element to wrap the form', async () => {
		const fn = jest.fn()
		render(<Login5 onLogin={fn} />)

		expect(screen.getByTestId('state')).toHaveTextContent('{ "username": "", "password": "", "remember": false }')

		fireEvent.change(screen.getByTestId('username'), { target: { value: 'john' } })
		fireEvent.change(screen.getByTestId('password'), { target: { value: 'hello123' } })
		fireEvent.click(screen.getByTestId('remember'))

		expect(screen.getByTestId('state')).toHaveTextContent(
			'{ "username": "john", "password": "hello123", "remember": true }',
		)

		fireEvent.click(screen.getByTestId('login'))

		expect(fn).toHaveBeenCalledWith(
			expect.objectContaining({
				username: 'john',
				password: 'hello123',
				remember: true,
			}),
		)
	})
})
