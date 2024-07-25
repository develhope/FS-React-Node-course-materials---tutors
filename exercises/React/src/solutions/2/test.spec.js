import { render, screen } from '@testing-library/react'
import { Hello } from './2'
import { Hello as Hello6 } from './6'
import { Hello as Hello7 } from './7'
import { App } from './3'
import { App as App8 } from './8'
import { App as App9 } from './9'

describe('2.2', () => {
	it('renders the Hello, World! message', () => {
		const result = render(<Hello />)

		expect(result.container).toHaveTextContent('Hello, World!')
	})
})

describe('2.3', () => {
	it('renders the Hello component within a div tag', () => {
		const result = render(<App />)

		expect(result.container.firstChild).toHaveTextContent('Hello, World!')
		expect(result.container.querySelector('div')).not.toBeNull()
	})
})

describe('2.6', () => {
	it('renders the p tag within the Hello component', () => {
		const result = render(<Hello6 />)

		expect(result.container.firstChild).toHaveTextContent('Hello, World!')
		expect(result.container.querySelector('p')).not.toBeNull()
		expect(result.container.querySelector('p')).toHaveTextContent('What a beautiful day!')
	})
})

describe('2.7', () => {
	it('renders the Message component within the Hello component', () => {
		const result = render(<Hello7 />)

		expect(result.container.firstChild).toHaveTextContent('Hello, World!')
		expect(result.container.querySelector('p')).not.toBeNull()
		expect(result.container.querySelector('p')).toHaveTextContent('What a beautiful day!')
	})
})

describe('2.8', () => {
	it('renders the Message component within the Hello component', () => {
		const result = render(<App8 />)

		expect(result.container).toHaveTextContent('Hello, World!Hello, World!')
	})
})

describe('2.9', () => {
	it('renders the Message component within the Hello component', () => {
		const result = render(<App9 />)

		expect(result.container).toHaveTextContent('Hello, World!What a beautiful day!')
	})
})
