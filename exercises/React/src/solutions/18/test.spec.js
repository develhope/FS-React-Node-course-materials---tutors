import { renderHook, act, waitFor } from '@testing-library/react'
import { useCounter } from './1'
import { useForm } from './2'
import { useGithubUser } from './3'
import { useGithubUser as useGithubUser4 } from './3'
import { useCurrentLocation } from './4'

describe('18.1', () => {
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

describe('18.2', () => {
	it('handles a form correctly', () => {
		const { result } = renderHook(() => useForm({ username: '', password: '' }))

		act(() => {
			result.current[1]({
				target: {
					name: 'username',
					value: 'johndoe',
				},
			})

			result.current[1]({
				target: {
					name: 'password',
					value: '123456',
				},
			})
		})

		expect(result.current[0]).toEqual({
			username: 'johndoe',
			password: '123456',
		})
	})
})

describe('18.3', () => {
	it('fetches the user', async () => {
		const { result } = renderHook(() => useGithubUser('johndoe'))

		await waitFor(() => expect(result.current.user).not.toBeNull())

		expect(result.current.user).toEqual({
			name: 'John Doe',
			login: 'johndoe',
			id: 1,
		})
	})
})

describe('18.4', () => {
	it('fetches the user when the function is called', async () => {
		const { result } = renderHook(() => useGithubUser4('johndoe'))

		expect(result.current.user).toBeNull()

		act(() => {
			result.current.onGetUser()
		})

		await waitFor(() => expect(result.current.user).not.toBeNull())

		expect(result.current.user).toEqual({
			name: 'John Doe',
			login: 'johndoe',
			id: 1,
		})
	})
})

describe('18.5', () => {
	beforeAll(() => {
		global.navigator.geolocation = {
			getCurrentPosition: (success, error) => {
				success({
					coords: {
						latitude: 1,
						longitude: 2,
					},
				})
			},
		}
	})

	it('gets the current location', async () => {
		const { result } = renderHook(() => useCurrentLocation())

		expect(result.current.currentLocation).toBeNull()

		act(() => {
			result.current.onGetCurrentLocation()
		})

		await waitFor(() => !result.current.loading)

		expect(result.current.currentLocation).toEqual({
			latitude: 1,
			longitude: 2,
		})
	})
})
