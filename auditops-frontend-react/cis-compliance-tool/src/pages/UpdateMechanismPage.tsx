import React from 'react';

const UpdateMechanismPage = () => {
  return (
    <div className="flex h-screen">
      <div className="sidebar">
        <h2>Compliance Tool</h2>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/compliance-report">Compliance Report</a></li>
            <li><a href="/update-mechanism">Update Scripts</a></li>
          </ul>
        </nav>
      </div>
      <div className="content">
        <div className="card">
          <h2>Update Scripts</h2>
          <p>Automated script updates are enabled through Jenkins integration.</p>
          <button className="button">Update Now</button>
        </div>
      </div>
    </div>
  );
};

export default UpdateMechanismPage;
