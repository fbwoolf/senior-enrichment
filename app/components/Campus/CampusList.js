import React, { Componenet } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CampusItem from './CampusItem';

/* -----------------    COMPONENT     ------------------ */

const CampusList = (props) => {

		return (
			<div className="container">
				<ul className="list-group">
	        {
	          props.campuses.map(campus => <CampusItem campus={ campus } key={ campus.id } />)
	        }
        </ul>
			</div>
		)
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ campuses }) => ({ campuses });
const mapDispatch = null;

export default connect(mapState, mapDispatch)(CampusList);

