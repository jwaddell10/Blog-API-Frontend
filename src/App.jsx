import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, createContext } from "react";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import HomePage from "./components/HomePage.jsx";
import DisplayPost from "./components/DisplayPost.jsx";
import About from "./components/About.jsx";
import Login from "./components/Login.jsx";
import Logout from "./components/Logout.jsx";
import Signup from "./components/Signup.jsx";

export const LoginContext = createContext(null);

function App() {
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

	const token = localStorage.getItem("JWT Token");

	return (
		<LoginContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn }}>
			<Router>
				<NavBar />
				<Routes>
					<Route path="/" element={<HomePage />}></Route>
					<Route path="/post" element={<DisplayPost />}></Route>
					<Route path="/about" element={<About />}></Route>
					{token && (
						<Route path="/logout" element={<Logout />}></Route>
					)}
					<Route path="/login" element={<Login />}></Route>
					<Route path="/signup" element={<Signup />}></Route>
				</Routes>
			</Router>
		</LoginContext.Provider>
	);
}

export default App;
