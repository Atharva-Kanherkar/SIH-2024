import React from 'react';

const ComplianceReport = () => {
  return (
    <div className="card">
      <h2>Compliance Report</h2>
      <div className="report-summary">
        <div>
          <h3>Compliant</h3>
          <p>12</p>
        </div>
        <div>
          <h3>Non-compliant</h3>
          <p className="alert">3</p>
        </div>
        <div>
          <h3>Warnings</h3>
          <p>2</p>
        </div>
      </div>
      <button className="button" onClick={() => alert('Exporting to PDF...')}>
        Export to PDF
      </button>
      <button className="button" onClick={() => alert('Exporting to CSV...')}>
        Export to CSV
      </button>
    </div>
  );
};

export default ComplianceReport;
