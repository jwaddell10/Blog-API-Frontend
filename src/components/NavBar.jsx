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
					<Link to="/login">
						<li>Login</li>
					</Link>
					<Link to="/signup">
						<li>Signup</li>
					</Link>
				</ul>
			</nav>
		</>
	);
}

// return (
// 	<nav className="navbar" name="navbar">
// 		<StyledNavBar>
// 			<h3 style={headingStyle}>Electronics Store</h3>
// 			<ul>
// 				<StyledList>
// 					<li>
// 						<Link style={linkStyle} to="/">
// 							Home
// 						</Link>
// 					</li>
// 					<li>
// 						<Link style={linkStyle} to="/shopping">
// 							Shopping
// 						</Link>
// 					</li>
// 					<li>
// 						<Link style={linkStyle} to="/cart">
// 							Cart
// 						</Link>
// 					</li>
// 				</StyledList>
// 			</ul>
// 		</StyledNavBar>
// 	</nav>
// );

export default NavBar;
