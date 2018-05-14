import expect from 'expect';
import courseReducer from './reducers';
import {Actions} from './constants';
import {START_ASYNC_CALL_ACTION} from '../../actions/async/API';
import * as actions from './actions';

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

describe('Course Reducer', () => {
    it('should add a course when ' + Actions.CREATE_COURSE_SUCCESS_ACTION + " is passed", () => {
        const initialState = [
            {
                title: "Learn Angular 4"
            },
            {
                title: "Learn React + Redux"
            }
        ];

        const course = {
            title: "Learn Vue"
        };

        const action = actions.createCourse(course);

        const state = courseReducer(initialState, action);

        expect(state.length).toBe(3);
        expect(state[0].title).toEqual(initialState[0].title);
        expect(state[1].title).toEqual(initialState[1].title);
        expect(state[2].title).toEqual(course.title);
    });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
    it('should create ' + START_ASYNC_CALL_ACTION + ' and ' + Actions.COURSES_LOAD_SUCCESS_ACTION + ' when loading courses', (done) => {
        const expectedActions = [
            {type: START_ASYNC_CALL_ACTION},
            {
                type: Actions.COURSES_LOAD_SUCCESS_ACTION,
                body: {
                    courses: [
                        {id: 'cory-house', title: "Clean Code"}
                    ]
                }
            }
        ];

        const store = mockStore({courses: []}, expectedActions);

        store.dispatch(actions.loadCourses()).then(() => {
            const a = store.getActions();
            expect(a[0].type).toEqual(START_ASYNC_CALL_ACTION);
            expect(a[1].type).toEqual(Actions.COURSES_LOAD_SUCCESS_ACTION);
            done();
        });
    });
});