import { combineReducers } from 'redux';
import courses from '../pages/Courses/reducers';


const rootReducer = combineReducers({
    courses
});

export {
    rootReducer
};