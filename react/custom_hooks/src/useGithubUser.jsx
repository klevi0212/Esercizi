import { useEffect, useState } from "react"

export default function useGithubUser(username) {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	async function fetchGithubUser() {
		setLoading(true)
		setError(null)
		try {
			const response = await fetch(`https://api.github.com/users/klevi0212`)
			const data = await response.json()
			setData(data)
		} catch (error) {
			setError(error)
			setData(null)
		} finally {
			setLoading(false)
		}
	}
	useEffect(() => {
		fetchGithubUser(username)
	}, [username])
	return { data, error, loading }
}
