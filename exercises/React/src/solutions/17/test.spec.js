import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { GithubUser } from './1'
import { GithubUserList } from './2'

describe('17.1', () => {
	it('renders the user', async () => {
		render(<GithubUser username="johndoe" />)

		expect(screen.getByText('Loading...')).toBeInTheDocument()

		await waitFor(() => new Promise((resolve) => setTimeout(resolve, 500)), { timeout: 2000 })

		expect(screen.getByText('John Doe')).toBeInTheDocument()
	})
})

describe('17.2', () => {
	it('renders multiple users in a list', async () => {
		render(<GithubUserList />)

		expect(screen.getByTestId('users')).toBeEmptyDOMElement()

		fireEvent.change(screen.getByTestId('input'), {
			target: { value: 'johndoe' },
		})
		fireEvent.click(screen.getByText('Add'))

		await waitFor(() => new Promise((resolve) => setTimeout(resolve, 500)), { timeout: 2000 })

		expect(screen.getByTestId('users')).not.toBeEmptyDOMElement()
		expect(screen.getByTestId('users')).toHaveTextContent('John Doe')
	})
})
