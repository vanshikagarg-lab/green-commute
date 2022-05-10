import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import SidebarItem from ".";
import SettingsIcon from "../../../assets/icons/settings.svg";
import theme from '../../../theme';
test("Should not render transparent backGroundColor, when not selected", () => {
  render(
    <SidebarItem text={"Hello"} icon={SettingsIcon} selected={false}/>
  );
  const textElement = screen.getByTestId("border-box");
  expect(textElement).toHaveStyle({backgroundColor: 'transparent'})
});


test("Should render primary.main500 backgroundColor, when not selected", () => {
    render(
      <SidebarItem text={"Hello"} icon={SettingsIcon} selected={true}/>
    );
    const textElement = screen.getByTestId("border-box");
    expect(textElement).toHaveStyle({backgroundColor: theme.palette.primary.main500})
  });
  test("Should not render transparent backGroundColor, when selected prop is not passed", () => {
    render(
      <SidebarItem text={"Hello"} icon={SettingsIcon} />
    );
    const textElement = screen.getByTestId("border-box");
    expect(textElement).toHaveStyle({backgroundColor: 'transparent'})
  });