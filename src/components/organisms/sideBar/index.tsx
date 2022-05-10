import { Box, Divider } from "@mui/material";
import React, { useState } from "react";
import TreeItem from "../../molecules/sidebarItem";
import THEME from "../../../theme";

type Props = {
  list1: any;
  list2: any;
};

const sideBar = ({ list1, list2 }: Props) => {
  const [list1Selected, setList1Selected] = useState(1);
  const [list2Selected, setList2Selected] = useState(-1);

  const list1Clicked = (index: number) => {
    setList1Selected(index);
    setList2Selected(-1);
    list1[index].onClick();
  };

  const list2Clicked = (index: number) => {
    setList1Selected(-1);
    setList2Selected(index);
    list2[index].onClick();
  };

  return (
    <Box
      width={"fit-content"}
      sx={{ boxShadow: "0px 2px 8px rgba(125, 125, 125, 0.12);" }}
      bgcolor={THEME.palette.structural.main}
      display={"flex"}
      flexDirection={"column"}
      pt={5}
      data-testid={"side-bar"}
    >
      {list1.map((item: any, index: number) => (
        <TreeItem
          selected={index == list1Selected}
          text={item.text}
          icon={item.icon}
          mb={2}
          pl={5.25}
          onClick={() => {
            list1Clicked(index);
          }}
          sx={{ cursor: "pointer" }}
        />
      ))}
      <Divider
        sx={{ marginBottom: "16px", marginLeft: "32px", marginRight: "32px" }}
      />
      {list2.map((item: any, index: number) => (
        <TreeItem
          selected={index == list2Selected}
          text={item.text}
          icon={item.icon}
          mb={2}
          pl={5.25}
          onClick={() => {
            list2Clicked(index);
          }}
          sx={{ cursor: "pointer" }}
        />
      ))}
    </Box>
  );
};

export default sideBar;
