import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { removeStudent } from '../../reducers';

/* -----------------    COMPONENT     ------------------ */

const StudentItem = (props) => {

		const { student } = props;

		return (
			<li className="list-group-item">
        <NavLink activeClassName="active" to={ `/students/${student.id}` }> 
          <h3>{ student.name }</h3>
        </NavLink>
      </li>
		)
}

/* -----------------    CONTAINER     ------------------ */

const mapState = null;
const mapDispatch = { removeStudent };

export default connect(mapState, mapDispatch)(StudentItem);