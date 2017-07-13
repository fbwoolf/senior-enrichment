import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

/* -----------------    COMPONENT     ------------------ */

const StudentItem = (props) => {

		return (
			<div>StudentItem</div>
		)
}

/* -----------------    CONTAINER     ------------------ */

const mapState = null;
const mapDispatch = null;

export default connect(mapState, mapDispatch)(StudentItem);