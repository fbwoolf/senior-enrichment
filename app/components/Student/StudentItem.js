import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { deleteStudent } from '../../reducers';

/* -----------------    COMPONENT     ------------------ */

class StudentItem extends Component {

	constructor (props) {
		super(props);
		this.handleRemove = this.handleRemove.bind(this);
	}
		
	render() {
		const { student } = this.props;
		return (
			<li className="list-group-item">
				<div className="student-name">
	        <NavLink activeClassName="active" to={ `/students/${student.id}` }> 
	          <h3>{ student.name }</h3>
	        </NavLink>
	       </div>
        <button className="btn-remove" onClick={ this.handleRemove }>
        	<i className="fa fa-times fa-2x fa-pull-right"></i>
       	</button>
      </li>
		)
	}

	handleRemove(event) {
		event.stopPropagation();
		const { student } = this.props;
		this.props.deleteStudent(student.id);
	}
}

/* -----------------    CONTAINER     ------------------ */

const mapState = null;
const mapDispatch = { deleteStudent };

export default connect(mapState, mapDispatch)(StudentItem);