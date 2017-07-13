import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const INITIALIZE_CAMPUSES = 'INITIALIZE_CAMPUSES';
const CREATE_CAMPUS = 'CREATE_CAMPUS';
const REMOVE_CAMPUS = 'REMOVE_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';

/* ------------   ACTION CREATORS     ------------------ */

export function initCampuses (campuses) {
  const action = { type: INITIALIZE_CAMPUSES, campuses };
  return action;
}

export function createCampus (campus) {
  const action = { type: CREATE_CAMPUS, campus };
  return action;
}

export function removeCampus (id) {
  const action = { type: REMOVE_CAMPUS, id };
  return action;
}

export function updateCampus (campus) {
  const action = { type: UPDATE_CAMPUS, campus };
  return action;
}

/* ------------       REDUCERS     ------------------ */

export default function reducer (campuses = [], action) {
  switch (action.type) {

    case INITIALIZE_CAMPUSES:
      return action.campuses;

    case CREATE_CAMPUS:
      return [...campuses, action.campus];

    case REMOVE_CAMPUS:
      return campuses.filter(campus => campus.id !== action.id);

    case UPDATE_CAMPUS:
      return campuses.map(campus => (
      	action.campus.id === campus.id ? action.campus : campus
     	));

    default:
      return campuses;
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const fetchCampuses = () => dispatch => {
  axios.get('/api/campuses')
  	.then(res => dispatch(initCampuses(res.data)))
   	.catch(err => console.error('Fetching campuses unsuccessful', err));
};

export const postCampus = (campus) => dispatch => {
  axios.post('/api/campuses', campus)
    .then(res => dispatch(createCampus(res.data)))
    .catch(err => console.error(`Creating campus: ${campus} unsuccesful`, err));
};

export const putCampus = (id, campus) => dispatch => {
  axios.put(`/api/campuss/${id}`, campus)
    .then(res => dispatch(updateCampus(res.data)))
    .catch(err => console.error(`Updating campus: ${campus} unsuccesful`, err));
};

export const deleteCampus = id => dispatch => {
  dispatch(removeCampus(id));
  axios.delete(`/api/campuses/${id}`)
    .catch(err => console.error(`Removing campus: ${id} unsuccesful`, err));
};











