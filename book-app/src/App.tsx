import React from "react";
import "./App.scss";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
// import Header from "./components/Header/Header";
// import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
