import React from 'react';
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
			})
		//  .catch((error) => {
		// 	console.error('Error:', error);
		// }); 
		// name = '';
		// email = '';
	}
	return (
		<div>
			<h1> This is the add user pages.</h1>
			<form className='form' onSubmit={handleUser}>
				<input type="text" name='name' placeholder='Name' required />
				<input type="email" name='email' placeholder='Email' required />
				<input type="submit" value="AddUser" />
			</form>
		</div>
	);
};

export default AddUser;