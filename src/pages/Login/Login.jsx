import { NavLink } from 'react-router-dom';
import './login.scss';

const Login = () => {
	return (
		<div className="login">
			<div className="card">
				<div className="left">
					<h1>Hi there!</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Reprehenderit sint nam eos exercitationem maxime quia
						consequatur illo mollitia eveniet iusto alias nemo amet
						obcaecati, distinctio aliquid a. Error, nisi repudiandae!
					</p>
					<span>Don't have an account?</span>
					<button>Register</button>
				</div>
				<div className="right">
					<h2>Login</h2>
					<form>
						<input type="text" placeholder="Username" />
						<input type="password" placeholder="Password" />
						{/* <Routes>
							<NavLink to="../Register/Register.jsx">
								<button>Login</button>
							</NavLink>
						</Routes> */}
						<button>Login</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
