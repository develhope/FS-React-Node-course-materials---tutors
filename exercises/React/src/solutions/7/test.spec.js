import { fireEvent, render } from '@testing-library/react'
import { Counter } from './1'

describe('7.1', () => {
	it('calls a function every time the counter increments', async () => {
		const fn = jest.fn()
		const result = render(<Counter onIncrement={fn} />)

		expect(result.container).toHaveTextContent('0')

		fireEvent.click(result.getByText('Increment'))

		expect(result.container).toHaveTextContent('1')

		// Once on mount, once on increment!
		expect(fn).toHaveBeenCalledTimes(2)
	})
})
