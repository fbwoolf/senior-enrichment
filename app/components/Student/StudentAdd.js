import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { postStudent } from '../../reducers/students';

/* -----------------    COMPONENT     ------------------ */

class StudentAdd extends Component {

	//const { handleSubmit } = props;

	constructor(props) {
		super(props)
		this.state = {
			name: '',
			email: '',
			campusIs: 1
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
				<button type="submit" className="btn btn-primary">SUBMIT</button>
	  	</form>
		)
	}	

	handleSubmit(event) {
		event.preventDefault();
		const student = {
			name: event.target.name.value,
			email: event.target.email.value,
			campusId: 1
		};
		this.props.postStudent(student);
		// clear inputs
    event.target.name.value = '';
    event.target.email.value = '';
	}
}

/* -----------------    CONTAINER     ------------------ */

const mapState = null;
const mapDispatch = { postStudent };

// const mapDispatch = dispatch => ({
// 	handleSubmit: (event) => {
// 	  event.preventDefault();
// 		const student = {
// 			name: event.target.name.value,
// 			email: event.target.email.value
// 		};
// 		dispatch(addStudent(student));
// 		// clear inputs
// 	  event.target.name.value = '';
// 	  event.target.email.value = '';
// 	  event.target.phone.value = '';
// 	}
// });

export default connect(mapState, mapDispatch)(StudentAdd);