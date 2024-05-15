function Login() {
	//username password form,

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(event.target, "this is event");
	};
	return (
		<>
			<form action="/login" onSubmit={handleSubmit}>
				<input type="text" name="name" placeholder="username" />
				<input type="password" name="password" placeholder="password" />
				<input
					type="password"
					name="confirm-password"
					placeholder="confirm password"
				/>
				<button type="Submit">Submit</button>
			</form>
		</>
	);
}

export default Login;
