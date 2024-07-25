import { render, screen } from '@testing-library/react'
import { hello } from './1'
import { fn as fn2 } from './2'
import { fn as fn3 } from './3'
import { fn as fn4 } from './4'
import { sum } from './5'

describe('1.1', () => {
	it('contains the correct value', () => {
		const result = render(hello)

		expect(result.container.firstChild).toHaveTextContent('Hello, World!')
	})
})

describe('1.2', () => {
	it('contains the correct value', () => {
		const result = render(fn2('World'))

		expect(result.container.firstChild).toHaveTextContent('Hello, World!')
	})
})

describe('1.3', () => {
	it('contains the correct value', () => {
		const result = render(fn3())

		expect(result.container.firstChild).toHaveTextContent('Hello, !')
	})
})

describe('1.4', () => {
	it('contains the correct value', () => {
		const result = render(fn4(<strong data-testid="strong">World</strong>))
		const world = screen.getByTestId('strong')

		expect(result.container.firstChild).toHaveTextContent('Hello, World!')
		expect(world).toHaveTextContent('World')
	})
})

describe('1.5', () => {
	it('returns the sum of the two values within an h2', () => {
		const result = render(sum(1, 2))

		expect(result.container.firstChild).toHaveTextContent('3')
		expect(result.container.querySelector('h2')).not.toBeNull()
	})
})
