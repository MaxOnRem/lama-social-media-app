import './post.scss';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
	const liked = false;

	return (
		<div className="post">
			<div className="container">
				<div className="user">
					<div className="userInfo">
						<img src={post.profilePict} alt="post" />
						<div className="details">
							<Link to={`/profile/${post.userId}`}>
								<span className="name">{post.name}</span>
							</Link>
							<span className="date"> 3 mins ago</span>
						</div>
					</div>
					<MoreHorizIcon />
				</div>
				<div className="content">
					<p>{post.descr}</p>
					<img src={post.img} alt="post" />
				</div>
				<div className="info">
					<div className="interact">
						{liked ? (
							<FavoriteOutlinedIcon />
						) : (
							<FavoriteBorderOutlinedIcon />
						)}
						12 likes
					</div>
					<div className="interact">
						<TextsmsOutlinedIcon />
						10 comments
					</div>
					<div className="interact">
						<ShareOutlinedIcon />
						Share
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
