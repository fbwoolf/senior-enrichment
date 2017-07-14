import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

/* -----------------    COMPONENT     ------------------ */

const Navbar = (props) => {

		return (
		  <div className="container">
	      <ul className="nav justify-content-end">
	      	<li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
	      	<li className="nav-item"><NavLink to="/campuses" className="nav-link">Campuses</NavLink></li>
	        <li className="nav-item"><NavLink to="/students" className="nav-link">Students</NavLink></li>
	      </ul>
		   </div>
		)
}

/* -----------------    CONTAINER     ------------------ */

const mapState = null;
const mapDispatch = null;

export default connect(mapState, mapDispatch)(Navbar);

