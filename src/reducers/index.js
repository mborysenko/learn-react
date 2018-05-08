import { combineReducers } from 'redux';
import courses from '../pages/Courses/reducers';
import authors from '../authors/reducers';
import asyncCallsInProgress from './async';


const rootReducer = combineReducers({
    courses,
    authors,
    asyncCallsInProgress
});

export {
    rootReducer
};