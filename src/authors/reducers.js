import {Actions} from "./constants";
import initialState from "../reducers/initialState";

export default function stateReducer(state = initialState.authors, action) {
    if(action.type === Actions.AUTHORS_LOAD_SUCCESS_ACTION) {
        return action.authors;
    }

    return state;
}
