import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function Blog() {
	const posts = GetAllPosts(); // Assuming this function retrieves your blog posts
	const blogPosts = Object.values(posts);
	console.log(blogPosts, "this is blogposts");
	// const blogItems = blogPosts.map(post => <li>{post}</li>);
	const blogItems = blogPosts.map((post) => <li key={uuidv4()}>{post}</li>);

	return (
		<div>
			<ul>{blogItems}</ul>
		</div>
	);
}

function GetAllPosts() {
	const [blogPosts, setBlogPosts] = useState(null);
	useEffect(() => {
		async function getPosts() {
			try {
				const response = await fetch("http://localhost:3000/post");
				const posts = await response.json();
				setBlogPosts(posts);
			} catch (err) {
				console.log(err, "this is err");
			}
		}
		getPosts();
	}, []);
	return { blogPosts };
}

export default Blog;
