import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import JobListCard from "./index";
import Logo from "../../../assets/images/myntraLogo.png"
import theme from '../../../theme';
test("border should not be rendered when selected = false", () => {
    const vehicle = {
        bus: true,
        train: true,
        car: true,
        bike: true
    }
  render(
    <JobListCard 
        jobId={1}
        height='159px'
        width='571px'
        logo={Logo}
        jobName="User Experience Designer"
        companyName="Myntra"
        companyAddress="Hitech city, Hyderabad - 500072"
        vehicle={vehicle}
        time="36 min ago"
        selected={false}
    />
  )
  let parentBoxElement = screen.getByTestId("job-1");
  expect(parentBoxElement).toHaveStyle({
    border: 'none'
  });
});


test("border should be rendered when selected = true", () => {
    const vehicle = {
        bus: true,
        train: true,
        car: true,
        bike: true
    }
  render(
    <JobListCard 
        jobId={1}
        height='159px'
        width='571px'
        logo={Logo}
        jobName="User Experience Designer"
        companyName="Myntra"
        companyAddress="Hitech city, Hyderabad - 500072"
        vehicle={vehicle}
        time="36 min ago"
        selected={true}
    />
  )
  let parentBoxElement = screen.getByTestId("job-1");
  expect(parentBoxElement).toHaveStyle({
    border: `2px solid ${theme.palette.primary.main200}`
  });
});



test("count of icons should be depending on vehicle keys value = true", () => {
    const vehicle = {
        bus: false,
        train: false,
        car: false,
        bike: false
    }
  render(
    <JobListCard 
        jobId={1}
        height='159px'
        width='571px'
        logo={Logo}
        jobName="User Experience Designer"
        companyName="Myntra"
        companyAddress="Hitech city, Hyderabad - 500072"
        vehicle={vehicle}
        time="36 min ago"
    />
  )
  let vehicleIcons = screen.queryAllByTestId("vehicle-icon")
  expect(vehicleIcons.length).toBe(0);
});

