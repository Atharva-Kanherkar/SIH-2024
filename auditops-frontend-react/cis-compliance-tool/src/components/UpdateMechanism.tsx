import React from 'react';

const UpdateMechanism = () => {
  return (
    <div className="card">
      <h2>Update Scripts</h2>
      <p>Automated script updates are enabled. You will be notified if new CIS benchmarks are available.</p>
      <button className="button" onClick={() => alert('Checking for updates...')}>
        Check for Updates
      </button>
    </div>
  );
};

export default UpdateMechanism;
