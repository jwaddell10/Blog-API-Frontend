import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import FetchPost from "./FetchPost";
import CreateComment from "./CreateComment.jsx";
import DisplayComment from "./DisplayComment.jsx";

function DisplayPost({ token }) {
	const posts = FetchPost();
	const [singlePost, setSinglePost] = useState();

	const fetchSinglePost = async (id) => {
		//fetch single post
		const response = await fetch(`http://localhost:3000/post/${id}`);
		const post = await response.json();
		setSinglePost(post);
	};

	return (
		<div>
			{!singlePost &&
				posts &&
				posts.map((post) => {
					return (
						<div
							onClick={() => {
								fetchSinglePost(post._id);
							}}
							key={uuidv4()}
						>
							<ul>
								<li>{post.title}</li>
								<li>{post.date}</li>
								<li>{post.user.name}</li>
								<li>{post.text}</li>
							</ul>
						</div>
					);
				})}

			{singlePost && (
				<>
					<ul>
						<li>{singlePost.title}</li>
						<li>{singlePost.date}</li>
						<li>{singlePost.user.name}</li>
						<li>{singlePost.text}</li>
					</ul>
					<DisplayComment />
					{token ? <CreateComment id={singlePost._id}/> : <div>Login to comment</div>}
				</>
			)}
		</div>
	);
}

export default DisplayPost;
