import React from "react";
import styles from "./Sidebar.module.scss";
import StatIcon from "../../assets/Icons/StatIcon";
import FavouriteIcon from "../../assets/Icons/FavouriteIcon";
import SettingsIcon from "../../assets/Icons/SettingsIcon";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { log } from "console";

interface Props {}

export default function VerticalTabs() {
  const [homeActive, setHomeActive] = React.useState<boolean>(false);
  const [favouriteactive, setFavouriteActive] = React.useState<boolean>(false);
  const [settingActive, setSettingActive] = React.useState<boolean>(false);

  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/home");
    // setHomeActive(true);
    // console.log(homeActive, "homeActive");

    // setFavouriteActive(false);
    // setSettingActive(false);
  };
  const handleFavouriteClick = () => {
    navigate("/favourites");
    // setHomeActive(false);
    // console.log(favouriteactive, "favouriteactive");
    // setFavouriteActive(true);
    // setSettingActive(false);
  };
  const handleSettingClick = () => {
    // setHomeActive(false);
    // console.log(settingActive, "settingActive");
    // setFavouriteActive(false);
    // setSettingActive(true);
  };

  return (
    <div className={styles.sidebarWrapper}>
      <div className={styles.sideBarInner}>
        <div className={styles.tabWrapper}>
          <Button
            className={
              !homeActive ? styles.sideBarBtn : styles.sidebarBtnActive
            }
            onClick={handleHomeClick}
          >
            <StatIcon />
          </Button>
          <Button
            className={
              !favouriteactive ? styles.sideBarBtn : styles.sidebarBtnActive
            }
            onClick={handleFavouriteClick}
          >
            <FavouriteIcon />
          </Button>
          <Button
            className={
              !settingActive ? styles.sideBarBtn : styles.sidebarBtnActive
            }
            onClick={handleSettingClick}
          >
            <SettingsIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
