import React from "react";
import LandingPage from "./components/pages/landingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FindJobs from "./components/pages/findJobs";
import SaveJobsPage from "./components/pages/saveJobsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/find-jobs" element={<FindJobs />} />
        <Route path="/saved-jobs" element={<SaveJobsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
