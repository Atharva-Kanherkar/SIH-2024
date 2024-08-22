import React, { useState } from 'react';

const StartScreen = () => {
  const [os, setOs] = useState('Windows');
  const [version, setVersion] = useState('');

  const handleRunAudit = () => {
    alert(`Running audit for ${os} ${version}...`);
  };

  return (
    <div className="card">
      <h2>Start Compliance Check</h2>
      <label>
        Select OS:
        <select value={os} onChange={(e) => setOs(e.target.value)}>
          <option value="Windows">Windows</option>
          <option value="Linux">Linux</option>
        </select>
      </label>
      <label>
        Specify Version:
        <input
          type="text"
          value={version}
          placeholder="e.g., Windows 11, Ubuntu 20.04 LTS"
          onChange={(e) => setVersion(e.target.value)}
        />
      </label>
      <button className="button" onClick={handleRunAudit}>
        Run Audit
      </button>
    </div>
  );
};

export default StartScreen;
