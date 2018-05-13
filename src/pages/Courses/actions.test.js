import expect from "expect";
import React from "react";
import courseActions, {saveCourse, courseCreateSuccess} from "./actions";
import {Actions} from "./constants";
import { mount, shallow } from "enzyme";

describe('Course Actions', () => {
    describe('Course Actions', () => {
        it('should create a CREATE_COURSE_SUCCESS action', () => {
            let course = {
                id: 'cory-house',
                title: 'Cory House'
            };

            let expected = {
                type: Actions.CREATE_COURSE_SUCCESS_ACTION,
                course: course
            };

            expect(courseCreateSuccess(course)).toEqual(expected)
        });
    });
});