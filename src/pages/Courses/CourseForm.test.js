import expect from "expect";
import React from "react";
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
    let renderer = TestUtils.createRenderer();
    renderer.render(<CourseForm {...props} />);
    let output = renderer.getRenderOutput();

    return {
        props,
        output,
        renderer
    };
}

describe("Check that CourseForm", () => {
    it("renders form and H1 tag", () => {
        const {output} = setup(false);

        expect(output.type).toBe("div");
    });

    it("save button has label 'Save' when not saving", () => {
        const {output} = setup(false);
        let form = output.props.children[1];
        expect(form.type).toBe("form");
        let button = form.props.children[4];
        expect(button.props.value).toBe("Save");
    });

    it("save button has label 'Saving' when saving", () => {
        const {output} = setup(true);
        let form = output.props.children[1];
        console.debug(form.props);
        let button = form.props.children[4];

        expect(button.props.value).toBe("Saving");
    });
});