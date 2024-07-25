import { fireEvent, render, screen } from '@testing-library/react'
import { Container } from './1'
import { Container as Container2 } from './1'

describe('16.1', () => {
	it('creates a context', () => {
		render(<Container />)

		expect(screen.getByTestId('language-select')).toHaveValue('en')
	})
})

describe('16.1', () => {
	it('consumes the context', () => {
		render(<Container2 />)

		expect(screen.getByText('Current Time')).toBeInTheDocument()

		fireEvent.change(screen.getByTestId('language-select'), {
			target: { value: 'it' },
		})

		expect(screen.getByText('Ora attuale')).toBeInTheDocument()
	})
})
