import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { Link } from 'react-router-dom';
import './navBar.scss';

const NavBar = () => {
	return (
		<div class="navbar">
			<div class="left">
				<Link to="/">
					<span>LamaSocial</span>
				</Link>
				<HomeOutlinedIcon />
				<DarkModeOutlinedIcon />
				<GridViewOutlinedIcon />
				<div class="search">
					<SearchOutlinedIcon />
					<input type="text" placeholder="Search.." />
				</div>
			</div>
			<div class="right">
				<PersonOutlineOutlinedIcon />
				<EmailOutlinedIcon />
				<NotificationsOutlinedIcon />
				<div class="user">
					<img
						src="https://images.unsplash.com/photo-1671379827325-2fa2dc475840?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
						alt="profile ava "
					/>
					<span>Max Rem</span>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
