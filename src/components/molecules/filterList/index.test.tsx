import React from "react";
import {screen, render} from '@testing-library/react';
import '@testing-library/jest-dom';
import FilterList from ".";

test("render a filter list", () => {
    render(
        <FilterList 
            heading="Distance" 
            labels={['0-10 Kms', '11-20 Kms', '21-30 Kms', '31-40 Kms']}></FilterList>
    );
    const ReactElement = screen.getByTestId("filterList");
    expect(ReactElement).toBeInTheDocument();
});