import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import SkillSearch from '.';
import workIcon from "../../../assets/icons/work.svg";


const data = [
    { title: "Devops engineer" },
    { title: "Backend developer" },
    { title: "Frontend developer" },
    { title: "UI/UX developer" },
  ];

test("Should render Skill Search bar", () => {
    render(
        <SkillSearch icon={workIcon} placeholder="Skill Search" options={data}></SkillSearch>
    );
    const ReactElement = screen.getByTestId("skillSearch");
    expect(ReactElement).toBeInTheDocument();
});
