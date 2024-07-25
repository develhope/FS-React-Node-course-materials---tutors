export function Container({ children, title }) {
	const [collapsed, setCollapsed] = useState(false)

	function handleToggleCollapsed() {
		setCollapsed((prevState) => !prevState)
	}

	return (
		<div style={{ background: 'white', border: '1px solid red' }}>
			<h1 onClick={handleToggleCollapsed}>{title}</h1>
			{!collapsed && <div data-testid="children">{children}</div>}
		</div>
	)
}
