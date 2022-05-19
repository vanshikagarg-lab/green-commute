import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import SkillSearch from '.';
import workIcon from "../../../assets/icons/work.svg";
import {skills} from "../../../constants"

test("Should render Skill Search bar", () => {
    render(
        <SkillSearch icon={workIcon} placeholder="Skill Search" options={skills}></SkillSearch>
    );
    const ReactElement = screen.getByTestId("skillSearch");
    expect(ReactElement).toBeInTheDocument();
});
