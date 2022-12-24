import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import LeftBar from './components/LeftBar/LeftBar';
import RightBar from './components/RightBar/RightBar';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';

function App() {
	const Layout = () => {
		return (
			<div>
				<NavBar />
				<div style={{ display: 'flex' }}>
					<LeftBar />
					<Outlet />
					<RightBar />
				</div>
			</div>
		);
	};

	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					path: '/',
					element: <Home />,
				},
				{
					path: '/profile/:id',
					element: <Profile />,
				},
			],
		},
		{
			path: '/login',
			element: <Login />,
		},
		{
			path: '/register',
			element: <Register />,
		},
	]);

	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
