import useGithubUser from "./useGithubUser"

export default function HookGithubUser({ username }) {
	const { data, error, loading } = useGithubUser(username)
	return (
		<>
			{loading && <h2>Loading...</h2>}
			{error && <h2>Error</h2>}
			{data && <h2>{data.name}</h2>}
			<img
				src={data.avatar_url}
				style={{ width: "80px", height: "80px", borderRadius: "50%" }}
			/>
		</>
	)
}
