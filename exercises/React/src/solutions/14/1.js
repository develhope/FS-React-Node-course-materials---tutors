import React from 'react'
import { useState } from 'react'

import './index.css'

export function Welcome({ name = 'World' }) {
	return <p className="welcome">Hello, {name}!</p>
}


export function CounterDisplay({ count }) {
	return <h2 style={{ fontSize: 72, color: 'blue' }}>{count}</h2>
}

export function Login() {
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

	function handleLogin(event) {
		event.preventDefault()

		console.log(data)
	}

	function handleResetForm() {
		setData({
			username: '',
			password: '',
			remember: false,
		})
	}

	return (
		<form onSubmit={handleLogin}>
			<input data-testid="username" name="username" value={data.username} onChange={handleInputChange} />
			<input
				data-testid="password"
				name="password"
				value={data.password}
				onChange={handleInputChange}
				style={{ backgroundColor: data.password.length < 8 ? 'red' : 'green' }}
			/>
			<input
				data-testid="remember"
				name="remember"
				type="checkbox"
				checked={data.remember}
				onChange={handleInputChange}
			/>

			<button disabled={!data.username || !data.password}>Login</button>

			<button type="button" onClick={handleResetForm}>
				Reset
			</button>

			<div data-testid="state">
				<pre>{JSON.stringify(data, null, 2)}</pre>
			</div>
		</form>
	)
}
