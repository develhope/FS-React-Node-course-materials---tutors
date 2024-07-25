import { fireEvent, render } from '@testing-library/react'
import { MouseClicker } from './1'
import { MouseClicker as MouseClicker2 } from './2'
import { MouseClicker as MouseClicker3 } from './3'
import { MouseClicker as MouseClicker4 } from './4'
import { MultiButton } from './5'

describe('8.1', () => {
	it('logs the name of the button when the button is clicked', () => {
		console.log = jest.fn()
		const result = render(<MouseClicker />)

		fireEvent.click(result.getByText('Click me'))

		expect(console.log).toHaveBeenCalledWith('one')
	})
})

describe('8.2', () => {
	it('logs the name of the button when the image is clicked', () => {
		console.log = jest.fn()
		const result = render(<MouseClicker2 />)

		fireEvent.click(result.getByAltText('image'))

		expect(console.log).toHaveBeenCalledWith('one')
	})
})

describe('8.3', () => {
	it('logs both the src of the image and the name of the button when the image is clicked ', () => {
		console.log = jest.fn()
		const result = render(<MouseClicker3 />)

		fireEvent.click(result.getByAltText('image'))

		expect(console.log).toHaveBeenCalledTimes(2)
	})
})

describe('8.4', () => {
	it('logs the src of the image when the image is clicked ', () => {
		const result = render(<MouseClicker4 />)

		console.log = jest.fn()
		fireEvent.click(result.getByAltText('image'))
		expect(console.log).toHaveBeenCalledTimes(1)

		console.log = jest.fn() // we create a new mock to reset the counter
		fireEvent.click(result.getByText('Click me'))
		expect(console.log).toHaveBeenCalledTimes(1)
	})
})

describe('8.5', () => {
	it('implements the MultiButton component', () => {
		const result = render(<MultiButton />)

		console.log = jest.fn()

		fireEvent.click(result.getByText('One'))

		expect(console.log).toHaveBeenCalledWith('one')

		fireEvent.click(result.getByText('Two'))

		expect(console.log).toHaveBeenCalledWith('two')

		fireEvent.click(result.getByText('Three'))

		expect(console.log).toHaveBeenCalledWith('three')
	})
})
