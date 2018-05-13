import expect from "expect";
import React from "react";
import {mount} from "enzyme";
import {ManageCoursePage} from "./ManageCoursePage";


describe("Enzyme Checks that ManageCoursePage", () => {
    it("sets the error message when title is invalid", () => {
        let props = {
            authors: [],
            actions: {
                saveCourse: () => {
                    return Promise.resolve()
                }
            },
            course: {
                id: "",
                title: "",
                watchHref: "",
                authorId: "",
                length: "",
                category: ""
            }
        };
        const wrapper = mount(<ManageCoursePage {...props} />);
        const saveButton = wrapper.find("input[type='submit']").last();
        expect(saveButton.prop('type')).toBe("submit");
        saveButton.simulate('click')
        expect(wrapper.state().errors.title).toBe("Title must be at least 5 characters.")
    });
});