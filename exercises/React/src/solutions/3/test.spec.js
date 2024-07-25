import { render } from '@testing-library/react'
import { Welcome } from './1'
import { Welcome as Welcome2 } from './2'
import { Welcome as Welcome3 } from './3'
import { Welcome as Welcome4 } from './4'
import { Welcome as Welcome5 } from './5'

describe('3.1', () => {
	it('renders the welcome component with a name', () => {
		const result = render(<Welcome name="Jimmy" />)

		expect(result.container).toHaveTextContent('Hello, Jimmy!')
	})
})

describe('3.2', () => {
	it('renders the welcome component without a name', () => {
		const result = render(<Welcome2 />)

		expect(result.container).toHaveTextContent('Hello, World!')
	})
})

describe('3.3', () => {
	it('renders the welcome component with a name and an age', () => {
		const result = render(<Welcome3 name="Jimmy" age={37} />)

		expect(result.container).toHaveTextContent('Hello, Jimmy!Your age is 37')
	})
})

describe('3.4', () => {
	it('renders the welcome component with a name as a JSX expression', () => {
		const result = render(<Welcome4 name={<strong>Jimmy</strong>} age={37} />)

		expect(result.container).toHaveTextContent('Hello, Jimmy!Your age is 37')
		expect(result.container.querySelector('strong')).not.toBeNull()
	})
})

describe('3.5', () => {
	it('renders the welcome component with a name and an age', () => {
		const result = render(<Welcome5 name="Jimmy" age={37} />)

		expect(result.container).toHaveTextContent('Hello, Jimmy!Your age is 37')
	})
})
