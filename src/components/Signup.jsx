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
		for (let [key, value] of formData.entries()) {
			console.log(`${key}: ${value}`, "this is key, value");
		}

		fetch("http://localhost:3000/signup", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ formData }),
		})
			.then((response) => response.text())
			.then((data) => {
				console.log(data, "this is data");
			});
	};

	//handlechange event
	return (
		<>
			<form action="/signup" onSubmit={handleSubmit}>
				<label>Username:</label>
				<input type="text" name="name" />
				<button type="submit"></button>
			</form>
		</>
	);
}

{
	/* <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required></input> */
}
export default Signup;
