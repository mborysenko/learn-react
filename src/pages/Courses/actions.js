import {Actions} from "./constants";
import CourseService from "../../api/mockCourseApi";

export function loadCoursesSuccess(courses) {
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
                dispatch(loadCoursesSuccess(courses));
            }).catch(error => {
                throw(error);
            });
    }
}

export function saveCourse(course) {
    return function (dispatch, getState) {
        return CourseService.saveCourse(course)
            .then((savedCourse) => {
                // course.id
                //     ? dispatch(courseUpdateSuccess(savedCourse))
                //     : dispatch(courseCreateSuccess(savedCourse));
            })
            .catch((error) => {
                throw error;
            })
    }

}