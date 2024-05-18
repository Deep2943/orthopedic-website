import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as Constants from './config/constants';
import './pages/layout';
import Home from './pages/home.js';
import About from './pages/about.js';
import Contact from './pages/contact-us.js';
import Error404 from './pages/error-404.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import './css/common.css';
import './css/style.css';
import './js/script.js';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path={Constants.LANDING_PAGE_URL} element={<Home />} />
        <Route path={Constants.HOME_PAGE_URL} element={<Home />} />
        <Route path={Constants.ABOUT_PAGE_URL} element={<About />} />
        <Route path={Constants.CONTACT_PAGE_URL} element={<Contact />} />
        <Route path="*" element={<Error404 />} />
    </Routes>
  </BrowserRouter>
  );
}