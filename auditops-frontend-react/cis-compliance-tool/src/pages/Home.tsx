import React, { useState } from 'react';

const Home = () => {
  const [os, setOS] = useState<string>('none');
  const [loading, setLoading] = useState<boolean>(false);
  const [auditResults, setAuditResults] = useState<{ status: string; issues: string[] } | null>(null);

  const handleOSChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOS(event.target.value);
    setAuditResults(null); // Clear previous results
  };

  const getDummyData = (os: string) => {
    switch (os) {
      case 'windows':
        return [
          'Windows 11', 'Version 21H2', 'Build 22000.1234',
          'Issue: Ensure firewall is enabled',
          'Issue: Password policies are not enforced'
        ];
      case 'linux':
        return [
          'Ubuntu 20.04 LTS', 'Kernel 5.4.0', 'GNOME 3.36',
          'Issue: Root login is enabled',
          'Issue: Unnecessary services running'
        ];
      default:
        return [];
    }
  };

  const runAudit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAuditResults({
        status: 'Non-compliant',
        issues: [
          'Firewall is not enabled',
          'Password policies are not enforced'
        ]
      });
    }, 2000); // Simulates a 2-second audit process
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/4 bg-gray-800 text-white p-4">
        <h2 className="text-2xl mb-4">Compliance Tool</h2>
        <nav>
          <ul>
            <li><a href="/" className="block py-2 hover:bg-gray-700">Home</a></li>
            <li><a href="/compliance-report" className="block py-2 hover:bg-gray-700">Compliance Report</a></li>
            <li><a href="/update-mechanism" className="block py-2 hover:bg-gray-700">Update Scripts</a></li>
          </ul>
        </nav>
      </div>
      <div className="w-3/4 p-4">
        <div className="bg-white p-6 rounded shadow-md mb-4">
          <h2 className="text-xl font-semibold mb-4">Select Operating System</h2>
          <select
            className="w-full p-2 border rounded bg-gray-50"
            onChange={handleOSChange}
            value={os}
          >
            <option value="none" disabled>Select OS</option>
            <option value="windows">Windows</option>
            <option value="linux">Linux</option>
          </select>
        </div>
        {os !== 'none' && (
          <div className="bg-white p-6 rounded shadow-md mb-4">
            <h2 className="text-xl font-semibold mb-4">Operating System Details</h2>
            <ul className="list-disc pl-5 mb-4">
              {getDummyData(os).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <button 
              className={`w-full p-2 text-white rounded ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
              onClick={runAudit}
              disabled={loading}
            >
              {loading ? 'Running Audit...' : 'Run Audit'}
            </button>
            {auditResults && (
              <div className="mt-4 p-4 border rounded bg-gray-50">
                <h3 className="text-lg font-semibold">Audit Results:</h3>
                <p className="font-medium text-red-600">Status: {auditResults.status}</p>
                <ul className="list-disc pl-5 mt-2">
                  {auditResults.issues.map((issue, index) => (
                    <li key={index}>{issue}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
