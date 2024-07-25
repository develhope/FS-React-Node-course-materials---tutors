export function App() {
	function handleShowTime() {
		alert(new Date().toLocaleTimeString())
	}

	return (
		<div>
			<AlertClock onShowTime={handleShowTime} />
		</div>
	)
}

export function AlertClock({ onShowTime }) {
	return <button onClick={onShowTime}></button>
}
