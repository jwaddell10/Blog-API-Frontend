import PropTypes from 'prop-types'

function DisplayComment({ comments }) {

	return (
		<>
			{comments ? (
				comments.map((comment, index) => (
					<div key={index}>
						<h3>{comment.user.name}</h3>
						<h3>{comment.text}</h3>
					</div>
				))
			) : (
				<>
					<div>no comments</div>
				</>
			)}
		</>
	);
}

DisplayComment.propTypes = {
	comments: PropTypes.array,
}

export default DisplayComment;