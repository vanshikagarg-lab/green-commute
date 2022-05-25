import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import JobList from ".";
import MyntraLogo from "../../../assets/images/myntraaLogo.svg";
import BMWLogo from "../../../assets/images/bmwLogo.svg";
import InstagramLogo from "../../../assets/images/instagramLogo.svg";

export default {
  title: "Organisms/JobList",
  component: JobList,
} as ComponentMeta<typeof JobList>;

const Template: ComponentStory<typeof JobList> = args => <JobList {...args} />;

export const JobListFilters = Template.bind({});
JobListFilters.args = {
  cardProps: [
    {
      "jobId": 1,
      "designation": "User Experience Designer",
      "companyLogo": MyntraLogo,
      "companyName": "Myntra",
      "companyAddress": "Hitech city, Hyderabad - 500072",
      "posted": "36 min ago",
      "routes": {
        "bike": true,
        "bus": true,
        "train": true,
        "car": false
      },
      "distance": 5,
      "skill": "Graphic Designer",
      "saved": false
    },
    {
      "jobId": 2,
      "designation": "Product Designer",
      "companyLogo": BMWLogo,
      "companyName": "BMW",
      "companyAddress": "Hitech city, Hyderabad - 500072",
      "posted": "10 days ago",
      "routes": {
        "bike": true,
        "bus": true,
        "car": true,
        "train": true
      },
      "distance": 5,
      "skill": "Graphic Designer",
      "saved": false
    },
    {
      "jobId": 3,
      "designation": "User Experience Designer",
      "companyLogo": InstagramLogo,
      "companyName": "Instagram",
      "companyAddress": "Mumbai",
      "posted": "45 days ago",
      "routes": {
        "bike": true,
        "car": true,
        "bus": false,
        "train": false
      },
      "distance": 15,
      "skill": "Graphic Designer",
      "saved": false
    }
  ],
  filterProps:
    [
      { label: "10-20 kms", deleteHandler: () => {} },
      { label: "Past 24 hrs", deleteHandler: () => {} },
      { label: "Full time", deleteHandler: () => {} },
      { label: "Fresher", deleteHandler: () => {} },
      { label: "Green Commute Routes", deleteHandler: () => {} },
    ],
    currentLocation: "Hyderabad",
    selectedIndex: 0
};

export const Default = Template.bind({});
Default.args = {
  cardProps: [ {
    "jobId": 1,
    "designation": "User Experience Designer",
    "companyLogo": MyntraLogo,
    "companyName": "Myntra",
    "companyAddress": "Hitech city, Hyderabad - 500072",
    "posted": "36 min ago",
    "routes": {
      "bike": true,
      "bus": true,
      "train": true,
      "car": false
    },
    "distance": 5,
    "skill": "Graphic Designer",
    "saved": false
  },
  {
    "jobId": 2,
    "designation": "Product Designer",
    "companyLogo": BMWLogo,
    "companyName": "BMW",
    "companyAddress": "Hitech city, Hyderabad - 500072",
    "posted": "10 days ago",
    "routes": {
      "bike": true,
      "bus": true,
      "car": true,
      "train": true
    },
    "distance": 5,
    "skill": "Graphic Designer",
    "saved": false
  },
  {
    "jobId": 3,
    "designation": "User Experience Designer",
    "companyLogo": InstagramLogo,
    "companyName": "Instagram",
    "companyAddress": "Mumbai",
    "posted": "45 days ago",
    "routes": {
      "bike": true,
      "car": true,
      "bus": false,
      "train": false
    },
    "distance": 15,
    "skill": "Graphic Designer",
    "saved": false
  }],
  filterProps:[],
  currentLocation: "Hyderabad",
  selectedIndex: 0
};
