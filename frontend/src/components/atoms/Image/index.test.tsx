import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {render, screen} from "@testing-library/react";
import Image from ".";
const logoImage = require("../../../assets/images/myntraLogo.png");

it("renders an image", () => {
    render(<Image id="logo" source={logoImage} altText="logo" />);
    const ReactElement = screen.getByTestId("image");
    expect(ReactElement).toBeInTheDocument();

});
