import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
	const currentUser = false; //I can't acces to HomePage (with current Profile)

	if (!currentUser) {
		return <Navigate to="/login" />;
	}
	return children;
};

export default ProtectedRoute;
