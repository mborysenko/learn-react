import {Actions} from "./constants";
import AuthorApi from "../api/mockAuthorApi";

export function loadAuthorsSuccess(authors) {
    return {
        type: Actions.AUTHORS_LOAD_SUCCESS_ACTION,
        authors
    }
}

export function loadAuthors() {
    return dispatch => {
        return AuthorApi.getAllAuthors().then((authors) => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
            throw error
        })
    }
}