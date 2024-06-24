import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import CreateComment from "./CreateComment.jsx";
import DisplayComment from "./DisplayComment.jsx";
import PropTypes from "prop-types";

function DisplayPost({ blogPosts, token, onStateChange }) {
	const navigate = useNavigate();
	const [singlePost, setSinglePost] = useState();
	const [comments, setComments] = useState();

	const fetchSinglePost = async (id) => {
		const response = await fetch(`http://localhost:3000/post/${id}`);
		const post = await response.json();
		setSinglePost(post);
		navigate(`/post/${post._id}`);

		const commentResponse = await fetch(
			`http://localhost:3000/${id}/comment`
		);
		const comment = await commentResponse.json();
		setComments(comment);
	};

	const updatePostIdInParent = (id) => {
		onStateChange(id);
	};

	return (
		<div>
			{!singlePost &&
				blogPosts &&
				blogPosts.map((post) => {
					return (
						<div
							onClick={() => {
								updatePostIdInParent(post._id);
								fetchSinglePost(post._id);
							}}
							key={uuidv4()}
						>
							<ul style={{ listStyleType: "none" }}>
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
					<ul style={{ listStyleType: "none" }}>
						<li>{singlePost.title}</li>
						<li>{singlePost.date}</li>
						<li>{singlePost.user.name}</li>
						<li>{singlePost.text}</li>
					</ul>
					<DisplayComment
						comments={comments}
						setComments={setComments}
					/>
					{token ? (
						<CreateComment id={singlePost._id} />
					) : (
						<div>Login to comment</div>
					)}
				</>
			)}
		</div>
	);
}

DisplayPost.propTypes = {
	blogPosts: PropTypes.array,
	token: PropTypes.string,
	onStateChange: PropTypes.func,
};

export default DisplayPost;
