import React from 'react';
import { Link } from "react-router-dom";
import AddUser from '../AddUser/AddUser';
import './Navbar.css';
const Navbar = () => {
	return (
		<nav className='nav-container'>
			<Link to='/' className='link'> Home </Link>
			<Link to= '/add/user'className='link'> Add User </Link>
		</nav>
	);
};

export default Navbar;