import { render } from '@testing-library/react'
import { Colors } from './1'
import { Colors as Colors2 } from './2'
import { Colors as Colors3 } from './3'

describe('12.1', () => {
	it('renders a list of colors', () => {
		const result = render(<Colors items={['red', 'green', 'blue']} />)

		expect(result.container).toHaveTextContent('redgreenblue')
	})
})

describe('12.2', () => {
	it('renders a list of colors as object with name and id', () => {
		const result = render(
			<Colors2
				items={[
					{ name: 'red', id: 1 },
					{ name: 'green', id: 2 },
					{ name: 'blue', id: 3 },
				]}
			/>,
		)

		expect(result.container).toHaveTextContent('redgreenblue')
	})
})

describe('12.3', () => {
	it('renders a list of colors as object with name and id using a dedicated component for each color', () => {
		const result = render(
			<Colors3
				items={[
					{ name: 'red', id: 1 },
					{ name: 'green', id: 2 },
					{ name: 'blue', id: 3 },
				]}
			/>,
		)

		expect(result.container).toHaveTextContent('redgreenblue')
	})
})
