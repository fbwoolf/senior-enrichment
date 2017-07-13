import { combineReducers } from 'redux';
import student from './student';
import students from './students';
import campus from './campus';
import campuses from './campuses';

// const initialState = {}

// const rootReducer = function(state = initialState, action) {
//   switch(action.type) {
//     default: return state
//   }
// };

// export default rootReducer

export default combineReducers({ student, students, campus, campuses })
