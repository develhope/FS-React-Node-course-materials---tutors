import { render, screen } from '@testing-library/react'
import { Container } from './1'
import { Container as Container2 } from './2'

describe('15.1', () => {
	it('the Container renders its children', () => {
		const result = render(
			<Container>
				<span>Hello</span>
			</Container>,
		)

		expect(result.container).toHaveTextContent('Hello')
	})
})

describe('15.2', () => {
	it('the Container renders its children and a title', () => {
		const result = render(
			<Container2 title="Container!">
				<span>Hello</span>
			</Container2>,
		)

		expect(result.container.querySelector('h1')).not.toBeEmptyDOMElement()
		expect(screen.getByTestId('children')).not.toBeEmptyDOMElement()
	})
})
