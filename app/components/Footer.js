import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

/* -----------------    COMPONENT     ------------------ */

const Footer = (props) => {

		return (
			<div className="footer text-center">
		    <div className="vcenter muted">
		      <span>Margaret Hamilton Interplanetary Academy of JavaScript</span>
		    </div>
  		</div>
		)
}

/* -----------------    CONTAINER     ------------------ */

const mapState = null;
const mapDispatch = null;

export default connect(mapState, mapDispatch)(Footer);