import { renderHook, waitFor, act } from '@testing-library/react'
import { SWRConfig } from 'swr'
import { useGithubUser } from './1'
import { useGithubUser as useGithubUser2 } from './2'
import { useGithubUser as useGithubUser3 } from './3'
import { useGithubUser as useGithubUser4 } from './4'

describe('21.1', () => {
	it('fetches the user', async () => {
		const { result } = renderHook(() => useGithubUser('johndoe'))

		await waitFor(() => expect(result.current.user).not.toBeUndefined())

		expect(result.current.user).toEqual({
			name: 'John Doe',
			login: 'johndoe',
			id: 1,
		})
	})
})

describe('21.2', () => {
	it('fetches nothing when no username is passed', async () => {
		const { result } = renderHook(() => useGithubUser2())

		await waitFor(() => new Promise((resolve) => setTimeout(resolve, 500)))

		expect(result.current.user).not.toBeDefined()
	})
})

describe('21.3', () => {
	it('can manually refetch data', async () => {
		const { result } = renderHook(() => useGithubUser3('johndoe'))

		act(() => {
			result.current.onRefresh()
		})

		expect(result.current.loading).toBe(true)

		await waitFor(() => new Promise((resolve) => setTimeout(resolve, 500)))

		expect(result.current.user).toBeDefined()
	})
})

describe('21.4', () => {
	it('uses globally configured fetcher', async () => {
		const { result } = renderHook(() => useGithubUser4('johndoe'), {
			wrapper: ({ children }) => (
				<SWRConfig value={{ fetcher: (url) => fetch(url).then((res) => res.json()) }}>{children}</SWRConfig>
			),
		})

		act(() => {
			result.current.onRefresh()
		})

		expect(result.current.loading).toBe(true)

		await waitFor(() => new Promise((resolve) => setTimeout(resolve, 500)))

		expect(result.current.user).toBeDefined()
	})
})
