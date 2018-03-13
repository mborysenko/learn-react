import {createStore, applyMiddleware} from 'redux';
import { rootReducer } from '../reducers';
import risi from 'redux-immutable-state-invariant';

export default function configureStore(initialState){
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(risi())
    );
}