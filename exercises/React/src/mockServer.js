import { rest } from 'msw'
import { setupServer } from 'msw/node'

const handlers = [
	rest.get(`https://api.github.com/users/:username`, (req, res, ctx) => {
		return res(
			ctx.json({
				id: 1,
				name: 'John Doe',
				login: 'johndoe',
			}),
		)
	}),
]

export const mockServer = setupServer(...handlers)
