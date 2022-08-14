import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import './Home.css';
const Home = () => {
	const [users, setUser] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/users')
			.then(res => res.json())
			.then(data => {
				console.log(data)
				setUser(data);
			})
	}, [])
	return (
		<div>
			<h1> Available Users : {users.length} </h1>
			<ol className='user-container'>
				{
					users.map(user => <li>
						{user.name} :: {user.email}
					</li>)
				}
			</ol>

		</div>
	);
};

export default Home;