
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PropertiesPage from './pages/PropertiesPage';
import ProjectsPage from './pages/ProjectsPage';
import AvailablePage from './pages/AvailablePage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/om-oss" element={<AboutPage />} />
            <Route path="/fastigheter" element={<PropertiesPage />} />
            <Route path="/projektutveckling" element={<ProjectsPage />} />
            <Route path="/lediga-lokaler" element={<AvailablePage />} />
          </Routes>
        </div>
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
};

export default App;
