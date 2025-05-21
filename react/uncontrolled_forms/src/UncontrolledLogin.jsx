export default function UncontrolledLogin() {
  function onLogin(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const session = e.target.session.checked;
    const data = { username, password, session };
    console.log(data.username, data.password, data.session);
  }
  function loginWithFormData(e) {
    e.preventDefault();
    console.log(e.target.form);
    const formData = new FormData(e.target.form);
    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      session: formData.get("session") === "on" ? true : false,
    };
    console.log(data.username, data.password, data.session);
  }
  return (
    <>
      <form onSubmit={onLogin}>
        <label>Username</label>
        <input type="text" name="username" />
        <label>Password</label>
        <input type="password" name="password" />
        <label>Remeber me</label>
        <input type="checkbox" name="session" />
        <button>Login</button>
        <button onClick={loginWithFormData}>Login With Form Data</button>
      </form>
    </>
  );
}
