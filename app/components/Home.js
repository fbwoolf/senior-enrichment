import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

/* -----------------    COMPONENT     ------------------ */

const Home = (props) => {

		return (
			<div className="container">
				<div className="row">
					<div className="col"></div>
						<div className="col-6 home-page"> 
			          <h3>WELCOME TO MARGARET HAMILTON INTERPLANETARY ACADEMY OF JAVASCRIPT</h3>
			     	</div>
			    <div className="col"></div>
			  </div>
		  </div>
		)
}

/* -----------------    CONTAINER     ------------------ */

const mapState = null;
const mapDispatch = null;

export default connect(mapState, mapDispatch)(Home);