export function MouseClicker() {
	function handleButtonClick(event) {
		console.log(event.currentTarget.name)
	}

	function handleImageClick(event) {
		event.stopPropagation()

		console.log(event.currentTarget.src)
	}

	return (
		<div>
			<button name="one" onClick={handleButtonClick}>
				<img alt="image" src="" height={24} width={24} onClick={handleImageClick} />
				Click me
			</button>
		</div>
	)
}
