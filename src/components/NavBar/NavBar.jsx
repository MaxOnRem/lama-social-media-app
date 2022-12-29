import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import './navBar.scss';

const NavBar = () => {
	const { toggle, darkMode } = useContext(DarkModeContext);

	return (
		<div className="navBar">
			<div className="left">
				<Link to="/">
					<span>LamaSocial</span>
				</Link>
				<HomeOutlinedIcon />
				{darkMode ? (
					<WbSunnyOutlinedIcon onClick={toggle} />
				) : (
					<DarkModeOutlinedIcon onClick={toggle} />
				)}
				<GridViewOutlinedIcon />
				<div className="search">
					<SearchOutlinedIcon />
					<input type="text" placeholder="Search.." />
				</div>
			</div>
			<div className="right">
				<PersonOutlineOutlinedIcon />
				<EmailOutlinedIcon />
				<NotificationsOutlinedIcon />
				<div className="user">
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
