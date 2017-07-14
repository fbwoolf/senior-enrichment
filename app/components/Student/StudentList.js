import React, { Componenet } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import StudentItem from './StudentItem';

/* -----------------    COMPONENT     ------------------ */

const StudentList = (props) => {

		return (
			<div className="container">
				<div className="row heading">
					<h3 className="display-5">STUDENT LIST</h3>
					<Link to={ `/student/add` }>
						<i className="fa fa-plus fa-2x fa-pull-right"></i>
					</Link>
				</div>
				<div className="row">
					<ul className="user-list">
		        {
		          props.students.map(student => <StudentItem student={ student } key={ student.id } />)
		        }
	        </ul>
	      </div>
			</div>
		)
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ students }) => ({ students });
const mapDispatch = null;

export default connect(mapState, mapDispatch)(StudentList);