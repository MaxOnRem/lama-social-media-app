import './rightBar.scss';

const RightBar = () => {
	return (
		<div className="rightBar">
			<div className="container">
				<div className="item">
					<span>Suggestions for You</span>
					<div className="user">
						<div className="userInfo">
							<img
								src="https://images.unsplash.com/photo-1672292865155-19cb9c6f5b69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
								alt="user ava"
							/>
							<span className="userName">Lisa Moreno</span>
						</div>
						<div className="buttons">
							<button>follow</button>
							<button>dismiss</button>
						</div>
					</div>
					<div className="user">
						<div className="userInfo">
							<img
								src="https://images.unsplash.com/photo-1672262077289-19440458713e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
								alt="user ava"
							/>
							<span className="userName">Mike Paw</span>
						</div>
						<div className="buttons">
							<button>follow</button>
							<button>dismiss</button>
						</div>
					</div>

					<div className="user">
						<div className="userInfo">
							<img
								src="https://images.unsplash.com/photo-1672172363390-b47102199dc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
								alt="user ava"
							/>
							<span className="userName">Otis Stephenson</span>
						</div>
						<div className="buttons">
							<button>follow</button>
							<button>dismiss</button>
						</div>
					</div>
				</div>

				<div className="item">
					<span>Latest Activities</span>
					<div className="user">
						<div className="userInfo">
							<img
								src="https://images.unsplash.com/photo-1672224745017-a9b54ad9188f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
								alt="user ava"
							/>
							<p>
								<span className="userName">Jhon Hawk </span>
								changed their cover picture
							</p>
						</div>
						<span>1 min ago</span>
					</div>
					<div className="user">
						<div className="userInfo">
							<img
								src="https://images.unsplash.com/photo-1667702463403-4a7f6fbb5b5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNzR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
								alt="user ava"
							/>
							<p>
								<span className="userName">Bronte Curtis </span>
								liked your photo
							</p>
						</div>
						<span>1 min ago</span>
					</div>
					<div className="user">
						<div className="userInfo">
							<img
								src="https://images.unsplash.com/photo-1672266199924-9e84bcaefbc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
								alt="user ava"
							/>
							<p>
								<span className="userName">Thea Reilly </span>
								changed their profile picture
							</p>
						</div>
						<span>4 mins ago</span>
					</div>
					<div className="user">
						<div className="userInfo">
							<img
								src="https://images.unsplash.com/photo-1525026198548-4baa812f1183?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbW11bml0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
								alt="user ava"
							/>
							<p>
								<span className="userName">Jhon Hawk </span>
								liked your photo
							</p>
						</div>
						<span>7 mins ago</span>
					</div>
					<div className="user">
						<div className="userInfo">
							<img
								src="https://images.unsplash.com/photo-1672262103732-b8017635b58c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
								alt="user ava"
							/>
							<p>
								<span className="userName">Lara Chaney </span>
								liked your story reply
							</p>
						</div>
						<span>8 mins ago</span>
					</div>
				</div>

				<div className="item">
					<span>Online Friends</span>
					<div className="user">
						<div className="userInfo">
							<img
								src="https://images.unsplash.com/photo-1672197339033-688e27f884f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
								alt="user ava"
							/>
							<div className="online" />
							<span className="userName">Ezekiel Colon</span>
						</div>
					</div>
					<div className="user">
						<div className="userInfo">
							<img
								src="https://images.unsplash.com/photo-1672092301647-cf33462f8fd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
								alt="user ava"
							/>
							<div className="online" />
							<span className="userName">Jane Doe</span>
						</div>
					</div>
					<div className="user">
						<div className="userInfo">
							<img
								src="https://images.unsplash.com/photo-1672169538777-fb3211046a03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
								alt="user ava"
							/>
							<div className="online" />
							<span className="userName">Angela Campos</span>
						</div>
					</div>
					<div className="user">
						<div className="userInfo">
							<img
								src="https://images.unsplash.com/photo-1666700138577-d3f83de20550?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
								alt="user ava"
							/>
							<div className="online" />
							<span className="userName">Maximus Bailey</span>
						</div>
					</div>
					<div className="user">
						<div className="userInfo">
							<img
								src="https://images.unsplash.com/photo-1525026198548-4baa812f1183?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbW11bml0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
								alt="user ava"
							/>
							<div className="online" />
							<span className="userName">Jane Doe</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RightBar;
