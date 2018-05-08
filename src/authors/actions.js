import {Actions} from "./constants";
import AuthorApi from "../api/mockAuthorApi";
import { startAsyncCall, asyncCallError} from "../actions/async/ajaxActions";


export function loadAuthorsSuccess(authors) {
    return {
        type: Actions.AUTHORS_LOAD_SUCCESS_ACTION,
        authors
    }
}

export function loadAuthors() {
    return dispatch => {
        dispatch(startAsyncCall());
        return AuthorApi.getAllAuthors().then((authors) => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
            dispatch(asyncCallError());
            throw error
        })
    }
}