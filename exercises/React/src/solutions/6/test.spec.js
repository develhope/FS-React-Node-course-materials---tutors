import { fireEvent, render, waitFor } from '@testing-library/react'
import { Counter } from './1'
import { Counter as Counter3 } from './3'
import { Counter as Counter4 } from './4'
import { Counter as Counter5 } from './5'

const promiseTimeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

describe('6.1', () => {
	it('renders the counter and increments it every time the button is clicked', async () => {
		const result = render(<Counter />)

		expect(result.container).toHaveTextContent('0')

		fireEvent.click(result.getByText('Increment'))

		expect(result.container).toHaveTextContent('1')
	})
})

describe('6.3', () => {
	it('renders the counter and increments it by 2 every time the button is clicked', async () => {
		const result = render(<Counter3 initialValue={5} incrementBy={2} timeout={500} />)

		expect(result.container).toHaveTextContent('5')

		fireEvent.click(result.getByText('Increment'))

		expect(result.container).toHaveTextContent('7')
	})
})

describe('6.4', () => {
	it('renders the counter and increments it every 500ms', async () => {
		const result = render(<Counter4 initialValue={5} incrementBy={2} timeout={500} />)

		expect(result.container).toHaveTextContent('5')

		fireEvent.click(result.getByText('Increment'))

		expect(result.container).toHaveTextContent('7')
	})
})

describe('6.5', () => {
	it('increments, decrements and resets the counter', async () => {
		const result = render(<Counter5 initialValue={5} incrementBy={10} timeout={100} />)

		expect(result.container).toHaveTextContent('5')

		fireEvent.click(result.getByText('Increment'))

		expect(result.container).toHaveTextContent('15')

		fireEvent.click(result.getByText('Decrement'))

		expect(result.container).toHaveTextContent('5')

		fireEvent.click(result.getByText('Increment'))

		expect(result.container).toHaveTextContent('15')

		fireEvent.click(result.getByText('Reset'))

		expect(result.container).toHaveTextContent('5')
	})
})
