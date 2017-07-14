import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const WRITE_STUDENT_NAME = 'WRITE_STUDENT_NAME';
const WRITE_STUDENT_EMAIL = 'WRITE_STUDENT_EMAIL';
const SELECT_STUDENT_CAMPUS = 'SELECT_STUDENT_CAMPUS';

/* ------------   ACTION CREATORS     ------------------ */

export function writeStudentName (student) {
  const action = { type: WRITE_STUDENT_NAME, student };
  return action;
}

export function writeStudentEmail (student) {
  const action = { type: WRITE_STUDENT_EMAIL, student };
  return action;
}

export function selectStudentCampus (student) {
  const action = { type: SELECT_STUDENT_CAMPUS, student };
  return action;
}

/* ------------       REDUCERS     ------------------ */

export default function reducer (student = {}, action) {
  switch (action.type) {
    case WRITE_STUDENT_NAME:
      return action.student;
    case WRITE_STUDENT_EMAIL:
      return action.student;
    case SELECT_STUDENT_CAMPUS:
      return action.student;
    default:
      return student
  }
}


