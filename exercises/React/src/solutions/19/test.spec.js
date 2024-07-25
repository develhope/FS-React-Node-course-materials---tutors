import { render, screen, renderHook, act } from '@testing-library/react'
import { useCounter } from './1'
import { FilteredList } from './2'

describe('19.1', () => {
	it('initializes correctly when called with an initial value', () => {
		const { result } = renderHook(() => useCounter(42))

		expect(result.current.counter).toBe(42)
	})

	it('increments the counter when the onIncrement function is called', () => {
		const { result } = renderHook(() => useCounter(0))

		act(() => {
			result.current.onIncrement()
		})

		expect(result.current.counter).toBe(1)
	})
})

describe('19.2', () => {
	it('renders only the items with an age greater than 18', () => {
		render(
			<FilteredList
				items={[
					{ name: 'John Doe', age: 16, id: 1 },
					{ name: 'Jane Doe', age: 21, id: 2 },
					{ name: 'Joe Doe', age: 20, id: 3 },
				]}
			/>,
		)

		const list = screen.getByTestId('list')

		expect(list.querySelectorAll('li')).toHaveLength(2)
	})
})
