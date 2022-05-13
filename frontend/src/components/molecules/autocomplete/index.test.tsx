import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import AutoComplete from ".";

const data = [
  { title: "Devops engineer" },
  { title: "Backend developer" },
  { title: "Frontend developer" },
  { title: "UI/UX developer" },
];

test("checks the on change of input", async () => {
  render(
    <AutoComplete
      options={data}
      placeholder="Enter your skills"
      getOptionLabel={(option: any) => option.title}
      value={undefined}
      onChange={undefined}
      deleteOptions={jest.fn()}
    />
  );
  const input = screen.getByRole("combobox");
  fireEvent.focus(input);
  fireEvent.change(input, { target: { value: "Devops engineer" } });
  fireEvent.keyDown(input, { key: "ArrowDown" });
  fireEvent.keyDown(input, { key: "Enter" });
  const chips = screen.getAllByTestId("filter-chip");
  expect(chips.length).toBe(1);
  const ReactElement = screen.getByTestId("icon");
  fireEvent.click(ReactElement);
});
