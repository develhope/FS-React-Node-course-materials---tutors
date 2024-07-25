import { useState } from 'react'

export function Login({ onLogin }) {
	const [data, setData] = useState({
		username: '',
		password: '',
		remember: false,
	})

	const handleInputChange = (event) => {
		const name = event.target.name
		const value = event.target.value
		const type = event.target.type
		const checked = event.target.checked

		setData((prevState) => ({
			...prevState,
			[name]: type === 'checkbox' ? checked : value,
		}))
	}

	function handleLogin() {
		console.log(data)

		onLogin(data)
	}

	return (
		<div>
			<input data-testid="username" name="username" value={data.username} onChange={handleInputChange} />
			<input data-testid="password" name="password" value={data.password} onChange={handleInputChange} />
			<input
				data-testid="remember"
				name="remember"
				type="checkbox"
				checked={data.remember}
				onChange={handleInputChange}
			/>

			<button disabled={!data.username || !data.password} onClick={handleLogin} data-testid="login">
				Login
			</button>

			<div data-testid="state">
				<pre>{JSON.stringify(data, null, 2)}</pre>
			</div>
		</div>
	)
}
