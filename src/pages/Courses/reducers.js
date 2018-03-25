import { Actions } from "./constants";
import initialState from "../../reducers/initialState";

export default function courseReducer(state = initialState.courses, action) {
    if(action.type === Actions.COURSES_LOAD_SUCCESS_ACTION) {
        return action.courses;
    }

    let newState = state;
    if(action.type === Actions.CREATE_COURSE_ACTION) {
        newState = [
            ...state,
            Object.assign({}, action.course)
        ];
    }

    return newState;
}
