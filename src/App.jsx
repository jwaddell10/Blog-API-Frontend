import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import HomePage from "./components/HomePage.jsx";
import Blog from "./components/Blog.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";

function App() {

	return (
		<Router>
			<NavBar />
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/post" element={<Blog />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/signup" element={<Signup />}></Route>
			</Routes>
		</Router>
	);
}

// return (
//   <Router>
//     <NavBar />
//     <Routes>
//       <Route path="/" element={<HomePage />} />
//       <Route
//         path="/shopping"
//         element={<Shopping addToCart={addToCart} />}
//       />
//       <Route
//         path="/cart"
//         element={
//           <Cart cart={cart} removeFromCart={removeFromCart} />
//         }
//       />
//     </Routes>
//   </Router>
// );

export default App;
