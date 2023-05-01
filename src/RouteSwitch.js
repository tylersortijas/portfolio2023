import React from "react";
import { Routes, Route, HashRouter, Link } from "react-router-dom";
import LandingPage from "./components/LandingPage";

function RouteSwitch() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </HashRouter>
  );
}

export default RouteSwitch;
