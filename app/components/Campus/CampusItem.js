import React, { Componenet } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { removeCampus } from '../../reducers';

/* -----------------    COMPONENT     ------------------ */

const CampusItem = (props) => {

	const { campus } = props;

		return (
			<li className="list-group-item">
        <img src={ campus.image } />
        <NavLink activeClassName="active" to={ `/campuses/${campus.id}` }> 
          <h3>{ campus.name }</h3>
        </NavLink>
      </li>
		)
}

/* -----------------    CONTAINER     ------------------ */

const mapState = null;
const mapDispatch = { removeCampus };

export default connect(mapState, mapDispatch)(CampusItem);