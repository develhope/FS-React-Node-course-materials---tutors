export function Welcome({ name = 'World', age }) {
	return (
		<div>
			<p>Hello, {name}!</p>
			<Age age={age} />
		</div>
	);
}

export function Age({ age }) {
	return age > 18 ? <p>Your age is {age}</p> : <p>You are very young</p>;
}
