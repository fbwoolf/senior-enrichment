import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const WRITE_NEW_STUDENT = 'WRITE_NEW_STUDENT';

/* ------------   ACTION CREATORS     ------------------ */

export function writeNewStudent (student) {
  const action = { type: WRITE_NEW_STUDENT, student };
  return action;
}

/* ------------       REDUCERS     ------------------ */

const initialState = {
  name: '',
  email: ''
}

export default function reducer (student = initialState, action) {
  switch (action.type) {
    case WRITE_NEW_STUDENT:
      return action.student;
    default:
      return student
  }
}


