export function UncontrolledLogin() {
	function onLogin(event) {
		event.preventDefault()

		const fd = new FormData(event.target)

		console.log({
			username: fd.get('username'),
			password: fd.get('password'),
			remember: fd.get('remember') === 'on',
		})
	}

	return (
		<form onSubmit={onLogin}>
			<input data-testid="username" name="username" />
			<input data-testid="password" name="password" />
			<input data-testid="remember" name="remember" type="checkbox" />

			<button>Login</button>
			<button type="reset">Reset</button>
		</form>
	)
}
