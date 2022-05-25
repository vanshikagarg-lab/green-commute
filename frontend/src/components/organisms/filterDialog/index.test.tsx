import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import FilterDialog from ".";

it("should hide the box display", () => {
  render(
    <FilterDialog
        openStatus={true}
        openStatusHandler={() => {}}
        setFilters={() => {}}
        filters={[]}
    />
  );
  const checkBox = screen.getAllByTestId("checkbox-change");
  fireEvent.change(checkBox[0]);
  const clearButton = screen.getByTestId("handleClearButton");
  fireEvent.click(clearButton);
  const submitButton = screen.getByTestId("handleSubmit");
  fireEvent.click(submitButton);
});