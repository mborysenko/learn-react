import React from "react";
import {IndexRoute, Route} from "react-router";
import Application from "./components/Application";
import LandingPage from "./pages/LandingPage/LandingPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import CourseDetails from "./pages/Course/CourseDetails";


export default (
    <Route path="/" component={Application}>
        <IndexRoute component={LandingPage}/>
        <Route path="about" component={AboutPage}/>
        <Route path="course" component={CourseDetails}/>
    </Route>
);
