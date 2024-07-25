export function Colors({ items }) {
	return (
		<ul>
			{items.map((item) => (
				<Color color={item} key={item.id} />
			))}
		</ul>
	)
}

export function Color({ color }) {
	return <li key={color.id}>{color.name}</li>
}
