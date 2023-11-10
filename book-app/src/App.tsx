import React from "react";
import styles from "./App.module.scss";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import FavouritesDetailsPage from "./pages/FavouritesDetailsPage/FavouritesDetailsPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SideBar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className={styles.pageWrapper}>
        <SideBar />
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/details/:category" element={<DetailsPage />} />
          <Route path="/favouritesEdit" element={<FavouritesDetailsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
