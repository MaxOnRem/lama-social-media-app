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
import { AuthContext } from '../../context/authContext';
import { DarkModeContext } from '../../context/darkModeContext';
import './navBar.scss';

const NavBar = () => {
	const { toggle, darkMode } = useContext(DarkModeContext);
	const { currentUser } = useContext(AuthContext);

	return (
		<div className="navBar">
			<div className="left">
				<Link to="/">
					<span>LamaSocial</span>
				</Link>

				<HomeOutlinedIcon style={{ cursor: 'pointer' }} />

				{darkMode ? (
					<WbSunnyOutlinedIcon
						onClick={toggle}
						style={{ cursor: 'pointer' }}
					/>
				) : (
					<DarkModeOutlinedIcon
						onClick={toggle}
						style={{ cursor: 'pointer' }}
					/>
				)}
				<GridViewOutlinedIcon style={{ cursor: 'pointer' }} />
				<div className="search">
					<SearchOutlinedIcon style={{ cursor: 'pointer' }} />
					<input type="text" placeholder="Search.." />
				</div>
			</div>
			<div className="right">
				<PersonOutlineOutlinedIcon style={{ cursor: 'pointer' }} />
				<EmailOutlinedIcon style={{ cursor: 'pointer' }} />
				<NotificationsOutlinedIcon style={{ cursor: 'pointer' }} />
				<div className="user">
					<img
						src={currentUser.profilePict}
						alt="profile ava"
						style={{ cursor: 'pointer' }}
					/>
					<span style={{ cursor: 'pointer' }}>{currentUser.name}</span>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
