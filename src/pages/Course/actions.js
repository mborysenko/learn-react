export const CREATE_COURSE_ACTION = "CREATE_COURSE";

export function createCourse(course) {
    return {
        type: CREATE_COURSE_ACTION,
        course
    };
}