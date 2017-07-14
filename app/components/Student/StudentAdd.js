import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { postStudent } from '../../reducers/students';

/* -----------------    COMPONENT     ------------------ */

class StudentAdd extends Component {

	constructor(props) {
		super(props)
		this.state = {
			name: '',
			email: '',
			campusId: 1
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	render() {
		return (
			<div className="container">
				{ this.newStudentForm() }
	  	</div>
		)
	}

	newStudentForm() {
		return (
			<form onSubmit={ this.handleSubmit }>
				<div className="form-group">
	  			<label>NAME</label>
	  			<input name="name" type="text" className="form-control" id="form-field" aria-describedby="nameHelp" placeholder="Please enter your first and last name."></input>
				</div>
				<div className="form-group">
	  			<label>EMAIL</label>
	  			<input name="email" type="text" className="form-control" id="form-field" aria-describedby="emailHelp" placeholder="Please enter a valid email address."></input>
				</div>
				<div className="form-group">
			    <label>CAMPUS</label>
			    <select name="select" className="form-control" id="select-dropdown">
			    	<option value="0">Select your campus...</option>
			      { 
			      	this.props.campuses.map(campus => <option value={ campus.id } key={ campus.id }>{ campus.name }</option>)
		        }
			    </select>
  			</div>
				<button type="submit" className="btn btn-primary btn-submit">SUBMIT</button>
	  	</form>
		)
	}	

	handleSubmit(event) {
		event.preventDefault();
		const student = {
			name: event.target.name.value,
			email: event.target.email.value,
			campusId: event.target.select.value
		};
		this.props.postStudent(student);
		// clear inputs
    event.target.name.value = '';
    event.target.email.value = '';
    event.target.select.value = 0;
	}
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ campuses }) => ({ campuses });
const mapDispatch = { postStudent };

export default connect(mapState, mapDispatch)(StudentAdd);