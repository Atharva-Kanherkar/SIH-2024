import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>CIS Compliance Tool</h2>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/compliance-report">Compliance Report</Link></li>
          <li><Link to="/update-mechanism">Update Scripts</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
