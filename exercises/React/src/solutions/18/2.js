import { useState } from 'react'

export function useForm(initialValue = {}) {
	const [data, setData] = useState(initialValue ?? {})

	function handleInputChange(event) {
		const { name, value, type, checked } = event.target
		setData((data) => {
			return {
				...data,
				[name]: type === 'checkbox' ? checked : value,
			}
		})
	}

	return [data, handleInputChange]
}
