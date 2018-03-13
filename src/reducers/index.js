import { combineReducers } from 'redux';
import courses from '../pages/Course/reducers';


const rootReducer = combineReducers({
    courses
});

export {
    rootReducer
};