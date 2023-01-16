import './profile.scss';

import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Posts from '../../components/Posts/Posts';

const Profile = () => {
	return (
		<div className="profile">
			<div className="images">
				<img
					className="cover"
					src="https://images.pexels.com/photos/688660/pexels-photo-688660.jpeg?auto=compress&cs=tinysrgb&w=1600"
					alt="cover"
				/>
				<img
					className="profilePict"
					src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
					alt="profilePict"
				/>
			</div>
			<div className="profileCont">
				<div className="usInfo">
					<div className="left">
						<a
							href="https://www.facebook.com/"
							rel="noreferrer"
							target="_blank"
						>
							<FacebookTwoToneIcon fontSize="medium" />
						</a>
						<a
							href="https://www.instagram.com/"
							rel="noreferrer"
							target="_blank"
						>
							<InstagramIcon
								fontSize="medium"
								rel="noreferrer"
								target="_blank"
							/>
						</a>
						<a
							href="https://twitter.com/"
							rel="noreferrer"
							target="_blank"
						>
							<TwitterIcon fontSize="medium" />
						</a>
						<a
							href="https://www.linkedin.com/"
							rel="noreferrer"
							target="_blank"
						>
							<LinkedInIcon fontSize="medium" />
						</a>
						<a
							href="https://www.pinterest.com/"
							rel="noreferrer"
							target="_blank"
						>
							<PinterestIcon fontSize="medium" />
						</a>
					</div>
					<div className="center">
						<span>Saba Ross</span>
						<div className="info">
							<div className="item">
								<PlaceIcon />
								<span>Ukraine</span>
							</div>
							<div className="item">
								<LanguageIcon />
								<span>saba.ross.com</span>
							</div>
						</div>
						<button>Follow</button>
					</div>
					<div className="right">
						<EmailOutlinedIcon />
						<MoreVertIcon />
					</div>
				</div>
				<Posts />
			</div>
		</div>
	);
};

export default Profile;
