import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

/* -----------------    COMPONENT     ------------------ */

const Navbar = (props) => {

		return (
			<nav className="navbar navbar-default">
			  <div className="container">
			    <div className="navbar-header">
			      <Link to="/" className="navbar-brand">Home</Link>
			    </div>
			    <div className="collapse navbar-collapse">
			      <ul className="nav navbar-nav">
			      	<li><NavLink to="/campuses" activeClassName="active">Campuses</NavLink></li>
			        <li><NavLink to="/students" activeClassName="active">Students</NavLink></li>
			      </ul>
			    </div>
			  </div>
			</nav>
		)
}

/* -----------------    CONTAINER     ------------------ */

const mapState = null;
const mapDispatch = null;

export default connect(mapState, mapDispatch)(Navbar);

