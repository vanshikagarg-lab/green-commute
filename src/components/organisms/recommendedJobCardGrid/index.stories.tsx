import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import RecommendedJobsGrid from '.';

export default {
    title: 'organisms/RecommendedJobsGrid',
    component: RecommendedJobsGrid
} as ComponentMeta<typeof RecommendedJobsGrid>

const Template: ComponentStory<typeof RecommendedJobsGrid> = () => {
    return (
        <RecommendedJobsGrid />
    )
}

export const Default = Template.bind({});