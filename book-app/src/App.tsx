import React from "react";
import "./App.scss";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import FavouritePage from "./pages/FavouritePage/FavouritePage";
import FavouritesDetailsPage from "./pages/FavouritesDetailsPage/FavouritesDetailsPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/favourites" element={<FavouritePage />} />
        <Route path="/favouritesEdit" element={<FavouritesDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
