import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const INITIALIZE_STUDENTS = 'INITIALIZE_STUDENTS';
const CREATE_STUDENT = 'CREATE_STUDENT';
const REMOVE_STUDENT = 'REMOVE_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT';

/* ------------   ACTION CREATORS     ------------------ */

export function initStudents (students) {
  const action = { type: INITIALIZE_STUDENTS, students };
  return action;
}

export function createStudent (student) {
  const action = { type: CREATE_STUDENT, student };
  return action;
}

export function removeStudent (id) {
  const action = { type: REMOVE_STUDENT, id };
  return action;
}

export function updateStudent (student) {
  const action = { type: UPDATE_STUDENT, student };
  return action;
}

/* ------------       REDUCERS     ------------------ */

export default function reducer (students = [], action) {
  switch (action.type) {

    case INITIALIZE_STUDENTS:
      return action.students;

    case CREATE_STUDENT:
      return [...students, action.student];

    case REMOVE_STUDENT:
      return students.filter(student => student.id !== action.id);

    case UPDATE_STUDENT:
      return students.map(student => (
      	action.student.id === student.id ? action.student : student
     	));

    default:
      return students;
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const fetchStudents = () => dispatch => {
  axios.get('/api/students')
  	.then(res => dispatch(initStudents(res.data)))
   	.catch(err => console.error('Fetching students unsuccessful', err));
};

export const postStudent = (student) => dispatch => {
  axios.post('/api/students', student)
		.then(res => dispatch(createStudent(res.data)))
		.catch(err => console.error(`Creating student: ${student} unsuccesful`, err));
};

export const putStudent = (id, student) => dispatch => {
  axios.put(`/api/students/${id}`, student)
		.then(res => dispatch(updateStudent(res.data)))
		.catch(err => console.error(`Updating student: ${student} unsuccesful`, err));
};

export const deleteStudent = id => dispatch => {
  dispatch(removeStudent(id));
  axios.delete(`/api/students/${id}`)
  	.catch(err => console.error(`Removing student: ${id} unsuccesful`, err));
};













