import './leftBar.scss';
import Friends from '../../assets/1.png';
import Groups from '../../assets/2.png';
import Market from '../../assets/3.png';
import Watch from '../../assets/4.png';
import Memories from '../../assets/5.png';
import Events from '../../assets/6.png';
import Gaming from '../../assets/7.png';
import Gallery from '../../assets/8.png';
import Videos from '../../assets/9.png';
import Messages from '../../assets/10.png';
import Tutorials from '../../assets/11.png';
import Courses from '../../assets/12.png';
import Fund from '../../assets/13.png';

const LeftBar = () => {
	return (
		<aside className="leftBar">
			<div className="container">
				<div className="menu">
					<div className="user">
						<img
							src="https://images.unsplash.com/photo-1671379827325-2fa2dc475840?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
							alt="profile ava "
						/>
						<span>Max Rem</span>
					</div>

					<div className="item">
						<img src={Friends} alt="friends" />
						<span>Friends</span>
					</div>
					<div className="item">
						<img src={Groups} alt="groups" />
						<span>Groups</span>
					</div>
					<div className="item">
						<img src={Market} alt="Marketplace" />
						<span>Market</span>
					</div>
					<div className="item">
						<img src={Watch} alt="Watch" />
						<span>Watch</span>
					</div>
					<div className="item">
						<img src={Memories} alt="Memories" />
						<span>Memories</span>
					</div>
				</div>
				<hr />
				<div className="menu">
					<span>Yout shortcuts</span>
					<div className="item">
						<img src={Events} alt="events" />
						<span>Events</span>
					</div>
					<div className="item">
						<img src={Gaming} alt="gaming" />
						<span>Gaming</span>
					</div>
					<div className="item">
						<img src={Gallery} alt="gallery" />
						<span>Gallery</span>
					</div>
					<div className="item">
						<img src={Videos} alt="videos" />
						<span>Videos</span>
					</div>
					<div className="item">
						<img src={Messages} alt="messages" />
						<span>Messages</span>
					</div>
				</div>
				<hr />
				<div className="menu">
					<span>Others</span>
					<div className="item">
						<img src={Fund} alt="fundraiser" />
						<span>Fundraiser</span>
					</div>
					<div className="item">
						<img src={Tutorials} alt="tutorials" />
						<span>Tutorials</span>
					</div>
					<div className="item">
						<img src={Courses} alt="courses" />
						<span>Courses</span>
					</div>
				</div>
			</div>
		</aside>
	);
};

export default LeftBar;
