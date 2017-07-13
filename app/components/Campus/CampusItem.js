import React, { Componenet } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeCampus } from '../../reducers';

/* -----------------    COMPONENT     ------------------ */

const CampusItem = (props) => {

	const { campus } = props;

		return (
			<div className="list-group-item min-content user-item">
				<div className="media">
          <div className="media-left media-middle icon-container">
          	<img className="media-object img-square" src={ campus.image } />
          </div>
          <NavLink className="media-body" activeClassName="active" to={ `/campuses/${campus.id}` }>
            <h3 className="media-heading tucked">
              <span placeholder="Empty Campus">{ campus.name }</span>
            </h3>
        	</NavLink>
        	<div className="media-right media-middle">
            <button className="btn btn-default" onClick={ props.removeCampus }>
              <span className="glyphicon glyphicon-remove" />
            </button>
          </div>
      	</div>
			</div>
		)
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ campus }) => ({ campus, students });
const mapDispatch = { removeCampus };

export default connect(mapState, mapDispatch)(CampusItem);