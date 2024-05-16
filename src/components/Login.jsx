function Login() {
	//username password form,

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const formDataObject = {};
		for (let [key, value] of formData.entries()) {
			formDataObject[key] = value;
		}

		fetch("http://localhost:3000/login", {
			method: "POST",

		})
	};
	return (
		<>
			<form action="/login" onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					placeholder="username"
					autoComplete="username"
				/>
				<input
					type="password"
					name="password"
					placeholder="password"
					autoComplete="password"
				/>
				<input
					type="password"
					name="passwordConfirmation"
					placeholder="confirm password"
					autoComplete="passwordConfirmation"
				/>
				<button type="Submit">Submit</button>
			</form>
		</>
	);
}

export default Login;
