import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link, NavLink } from 'react-router-dom';
import CampusItem from './CampusItem';
import StudentItem from '../Student/StudentItem';

/* -----------------    COMPONENT     ------------------ */

const CampusDetail = (props) => {

	const { campus, students } = props;

		return (
			<div className="container">
				<div className="row">
					<div className="col">
						<CampusItem campus={ campus } />
							<ul>
								<li>
									{
										students
										.filter(student => student.campusId === campus.id)
										.map(student => <StudentItem student={ student } key={ student.id } />)
									}
								</li>
							</ul>
					</div>
			  </div>
		  </div>
		)
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ campuses, students }, ownProps) => { 
	const paramId = Number(ownProps.match.params.id);
	return {
		campus: _.find(campuses, campus => campus.id === paramId), 
		students
	};
};

const mapDispatch = null;

export default connect(mapState, mapDispatch)(CampusDetail);