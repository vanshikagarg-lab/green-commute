import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import LandingStage from ".";
import Icon from "../../atoms/icon";
import DoneSvg from "../../../assets/icons/done.svg";
import theme from "../../../theme";

test("Renders First Stage", () => {
  const stage1 = {
    active: true,
    done: false,
    title: "Your Location",
    icon: <Icon src={DoneSvg} />,
    number: "1",
  };
  const stage2 = {
    active: false,
    done: false,
    title: "Job Location",
    icon: <Icon src={DoneSvg} />,
    number: "2",
  };
  const stage3 = {
    active: false,
    done: false,
    title: "Your Skills",
    icon: <Icon src={DoneSvg} />,
    number: "3",
  };

  render(<LandingStage first={stage1} second={stage2} third={stage3} />);

  const stageElementText1 = screen.getByText("Your Location");
  const stageElement1 = screen.getByText("1");

  const stageElementText2 = screen.getByText("Job Location");
  const stageElement2 = screen.getByText("2");

  expect(stageElementText1).toBeInTheDocument();
  expect(stageElementText1).toHaveStyle({
    color: theme.palette.primary.main300,
  });
  expect(stageElement1).toBeInTheDocument();
  expect(stageElement1).toHaveStyle({
    color: theme.palette.structural.main,
  });

  expect(stageElementText2).toBeInTheDocument();
  expect(stageElementText2).toHaveStyle({
    color: theme.palette.textColor.highEmphasis,
  });
  expect(stageElement2).toBeInTheDocument();
  expect(stageElement2).toHaveStyle({
    color: theme.palette.textColor.highEmphasis,
  });
});

test("Renders Second Stage", () => {
  const stage1 = {
    active: true,
    done: true,
    title: "Your Location",
    icon: <Icon src={DoneSvg} />,
    number: "1",
  };
  const stage2 = {
    active: true,
    done: false,
    title: "Job Location",
    icon: <Icon src={DoneSvg} />,
    number: "2",
  };
  const stage3 = {
    active: false,
    done: false,
    title: "Your Skills",
    icon: <Icon src={DoneSvg} />,
    number: "3",
  };

  render(<LandingStage first={stage1} second={stage2} third={stage3} />);

  const stageElementText1 = screen.getByText("Job Location");
  const stageElement1 = screen.getByText("2");

  const stageElementText2 = screen.getByText("Your Skills");
  const stageElement2 = screen.getByText("3");

  expect(stageElementText1).toBeInTheDocument();
  expect(stageElementText1).toHaveStyle({
    color: theme.palette.primary.main300,
  });

  expect(stageElement1).toBeInTheDocument();
  expect(stageElement1).toHaveStyle({
    color: theme.palette.structural.main,
  });

  expect(stageElementText2).toBeInTheDocument();
  expect(stageElementText2).toHaveStyle({
    color: theme.palette.textColor.highEmphasis,
  });
  expect(stageElement2).toBeInTheDocument();
  expect(stageElement2).toHaveStyle({
    color: theme.palette.textColor.highEmphasis,
  });
});

test("Renders Third Stage", () => {
  const stage1 = {
    active: true,
    done: true,
    title: "Your Location",
    icon: <Icon src={DoneSvg} />,
    number: "1",
  };
  const stage2 = {
    active: true,
    done: true,
    title: "Job Location",
    icon: <Icon src={DoneSvg} />,
    number: "2",
  };
  const stage3 = {
    active: true,
    done: false,
    title: "Your Skills",
    icon: <Icon src={DoneSvg} />,
    number: "3",
  };

  render(<LandingStage first={stage1} second={stage2} third={stage3} />);

  const stageElementText2 = screen.getByText("Your Skills");
  const stageElement2 = screen.getByText("3");

  expect(stageElementText2).toBeInTheDocument();
  expect(stageElementText2).toHaveStyle({
    color: theme.palette.primary.main300,
  });

  expect(stageElement2).toBeInTheDocument();
  expect(stageElement2).toHaveStyle({
    color: theme.palette.structural.main,
  });
});
