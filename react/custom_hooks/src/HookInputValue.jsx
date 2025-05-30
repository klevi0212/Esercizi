import useInputValue from "./useInputValue"

export default function HookInputValue() {
	const { username, password, handleUsername, handlePassword } = useInputValue()
	return (
		<>
			<form>
				<p>{username}</p>
				<p>{password}</p>

				<label>Username</label>
				<input
					type="text"
					value={username}
					placeholder="Your Username Is..."
					onChange={handleUsername}
				/>
				<label>Password</label>
				<input
					type="password"
					value={password}
					placeholder="Your Password Is.."
					onChange={handlePassword}
				/>
			</form>
		</>
	)
}
