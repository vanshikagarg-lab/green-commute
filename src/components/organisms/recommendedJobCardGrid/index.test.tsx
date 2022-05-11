import React from 'react';
import {screen, render} from '@testing-library/react';
import '@testing-library/jest-dom';
import RecommendedJobsGrid from '.';

test("renders recommended job grid", () => {
    render(
        <RecommendedJobsGrid setIndex={jest.fn()}></RecommendedJobsGrid>
    );
    const ReactElement = screen.getByTestId("recommendedJobGrid");
    expect(ReactElement).toBeInTheDocument();
});