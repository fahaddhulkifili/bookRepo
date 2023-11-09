import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FavouriteIcon from "../../assets/Icons/FavouriteIcon";
import SettingsIcon from "../../assets/Icons/SettingsIcon";
import StatIcon from "../../assets/Icons/StatIcon";
import styles from "./Sidebar.module.scss";

export default function VerticalTabs() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const navigate = useNavigate();
  const handleButtonClick = (tabName: string) => {
    setActiveTab(tabName);
    navigate(`/${tabName}`);
  };

  return (
    <div className={styles.sidebarWrapper}>
      <div className={styles.sideBarInner}>
        <div className={styles.tabWrapper}>
          <Button
            className={
              activeTab === "home" ? styles.sidebarBtnActive : styles.sideBarBtn
            }
            onClick={() => handleButtonClick("home")}
          >
            <StatIcon />
          </Button>
          <Button
            className={
              activeTab === "favourites"
                ? styles.sidebarBtnActive
                : styles.sideBarBtn
            }
            onClick={() => handleButtonClick("favourites")}
          >
            <FavouriteIcon />
          </Button>
          <Button
            className={
              activeTab === "settings"
                ? styles.sidebarBtnActive
                : styles.sideBarBtn
            }
            onClick={() => handleButtonClick("settings")}
          >
            <SettingsIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
