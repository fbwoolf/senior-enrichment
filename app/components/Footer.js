import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

/* -----------------    COMPONENT     ------------------ */

const Footer = (props) => {

		return (
			<div className="footer text-center">
		  	<span>Margaret Hamilton Interplanetary Academy of JavaScript</span>
  		</div>
		)
}

/* -----------------    CONTAINER     ------------------ */

const mapState = null;
const mapDispatch = null;

export default connect(mapState, mapDispatch)(Footer);