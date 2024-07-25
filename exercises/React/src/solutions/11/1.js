import { useEffect, useRef } from 'react'

export function FocusableInput() {
	const inputRef = useRef()

	useEffect(() => {
		inputRef.current?.focus()
	}, [])

	return (
		<div>
			<input data-testid="one" name="one" ref={inputRef} />
		</div>
	)
}
