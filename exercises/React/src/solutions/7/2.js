import { useEffect, useState } from 'react'

export function Clock() {
	const [date, setDate] = useState(new Date())

	useEffect(() => {
		const timer = setInterval(() => {
			setDate(new Date())
		}, 1000)

		return () => clearInterval(timer)
	}, [])

	return <p>Current time: {date.toLocaleTimeString()}</p>
}
