import React, { Componenet } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CampusItem from './CampusItem';

/* -----------------    COMPONENT     ------------------ */

const CampusList = (props) => {

	const { campuses } = props;

		return (
			<div className="container">
				<div className="user-list">
	        {
	          props.campuses.map(campus => <CampusItem key={ campus.id }/>)
	        }
        </div>
			</div>
		)
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ campuses }) => ({ campuses });
const mapDispatch = null;

export default connect(mapState, mapDispatch)(CampusList);

