import {Actions} from "./constants";
import CourseService from "../../api/mockCourseApi";

export function coursesLoadSuccess(courses) {
    return {
        type: Actions.COURSES_LOAD_SUCCESS_ACTION,
        courses
    };
}

export function createCourse(course) {
    return {
        type: Actions.CREATE_COURSE_ACTION,
        course
    };
}

export function loadCourses() {
    return function (dispatch) {
        return CourseService.getAllCourses()
            .then((courses) => {
                dispatch(coursesLoadSuccess(courses));
            }).catch(error => {
                throw(error);
            });
    }
}