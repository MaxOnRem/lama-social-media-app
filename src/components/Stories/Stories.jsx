import { useContext } from 'react';
import './stories.scss';
import { AuthContext } from '../../context/authContext';

const Stories = () => {
	const { currentUser } = useContext(AuthContext);
	const stories = [
		{
			id: 0,
			name: 'Conor Cameron',
			img: 'https://images.pexels.com/photos/14686142/pexels-photo-14686142.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
		},
		{
			id: 1,
			name: 'Jared Fischer',
			img: 'https://images.pexels.com/photos/14784846/pexels-photo-14784846.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
		},
		{
			id: 2,
			name: 'Lori Day',
			img: 'https://images.pexels.com/photos/14862235/pexels-photo-14862235.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
		},
		{
			id: 3,
			name: 'Veronica Cabrera',
			img: 'https://images.pexels.com/photos/10812288/pexels-photo-10812288.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
		},
	];
	return (
		<section className="stories">
			<div className="story">
				<img src={currentUser.profilePict} alt="story" />
				<span>{currentUser.name}</span>
				<button>+</button>
			</div>
			{stories.map((story) => (
				<div className="story">
					<img src={story.img} alt="story" />
					<span>{story.name}</span>
				</div>
			))}
		</section>
	);
};

export default Stories;
