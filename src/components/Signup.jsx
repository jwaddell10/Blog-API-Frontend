import { useOptimistic, useState, useRef } from "react";
//add optimistic message to make more responsive maybe?

//username, password, confirm password

function Signup() {
	//form data, setformdata
	//empty
	//typing
	//submitting
	//success/error
	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const formDataObject = {};
		for (let [key, value] of formData.entries()) {
			console.log(key, "this is key", value, "this is value");
			formDataObject[key] = value;
		}

		fetch("http://localhost:3000/signup", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ formDataObject }),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data, "this is data");
			});
	};

	return (
		<>
			<form action="/signup" onSubmit={handleSubmit}>
				<input type="text" name="name" placeholder="username" autoComplete="username"/>

				<input type="password" name="current-password" placeholder="password" autoComplete="current-password"/>

				<input type="password" name="new-password" placeholder="confirm password" autoComplete="new-password"/>

				<button type="submit">Submit</button>
			</form>
		</>
	);
}

{
	/* <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required></input> */
}
export default Signup;
