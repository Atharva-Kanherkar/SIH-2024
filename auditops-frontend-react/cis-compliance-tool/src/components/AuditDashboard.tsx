import React from 'react';

const AuditDashboard = () => {
  return (
    <div className="card">
      <h2>Audit Dashboard</h2>
      <ul>
        <li>Account Policies: Compliant</li>
        <li>Network Security: Non-compliant <span className="alert">⚠</span></li>
        <li>File Integrity: Warning <span className="alert">⚠</span></li>
        <li>Audit Logs: Compliant</li>
        <li>Firewall Settings: Compliant</li>
      </ul>
    </div>
  );
};

export default AuditDashboard;
