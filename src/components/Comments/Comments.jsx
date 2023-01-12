import { useContext } from 'react';
import './comments.scss';
import { AuthContext } from '../../context/authContext';

const Comments = () => {
	const { currentUser } = useContext(AuthContext);
	const comments = [
		{
			id: 1,
			descr: 'Nulla non risus quis tortor fermentum condimentum a ut mauris. Quisque pretium elementum magna, a convallis libero fermentum imperdiet. Vivamus elementum dapibus velit, gravida cursus turpis lacinia a.',
			name: 'John Doe',
			userId: 1,
			profilePict:
				'https://images.unsplash.com/photo-1673372267880-bc6914e446cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
		},
		{
			id: 2,
			descr: 'Donec mollis pulvinar felis ac convallis. Pellentesque consectetur, est vitae aliquam hendrerit, elit mi maximus tellus, luctus elementum tellus',
			name: 'John Doe',
			userId: 2,
			profilePict:
				'https://images.unsplash.com/photo-1673367620868-585f0613c9a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
		},
	];
	return (
		<div className="comments">
			<div className="write">
				<img src={currentUser.profilePict} alt="profile" />
				<input type="text" placeholder="write a comment" />
				<button>Send</button>
			</div>
			{comments.map((comment) => (
				<div className="comment">
					<img src={comment.profilePict} alt="comment" />
					<div className="info">
						<span>{comment.name}</span>
						<p>{comment.descr}</p>
					</div>
					<span className="date">1 hour ago</span>
				</div>
			))}
		</div>
	);
};

export default Comments;
