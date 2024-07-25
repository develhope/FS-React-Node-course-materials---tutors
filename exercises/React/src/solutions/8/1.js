export function MouseClicker() {
	function handleButtonClick(event) {
		console.log(event.target.name)
	}

	return (
		<div>
			<button name="one" onClick={handleButtonClick}>
				Click me
			</button>
		</div>
	)
}
