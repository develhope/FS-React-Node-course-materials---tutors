import { fireEvent, render, screen } from '@testing-library/react'
import { FocusableInput } from './1'
import { MyComponent } from './2'
import { StrictMode } from 'react'
import { Counter } from './3'

describe('11.1', () => {
	it('focuses the input as soon as the component is mounted', () => {
		const result = render(<FocusableInput />)

		expect(result.getByTestId('one')).toHaveFocus()
	})
})

describe('11.2', () => {
	it('calls console.log only once when in strict mode', () => {
		console.log = jest.fn()
		render(
			<StrictMode>
				<MyComponent />
			</StrictMode>,
		)

		expect(console.log).toHaveBeenCalledTimes(1)
	})
})

describe('11.3', () => {
	it('prints when going above or below the initial value of the counter', () => {
		render(<Counter initialValue={0} incrementBy={1} />)

		console.log = jest.fn()
		fireEvent.click(screen.getByText('Increment'))

		expect(console.log).toHaveBeenCalledWith('Going up!')

		console.log = jest.fn()
		fireEvent.click(screen.getByText('Decrement'))
		fireEvent.click(screen.getByText('Decrement'))

		expect(console.log).toHaveBeenCalledWith('Going down!')
	})
})
