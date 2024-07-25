import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { App } from './1'
import { App as App2 } from './2'
import { App as App3 } from './3'
import { App as App4 } from './4'
import { App as App5 } from './5'
import { App as App6 } from './6'
import { App as App7 } from './7'

describe('20.1', () => {
	it('renders the welcome component', () => {
		const { container } = render(
			<MemoryRouter initialEntries={['/']}>
				<App />
			</MemoryRouter>,
		)

		expect(container).toHaveTextContent('Hello, Jimmy!')
	})
})

describe('20.2', () => {
	it('renders the counter component when navigating to /counter', () => {
		const { container } = render(
			<MemoryRouter initialEntries={['/counter']}>
				<App2 />
			</MemoryRouter>,
		)

		expect(screen.getByTestId('count')).toHaveTextContent('0')
	})
})

describe('20.3', () => {
	it('renders the github user when navigating to /users/:username', async () => {
		const { container } = render(
			<MemoryRouter initialEntries={['/users/johndoe']}>
				<App3 />
			</MemoryRouter>,
		)

		await waitFor(() => new Promise((resolve) => setTimeout(resolve, 500)))

		expect(container).toHaveTextContent('John Doe')
	})
})

describe('20.4', () => {
	it('navigates between all routes by using the links', async () => {
		const { container } = render(
			<MemoryRouter initialEntries={['/']}>
				<App4 />
			</MemoryRouter>,
		)

		expect(container).toHaveTextContent('Hello, Jimmy!')

		const counterLink = screen.getByText('Counter')
		const userLink = screen.getByText('John Doe')

		fireEvent.click(counterLink)

		expect(screen.getByTestId('count')).toHaveTextContent('0')

		fireEvent.click(userLink)

		await waitFor(() => new Promise((resolve) => setTimeout(resolve, 500)))

		expect(container).toHaveTextContent('John Doe')
	})
})

describe('20.5', () => {
	it('shows the not found route when navigating to a non existent link', () => {
		const { container } = render(
			<MemoryRouter initialEntries={['/doesnotexist']}>
				<App5 />
			</MemoryRouter>,
		)

		expect(container).toHaveTextContent('Not Found!')
	})
})

describe('20.6', () => {
	it('shows nested routes', async () => {
		const { container } = render(
			<MemoryRouter initialEntries={['/users']}>
				<App6 />
			</MemoryRouter>,
		)

		const input = screen.getByTestId('input')
		fireEvent.change(input, { target: { value: 'johndoe' } })
		fireEvent.click(screen.getByText('Add'))

		expect(screen.getByTestId('users')).toHaveTextContent('johndoe')

		fireEvent.click(screen.getByText('johndoe'))

		await waitFor(() => new Promise((resolve) => setTimeout(resolve, 500)))

		expect(container).toHaveTextContent('John Doe')
	})
})

describe('20.7', () => {
	it('shows the index route', async () => {
		const { container } = render(
			<MemoryRouter initialEntries={['/users']}>
				<App7 />
			</MemoryRouter>,
		)

		expect(container).toHaveTextContent('Add a user and select it')
	})
})
