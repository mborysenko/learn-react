import {
    FINISH_ASYNC_CALL_ACTION,
    START_ASYNC_CALL_ACTION,
    ASYNC_CALL_ERROR_ACTION
} from "./API";

export function startAsyncCall() {
    return {
        type: START_ASYNC_CALL_ACTION
    }
}

export function finishAsyncCall() {
    return {
        type: FINISH_ASYNC_CALL_ACTION
    }
}
export function asyncCallError() {
    return {
        type: ASYNC_CALL_ERROR_ACTION
    }
}