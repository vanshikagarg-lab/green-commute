import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {render, screen} from "@testing-library/react";
import CheckBox from ".";

it("renders a checkbox", () => {
    render(<CheckBox />);
    const ReactElement = screen.getByTestId("checkbox");
    expect(ReactElement).toBeInTheDocument();
});