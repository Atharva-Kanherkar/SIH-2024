import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ComplianceReportPage from './pages/ComplianceReportPage';
import UpdateMechanismPage from './pages/UpdateMechanismPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compliance-report" element={<ComplianceReportPage />} />
        <Route path="/update-mechanism" element={<UpdateMechanismPage />} />
      </Routes>
    </Router>
  );
};

export default App;
