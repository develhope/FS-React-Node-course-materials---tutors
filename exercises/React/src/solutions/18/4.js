import { useState } from 'react'

export function useCurrentLocation() {
	const [currentLocation, setCurrentLocation] = useState(null)
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)

	function handleGetCurrentLocation() {
		if (!navigator.geolocation) {
			setError(new Error('NOT_SUPPORTED'))
			return
		}

		setLoading(true)
		navigator.geolocation.getCurrentPosition(
			(position) => {
				setCurrentLocation({
					latitude: position.coords.latitude,
					longitude: position.coords.longitude,
				})

				setError(null)
				setLoading(false)
			},
			(error) => {
				setError(error)
				setCurrentLocation(null)
				setLoading(false)
			},
		)
	}

	return {
		currentLocation,
		error,
		loading,
		onGetCurrentLocation: handleGetCurrentLocation,
	}
}
