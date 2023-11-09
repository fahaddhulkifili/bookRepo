import React from "react";
import "./App.scss";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import FavouritePage from "./pages/FavouritePage/FavouritePage";
import FavouritesDetailsPage from "./pages/FavouritesDetailsPage/FavouritesDetailsPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/details/:category" element={<DetailsPage />} />
        <Route path="/favourites" element={<FavouritePage />} />
        <Route path="/favouritesEdit" element={<FavouritesDetailsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </>
  );
}

export default App;
