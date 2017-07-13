import React, { Componenet } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import StudentItem from './StudentItem';

/* -----------------    COMPONENT     ------------------ */

const StudentList = (props) => {

	const { campuses } = props;

		return (
			<div className="container">
				<div className="user-list">
	        {
	          props.students.map(student => <StudentItem />)
	        }
        </div>
			</div>
		)
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ students }) => ({ students });
const mapDispatch = null;

export default connect(mapState, mapDispatch)(StudentList);