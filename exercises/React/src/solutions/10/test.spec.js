import { fireEvent, render, screen } from '@testing-library/react'
import { UncontrolledLogin } from './1'
import { UncontrolledLogin as UncontrolledLogin3 } from './3'
import { UncontrolledLogin as UncontrolledLogin4 } from './4'

describe('10.1', () => {
	it('renders the uncontrolled form and calls the onSubmit handler', () => {
		const onSubmit = jest.fn()
		render(<UncontrolledLogin onSubmit={onSubmit} />)

		fireEvent.click(screen.getByText('Login'))

		expect(onSubmit).toHaveBeenCalled()
	})
})

describe('10.3', () => {
	it('renders the uncontrolled form and calls the onSubmit handler with the data of the form', () => {
		console.log = jest.fn()
		render(<UncontrolledLogin3 />)

		fireEvent.change(screen.getByTestId('username'), { target: { value: 'johndoe' } })
		fireEvent.change(screen.getByTestId('password'), { target: { value: 'password' } })
		fireEvent.change(screen.getByTestId('remember'), { target: { checked: true } })

		fireEvent.click(screen.getByText('Login'))

		expect(console.log).toHaveBeenCalledWith({
			username: 'johndoe',
			password: 'password',
			remember: true,
		})
	})
})

describe('10.4', () => {
	it('renders the uncontrolled form and calls the onSubmit handler with the data of the form', () => {
		console.log = jest.fn()
		render(<UncontrolledLogin4 />)

		fireEvent.change(screen.getByTestId('username'), { target: { value: 'johndoe' } })
		fireEvent.change(screen.getByTestId('password'), { target: { value: 'password' } })
		fireEvent.change(screen.getByTestId('remember'), { target: { checked: true } })

		fireEvent.click(screen.getByText('Login'))

		expect(console.log).toHaveBeenCalledWith({
			username: 'johndoe',
			password: 'password',
			remember: true,
		})
	})
})
