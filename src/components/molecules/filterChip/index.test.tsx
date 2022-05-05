import React from 'react';
import { render,screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import FilterChip from '.';
import theme from '../../../theme';


test("Should render a filter chip", () => {
    render(
        <FilterChip label={"10-20 kms"} backgroundColor={true} deleteHandler={() => jest.fn()}></FilterChip>
    );
    const ReactElement = screen.getByTestId("filter-chip");
    expect(ReactElement).toBeInTheDocument();
});

test("Should take default background color if background = false", () => {
    render(
        <FilterChip label={"10-20 kms"} backgroundColor={false} deleteHandler={() => jest.fn()}></FilterChip>
    );
    const ReactElement = screen.getByTestId("filter-chip");
    expect(ReactElement).toHaveStyle({backgroundColor: theme.palette.structural.main});
});

test("Click on the delete icon", () => {
    render(
        <FilterChip label={"10-20 kms"} backgroundColor={false} deleteHandler={() => jest.fn()}></FilterChip>
    );
    const ReactElement = screen.getByTestId("icon");
    fireEvent.click(ReactElement);
});