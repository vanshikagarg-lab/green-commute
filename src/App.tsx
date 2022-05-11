import React from "react";
import LandingPage from "./components/pages/landingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search-jobs" />
      </Routes>
    </Router>
  );
};

export default App;
