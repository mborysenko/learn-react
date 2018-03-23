import React from "react";
import {IndexRoute, Route} from "react-router";
import Application from "./components/Application";
import LandingPage from "./pages/LandingPage/LandingPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import CoursesPage from "./pages/Courses/CoursesPage";
import ManageCoursePage from "./pages/Courses/ManageCoursePage";


export default (
    <Route path="/" component={Application}>
        <IndexRoute component={LandingPage}/>
        <Route path="about" component={AboutPage}/>
        <Route path="courses" component={CoursesPage}/>
        <Route path="course" component={ManageCoursePage}/>
        <Route path="course/:id" component={ManageCoursePage}/>
    </Route>
);
