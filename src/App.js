import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import LeftBar from './components/LeftBar/LeftBar';
import RightBar from './components/RightBar/RightBar';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import './style.scss';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/authContext';

function App() {
  const { currentUser } = useContext(AuthContext);

  const { darkMode } = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
        <NavBar />
        <main style={{ display: 'flex' }}>
          <LeftBar />
          <section style={{ flex: 7 }}>
            <Outlet />
          </section>
          <RightBar />
        </main>
      </div>
    );
  };

  // const currentUser = true; //Access to HomePage (with current Profile)

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: (
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        ),
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
    ],
    {
      basename: '/lama-social-media-app',
    },
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
