export function Welcome({ name = 'World', age }) {
	return (
		<div>
			<p>Hello, {name}!</p>
			{age > 18 && <Age age={age} />}
			{age && <Age age={age} />}
			{age > 18 && age < 65 && <Age age={age} />}
			{name === 'John' && age > 18 && age < 65 && <Age age={age} />}
		</div>
	);
}

export function Age({ age }) {
	return <p>Your age is {age}</p>;
}
