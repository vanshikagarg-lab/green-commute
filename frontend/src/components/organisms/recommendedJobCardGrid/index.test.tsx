import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import RecommendedJobsGrid from ".";
import { Data } from "./data";

test("renders recommended job grid", () => {
  const setIndexFunc = jest.fn();
  render(
    <RecommendedJobsGrid
      setIndex={setIndexFunc}
      jobsList={Data}
    ></RecommendedJobsGrid>
  );
  const ReactElement = screen.getByTestId("recommendedJobGrid");
  const recommendedCard = screen.getAllByTestId("recommended-box");
  fireEvent.click(recommendedCard[0]);
  expect(setIndexFunc).toHaveBeenCalled();
  expect(ReactElement).toBeInTheDocument();
});
