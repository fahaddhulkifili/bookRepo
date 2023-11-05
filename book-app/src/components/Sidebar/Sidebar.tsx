import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "./Sidebar.module.scss";
import StatIcon from "../../assets/Icons/StatIcon";
import FavouriteIcon from "../../assets/Icons/FavouriteIcon";
import SettingsIcon from "../../assets/Icons/SettingsIcon";
import BookInfo from "../BookInfo/BookInfo";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      className={styles.tabpanelContainer}
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className={styles.tabContainerWrapper}>{children}</Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={styles.sidebarWrapper}>
      <div style={{ display: "flex" }}>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs"
          className={styles.tabWrapper}
          centered={true}
          sx={{
            "& button": { borderRadius: "0px 15px 15px 0px" },
            ".Mui-selected": {
              background: "linear-gradient(180deg, #679cf6 0%, #4072ee 100%)",
            },
            ".Mui-selected svg path": { fill: "#fff" },
            ".Mui-selected .favIcon path": { fill: "none", stroke: "#fff" },
          }}
          TabIndicatorProps={{
            style: {
              display: "none",
            },
          }}
        >
          <Tab icon={<StatIcon />} {...a11yProps(0)} />
          <Tab icon={<FavouriteIcon />} {...a11yProps(1)} />
          <Tab icon={<SettingsIcon />} {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <BookInfo />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </div>
    </div>
  );
}
