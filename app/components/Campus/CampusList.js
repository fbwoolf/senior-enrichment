import React, { Componenet } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CampusItem from './CampusItem';

/* -----------------    COMPONENT     ------------------ */

const CampusList = (props) => {

		return ( 
			<div className="container">
				<div className="row heading">
					<h3 className="display-5">CAMPUS LIST</h3>
					<Link to={ `/campuses/add` }>
						<i className="fa fa-plus fa-2x fa-pull-right"></i>
					</Link>
				</div>
				<div className="row">
					<ul className="list-group">
		        {
		          props.campuses.map(campus => <CampusItem campus={ campus } key={ campus.id } />)
		        }
	        </ul>
	    	</div>
			</div>
		)
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ campuses }) => ({ campuses });
const mapDispatch = null;

export default connect(mapState, mapDispatch)(CampusList);

