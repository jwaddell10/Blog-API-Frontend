import { LoginContext } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
	const { setIsUserLoggedIn } = useContext(LoginContext);
	const navigate = useNavigate()

	const token = localStorage.getItem("JWT Token");
	if (token) {
		localStorage.removeItem("JWT Token");
        setIsUserLoggedIn(false);
		navigate("/post")
	}
}

export default Logout;