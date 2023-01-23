import React from "react";
import FrameOne from "pages/FrameOne";
import About from "pages/About";
import NavBar from "pages/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/about" element={<About />} />
        <Route path="/frameone" element={<FrameOne />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
