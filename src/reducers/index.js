import { combineReducers } from 'redux';
import courses from '../pages/Courses/reducers';
import authors from '../authors/reducers';


const rootReducer = combineReducers({
    courses,
    authors
});

export {
    rootReducer
};