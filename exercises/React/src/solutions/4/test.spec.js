import { render } from '@testing-library/react'
import { Welcome } from './1'
import { Welcome as Welcome2 } from './2'
import { Welcome as Welcome3 } from './3'
import { Welcome as Welcome4 } from './4'
import { Welcome as Welcome5 } from './5'

describe('4.1', () => {
	it('renders the welcome component with an age only if age is greater than 18', () => {
		const result1 = render(<Welcome name="Jimmy" age={37} />)
		const result2 = render(<Welcome name="Jimmy" age={17} />)

		expect(result1.container).toHaveTextContent('Hello, Jimmy!Your age is 37')
		expect(result2.container).toHaveTextContent('Hello, Jimmy!')
	})
})

describe('4.2', () => {
	it('renders the welcome component with an age only if age is present', () => {
		const result1 = render(<Welcome2 name="Jimmy" age={37} />)
		const result2 = render(<Welcome2 name="Jimmy" />)

		expect(result1.container).toHaveTextContent('Hello, Jimmy!Your age is 37')
		expect(result2.container).toHaveTextContent('Hello, Jimmy!')
	})
})

describe('4.3', () => {
	it('renders the welcome component with an age only if age is present', () => {
		const result1 = render(<Welcome3 name="Jimmy" age={37} />)
		const result2 = render(<Welcome3 name="Jimmy" />)
		const result3 = render(<Welcome3 name="Jimmy" age={68} />)

		expect(result1.container).toHaveTextContent('Hello, Jimmy!Your age is 37')
		expect(result2.container).toHaveTextContent('Hello, Jimmy!')
		expect(result3.container).toHaveTextContent('Hello, Jimmy!')
	})
})

describe('4.4', () => {
	it('renders the welcome component with an age only if age is present', () => {
		const result1 = render(<Welcome4 name="Jimmy" age={37} />)
		const result2 = render(<Welcome4 name="John" />)
		const result3 = render(<Welcome4 name="John" age={68} />)
		const result4 = render(<Welcome4 name="John" age={37} />)

		expect(result1.container).not.toHaveTextContent('Your age is 37')
		expect(result2.container).toHaveTextContent('Hello, John!')
		expect(result3.container).toHaveTextContent('Hello, John!')
		expect(result4.container).toHaveTextContent('Hello, John!Your age is 37')
	})
})

describe('4.5', () => {
	it('renders the welcome component with an age only if age is present', () => {
		const result1 = render(<Welcome5 name="Jimmy" age={37} />)
		const result2 = render(<Welcome5 name="John" age={17} />)

		expect(result1.container).toHaveTextContent('Your age is 37')
		expect(result2.container).toHaveTextContent('You are very young!')
	})
})
