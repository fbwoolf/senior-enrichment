import { combineReducers } from 'redux';
import campus from './campus';
import campuses from './campuses';
import student from './student';
import students from './students';

// combine reducers
export default combineReducers({ campus, campuses, student, students });

// export action creators
export * from './student';
export * from './students';
export * from './campus';
export * from './campuses';