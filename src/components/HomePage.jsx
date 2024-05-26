import DisplayPost from "./DisplayPost";
import FetchJWT from "./FetchJWT";


function HomePage() {
	const JWT = FetchJWT();
	console.log(JWT, 'this is jwt in login')
	return (
		<>
			<DisplayPost />
		</>
	);
}

export default HomePage;
