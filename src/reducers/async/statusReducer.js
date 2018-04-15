import initialState from "../initialState";
import * as actions from "../../actions";

export default function statusReducer(state = initialState.numberOfRunningCalls, action) {
    if(action.type === actions.START_ASYNC_CALL_ACTION) {
        return state + 1;
    }
    return state;
}