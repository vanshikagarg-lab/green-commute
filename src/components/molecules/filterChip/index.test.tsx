import React from 'react';
import { render,screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FilterChip from '.';


test("Should render a filter chip", () => {
    render(
        <FilterChip label={"10-20 kms"} backgroundColor={true}></FilterChip>
    );
    const ReactElement = screen.getByTestId("filter-chip");
    expect(ReactElement).toBeInTheDocument();
});
