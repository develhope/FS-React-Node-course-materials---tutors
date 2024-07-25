import { useMemo } from 'react'

export function FilteredList({ items }) {
	const filteredItems = useMemo(() => {
		return items.filter((i) => i.age > 18)
	}, [items])

	return (
		<ul data-testid="list">
			{filteredItems.map((i) => (
				<li key={i.id}>{i.name}</li>
			))}
		</ul>
	)
}
