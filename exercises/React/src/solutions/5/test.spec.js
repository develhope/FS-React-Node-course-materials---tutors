import { fireEvent, render } from '@testing-library/react'
import { AlertClock } from './1'

describe('5.1', () => {
	it('shows an alert with the current time when the button is clicked', () => {
		const result = render(<AlertClock />)

		window.alert = jest.fn()

		fireEvent.click(result.getByText('Show time'))

		expect(window.alert).toHaveBeenCalledWith(expect.any(String))
	})
})
