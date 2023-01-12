import { VolumeUpTwoTone } from '@mui/icons-material';
import Post from './Post/Post';
import './posts.scss';

const Posts = () => {
	const posts = [
		{
			id: 0,
			name: 'Saba Ross',
			userId: 0,
			profilePict:
				'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=400',
			descr: 'Natus aut iusto distinctio reiciendis laboriosam neque voluptas porro corporis? Laboriosam praesentium doloremque odio et deleniti incidunt voluptatem quaerat minima porro sit soluta beatae eveniet iure, Sapiente',
			img: 'https://images.unsplash.com/photo-1673537191345-e6309d6e68e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
		},
		{
			id: 1,
			name: 'Erica Keller',
			userId: 1,
			profilePict:
				'https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg?auto=compress&cs=tinysrgb&w=400',
			descr: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet adipisci esse VolumeUpTwoTone',
			img: 'https://images.unsplash.com/photo-1673444581939-bd908db3bca6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
		},
	];
	return (
		<section className="posts">
			{posts.map((post) => (
				<div className="post">
					<Post post={post} key={post.id} />
				</div>
			))}
		</section>
	);
};

export default Posts;
