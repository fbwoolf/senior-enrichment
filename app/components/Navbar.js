import React from 'react';
import { Link } from 'react-router';

/* -----------------    COMPONENT     ------------------ */

const Navbar = () => (
	<nav className="navbar navbar-default">
	  <div className="container">
	    <div className="navbar-header">
	      <Link to="/" className="navbar-brand">Home</Link>
	    </div>
	    <div className="collapse navbar-collapse">
	      <ul className="nav navbar-nav">
	        <li><NavLink to="/users" activeClassName="active">Students</NavLink></li>
	        <li><NavLink to="/stories" activeClassName="active">Campuses</NavLink></li>
	      </ul>
	    </div>
	  </div>
	</nav>
);

export default Navbar;

