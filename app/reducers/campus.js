import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const SELECT_CAMPUS = 'SELECT_CAMPUS';

/* ------------   ACTION CREATORS     ------------------ */

export function selectCampus (campus) {
  const action = { type: SELECT_CAMPUS, campus };
  return action;
}

/* ------------       REDUCERS     ------------------ */

export default function reducer (campus = {}, action) {
  switch (action.type) {
    case SELECT_CAMPUS:
      return action.campus;
    default:
      return campus
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const fetchCampus = (id) => dispatch => {
  axios.get(`/api/campuses/${id}`)
		.then(res => dispatch(selectCampus(res.data)))
		.catch(err => console.error(`Fetching campus: ${id} unsuccessful`, err));
};