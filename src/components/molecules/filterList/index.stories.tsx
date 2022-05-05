import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import FilterList from '.';

export default {
    title: 'molecules/FilterList',
    component: FilterList
} as ComponentMeta<typeof FilterList>

const Template: ComponentStory<typeof FilterList> = (args) => {
    return (
        <FilterList {...args} />
    )
}

export const Default = Template.bind({});

Default.args = {
    heading: 'Distance',
    labels: ['0-10 Kms','11-20 Kms','21-30 Kms','31-40 Kms']
}