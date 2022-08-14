import React, { useEffect, useState } from 'react';
import './AddUser.css';

const AddUser = () => {
	const handleUser = (event) => {
		event.preventDefault();
		const name = event.target.name.value;
		const email = event.target.email.value;
		// make a user object here.
		const user = { name, email };
		// For post method 
		fetch('http://localhost:5000/user', {
			method: 'POST', // or 'PUT'
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('Success:', data);
				alert(' Hey User added successfully !!!!');
				event.target.reset();
			})
		//  .catch((error) => {
		// 	console.error('Error:', error);
		// }); 
		// name = '';
		// email = '';


	}
	const [users, setUser] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/users')
			.then(res => res.json())
			.then(data => {
				// console.log(data)
				setUser(data);
			})
	}, [users])

	const handleUserDelete = (id) => {
		const proceed = window.confirm("are you sure want to delete the user");
		if (proceed) {
			console.log('the deleted data id is ', id);
			const url = `http://localhost:5000/users/${id}`;
			fetch(url, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then(res => res.json())
				.then(data => {
					// this is not need for here but other cases may is required 
					/*** 
					if (data.deletedCount > 0) {
						const remaining = users.filter(user => user._id !== id);
						setUser(remaining);
					}
					****/
				})
		}
	}
	return (
		<div>
			<h1> This is the add user pages.</h1>
			<form className='form' onSubmit={handleUser}>
				<input type="text" name='name' placeholder='Name' required />
				<input type="email" name='email' placeholder='Email' required />
				<input type="submit" value="AddUser" />
			</form>

			<h1> Available Users : {users.length} </h1>
			<ol className='user-container'>
				{
					users.map(user => <li>
						{user.name} :: {user.email} <button onClick={() => handleUserDelete(user._id)}>X</button>
					</li>)
				}
			</ol>
		</div>
	);
};

export default AddUser;