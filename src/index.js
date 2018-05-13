import "babel-polyfill";
import React from "react";
import {render} from "react-dom";

import {Provider} from 'react-redux';

import {browserHistory, Router} from "react-router";
import routes from "./routes";

import configureStore from './store/configureStore'
import {loadCourses} from "./pages/Courses/actions";
import {loadAuthors} from "./authors/actions";

import "./styles/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/toastr/build/toastr.min.css";

const store = configureStore();

store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById("app")
);
