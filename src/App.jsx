import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ExploreBrands from "./components/ExploreBrands";
import FeaturedModels from "./components/FeaturedModels";
import VehicleTypes from "./components/VehicleTypes";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage";
import SubaruPage from "./components/SubaruPage";
import SuzukiPage from "./components/SuzukiPage";
import GWMPage from "./components/GWMPage";
import FinancingPage from "./components/FinancingPage";

function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ExploreBrands />
      <FeaturedModels />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/subaru" element={<SubaruPage />} />
          <Route path="/suzuki" element={<SuzukiPage />} />
          <Route path="/gwm" element={<GWMPage />} />
          <Route path="/financiamiento" element={<FinancingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
