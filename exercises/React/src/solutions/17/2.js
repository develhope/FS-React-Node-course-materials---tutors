import { useEffect, useState } from 'react';

export function GithubUsers() {
	const [users, setUsers] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState(null);

	useEffect(() => {
		setLoading(true);
		fetch(`https://api.github.com/users`)
			.then((res) => res.json())
			.then((json) => setUsers(json))
			.catch((error) => setError(error))
			.finally(() => setLoading(false));
	}, []);

	return (
		<div>
			{users.length && (
				<ul data-testid='users'>
					{users.map((user) => (
						<li key={user.id}>
							<button onClick={() => setUser(user)}>{user.login}</button>
						</li>
					))}
				</ul>
			)}
			{error && <div>{error.message}</div>}
			{loading && <div>Loading...</div>}

			{user && <GithubUser user={user} />}
		</div>
	);
}

export function GithubUser({ user }) {
	return (
		<div>
			<img src={user.avatar_url} />
			<div>{user.login}</div>
			<div>{user.name}</div>
		</div>
	);
}
