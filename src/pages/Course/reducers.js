import { CREATE_COURSE_ACTION } from "./actions";

export default function courseReducer(state = [], action) {
    let newState = state;
    if(action.type === CREATE_COURSE_ACTION) {
        newState = [
            ...state,
            Object.assign({}, action.course)
        ];
    }

    return newState;
}
