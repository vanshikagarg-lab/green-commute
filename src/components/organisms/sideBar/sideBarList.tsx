import Dashboard from "../../../assets/icons/dashboard.svg";
import Work from "../../../assets/icons/work.svg";
import Test from "../../../assets/icons/test.svg";
import News from "../../../assets/icons/news.svg";
import Help from "../../../assets/icons/help.svg";
import Contact from "../../../assets/icons/contact.svg";
import Settings from "../../../assets/icons/settings.svg";

export const list1 = [
  {
    text: "Dashboard",
    icon: Dashboard,
    onClick: () => {console.log("clicked")},
  },
  {
    text: "Saved Jobs",
    icon: Work,
    onClick: () => {console.log("clicked")},
  },
  {
    text: "Practice Test",
    icon: Test,
    onClick: () => {console.log("clicked")},
  },
  {
    text: "News & Events",
    icon: News,
    onClick: () => {console.log("clicked")},
  },
];

export const list2 = [
  {
    text: "Need Help ?",
    icon: Help,
    onClick: () => {console.log("clicked")},
  },
  {
    text: "Contact us",
    icon: Contact,
    onClick: () => {console.log("clicked")},
  },
  {
    text: "Settings",
    icon: Settings,
    onClick: () => {console.log("clicked")},
  },
];
