import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import RecommendedJobCard from "./index";
import Logo from "../../../assets/images/myntraLogo.png";

test("expect to have logo and company name and address", () => {
  const vehicle = {
    bus: true,
    train: true,
    car: true,
    bike: true,
  };
  render(
    <RecommendedJobCard
      jobId={1}
      logo={Logo}
      height="320px"
      width="271px"
      jobName="User Experience Designer"
      companyName="Myntra"
      companyAddress="Hyderabad, Telangana, India"
      routesTitle="Commute routes available :"
      vehicle={vehicle}
      time="45 min ago"
    />
  );

  const logoElement = screen.getByAltText(/logo not found/i);
  const comapanyNameElement = screen.getByText("Myntra");
  const companyAddressElement = screen.getByText("Hyderabad, Telangana, India");

  expect(logoElement).toBeInTheDocument();
  expect(comapanyNameElement).toBeInTheDocument();
  expect(companyAddressElement).toBeInTheDocument();
});

test("expect to display only icons in vehicle where the value is true", () => {
  const vehicle = {
    bus: false,
    train: false,
    car: false,
    bike: false,
  };
  render(
    <RecommendedJobCard
      jobId={1}
      logo={Logo}
      height="320px"
      width="271px"
      jobName="User Experience Designer"
      companyName="Myntra"
      companyAddress="Hyderabad, Telangana, India"
      routesTitle="Commute routes available :"
      vehicle={vehicle}
      time="45 min ago"
    />
  );

  let vehicleIcons = screen.queryAllByTestId("vehicle-icon");
  expect(vehicleIcons.length).toBe(0);
});
