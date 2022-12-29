import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(
		JSON.parse(localStorage.getItem('user')) || null
	);

	const login = () => {
		//TODO
		setCurrentUser({
			id: 0,
			name: 'Max Rem',
			profilePict:
				'https://images.unsplash.com/photo-1672185972350-0b54a4d3d7d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
		});
	};

	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(currentUser));
	}, [currentUser]);

	return (
		<AuthContext.Provider value={{ currentUser, login }}>
			{children}
		</AuthContext.Provider>
	);
};
