import { Link } from "react-router-dom";

//navbar, homepage title, home, login, signup,

function NavBar() {
	return (
		<>
			<nav className="navbar">
				<h1>BlogAPI</h1>
				<ul>
					<Link to="/">
						<li>Home</li>
					</Link>
					<Link to="/post">
						<li>All Blogs</li>
					</Link>
					<Link to="/about">
						<li>About</li>
					</Link>
				</ul>
			</nav>
		</>
	);
}

export default NavBar;