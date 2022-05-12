import React from "react";
import LandingPage from "./components/pages/landingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FindJobs from "./components/pages/findJobs";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/find-jobs" element={<FindJobs />}/>
      </Routes>
    </Router>
  );
};

export default App;
