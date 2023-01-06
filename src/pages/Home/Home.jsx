import Stories from '../../components/Stories/Stories';
import Posts from '../../components/Posts/Posts';
import './home.scss';

const Home = () => {
	return (
		<article className="home">
			<Stories />
			<Posts />
		</article>
	);
};

export default Home;
