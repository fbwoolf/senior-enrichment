import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const WRITE_CAMPUS_NAME = 'WRITE_CAMPUS_NAME';
const WRITE_CAMPUS_IMAGE = 'WRITE_CAMPUS_IMAGE';
const REMOVE_CAMPUS_STUDENT = 'REMOVE_CAMPUS_STUDENT';

/* ------------   ACTION CREATORS     ------------------ */

export function writeCampusName (campus) {
  const action = { type: WRITE_CAMPUS_NAME, campus };
  return action;
}

export function writeCampusImage (campus) {
  const action = { type: WRITE_CAMPUS_IMAGE, campus };
  return action;
}

export function removeCampusStudent (campus) {
  const action = { type: REMOVE_CAMPUS_STUDENT, campus };
  return action;
}

/* ------------       REDUCERS     ------------------ */

export default function reducer (campus = {}, action) {
  switch (action.type) {
    case WRITE_CAMPUS_NAME:
      return action.campus;
    case WRITE_CAMPUS_IMAGE:
      return action.campus;
    case REMOVE_CAMPUS_STUDENT:
      return action.campus;
    default:
      return campus
  }
}