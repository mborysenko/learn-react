import initialState from "../initialState";
import * as actions from "../../actions";

function isActionOfSuccessType(type){
    return type.substring(type.length - 8) === "_SUCCESS";
}
export default function asyncCallsInProgress(state = initialState.asyncCallsInProgress, action) {
    if(action.type === actions.START_ASYNC_CALL_ACTION) {
        return state + 1;
    } else if(action.type === actions.ASYNC_CALL_ERROR_ACTION || isActionOfSuccessType(action.type)) {
        return state - 1;
    }
    return state;
}