import React from "react";
import MainHeader from "./components/MainHeader";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import IndustriesPage from "./pages/IndustriesPage";
import ServicesPage from "./pages/ServicesPage";

function App() {
  return (
    <div className="w-10/12 m-auto">
      <MainHeader />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </div>
  );
}

export default App;
