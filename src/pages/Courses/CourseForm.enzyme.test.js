import expect from "expect";
import React from "react";
import { mount, shallow } from "enzyme";
import CourseForm from "./CourseForm";

function setup(saving) {
    let props = {
        course: {}, loading: saving, errors: {},
        onSave: () => {
        },
        onChange: () => {
        }
    };

    return shallow(<CourseForm {...props} />);
}

describe("Enzyme Checks that CourseForm", () => {
    it("renders form and H1 tag", () => {
        const wrapper = setup(false);

        expect(wrapper.find("form").length).toBe(1);
        expect(wrapper.find("h1").text()).toBe("Manage Courses Page");
    });

    it("save button has label 'Save' when not saving", () => {
        const wrapper = setup(false);

        let button = wrapper.find("input[type='submit']");
        expect(button.props().value).toBe("Save");
    });

    it("save button has label 'Saving' when saving", () => {
        const wrapper = setup(true);
        let button = wrapper.find("input[type='submit']");
        expect(button.props().value).toBe("Saving");
    });
});