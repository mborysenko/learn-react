import React from "react";
import expect from "expect";

import {authorsFormattedForDropdown} from "./authorsFormattedForDropdown";

describe('Author Selectors', function () {
    describe('authorsFormattedForDropdown', function () {
        it("should return author data to be used in a dropdown", () => {
            let actual = [
                {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
                {id: 'scott-allen', firstName: 'Scott', lastName: 'Allen'}
            ];
            let expected = [
                {value: 'cory-house', text: 'Cory House'},
                {value: 'scott-allen', text: 'Scott Allen'}
            ];

            expect(authorsFormattedForDropdown(actual)).toEqual(expected);
        });
    });
});

