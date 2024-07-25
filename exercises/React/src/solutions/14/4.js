import { useEffect, useState } from 'react'
import './index.scss'

export function Clock() {
	const [date, setDate] = useState(new Date())

	useEffect(() => {
		const timer = setInterval(() => {
			setDate(new Date())
		}, 1000)

		return () => clearInterval(timer)
	}, [])

	return (
		<p className="clock">
			Current time: <span>{date.toLocaleTimeString()}</span>
		</p>
	)
}
