import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const SELECT_STUDENT = 'SELECT_STUDENT';

/* ------------   ACTION CREATORS     ------------------ */

export function selectStudent (student) {
  const action = { type: SELECT_STUDENT, student };
  return action;
}

/* ------------       REDUCERS     ------------------ */

export default function reducer (student = {}, action) {
  switch (action.type) {
    case SELECT_STUDENT:
      return action.student;
    default:
      return state
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const fetchStudent = (id) => dispatch => {
  axios.get(`/api/students/${id}`)
		.then(res => dispatch(selectStudent(res.data)))
		.catch(err => console.error(`Fetching student: ${id} unsuccessful`, err));
};


