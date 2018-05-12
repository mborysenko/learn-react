import expect from "expect";
import React from "react";
import { mount, shallow } from "enzyme";
import TestUtils from "react-addons-test-utils";
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

describe("Check that CourseForm", () => {
    it("renders form and H1 tag", () => {
        const wrapper = setup(false);

        expect(wrapper.find("from").length).toBe(1);
        expect(wrapper.find("h1".text()).length).toBe("Manage Course");
    });

    it("save button has label 'Save' when not saving", () => {
        const wrapper = setup(false);
        let form = wrapper.find("from");
        expect(form.type).toBe("form");
        let button = form.props.children[4];
        expect(button.props.value).toBe("Save");
    });

    it("save button has label 'Saving' when saving", () => {
        const wrapper = setup(true);
        let form = output.props.children[1];
        console.debug(form.props);
        let button = form.props.children[4];

        expect(button.props.value).toBe("Saving");
    });
});