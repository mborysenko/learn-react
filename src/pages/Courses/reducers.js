import { Actions } from "./constants";
import initialState from "../../reducers/initialState";

export default function courseReducer(/*Array*/state = initialState.courses, action) {
    if(action.type === Actions.COURSES_LOAD_SUCCESS_ACTION) {
        return action.courses;
    }

    if(action.type === Actions.NEW_COURSE_ACTION) {
        return [
            ...state,
            Object.assign({}, action.course)
        ];
    }
    if(action.type === Actions.CREATE_COURSE_SUCCESS_ACTION) {
       return [
            ...state,
            Object.assign({}, action.course)
        ];
    }
    if(action.type === Actions.UPDATE_COURSE_SUCCESS_ACTION) {
       return [
            ...state.filter((c) => c.id !== action.course.id),
            Object.assign({}, action.course)
        ];
    }

    return state;
}
