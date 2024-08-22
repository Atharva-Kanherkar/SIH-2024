import React, { useState } from 'react';
import Papa from 'papaparse';
import jsPDF from 'jspdf';

const ComplianceReportPage = () => {
  const [reportData, setReportData] = useState<{ title: string; content: string[] } | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchReportData = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setReportData({
        title: 'Compliance Report for Windows 11',
        content: [
          'Firewall is enabled: Yes',
          'Password policies enforced: No',
          'Anti-virus software installed: Yes',
          'Automatic updates enabled: No',
          'Unnecessary services: Disabled'
        ]
      });
    }, 2000); // Simulate a delay in fetching data
  };

  const exportToCSV = () => {
    if (reportData) {
      const csv = Papa.unparse({
        fields: ['Issue', 'Status'],
        data: reportData.content.map(item => [item, ''])
      });
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'compliance-report.csv';
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  const exportToPDF = () => {
    if (reportData) {
      const doc = new jsPDF();
      doc.setFontSize(16);
      doc.text(reportData.title, 10, 10);
      doc.setFontSize(12);
      reportData.content.forEach((line, index) => {
        doc.text(line, 10, 20 + index * 10);
      });
      doc.save('compliance-report.pdf');
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/4 bg-gray-800 text-white p-4">
        <h2 className="text-2xl mb-4">Compliance Tool</h2>
        <nav>
          <ul>
            <li><a href="/" className="block py-2 hover:bg-gray-700">Home</a></li>
            <li><a href="/compliance-report" className="block py-2 bg-gray-700">Compliance Report</a></li>
            <li><a href="/update-mechanism" className="block py-2 hover:bg-gray-700">Update Scripts</a></li>
          </ul>
        </nav>
      </div>
      <div className="w-3/4 p-4">
        <div className="bg-white p-6 rounded shadow-md mb-4">
          <h2 className="text-xl font-semibold mb-4">Compliance Report</h2>
          <button 
            className={`w-full p-2 text-white rounded ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'}`}
            onClick={fetchReportData}
            disabled={loading}
          >
            {loading ? 'Loading Report...' : 'View Report'}
          </button>
          {reportData && (
            <div className="mt-4 p-4 border rounded bg-gray-50">
              <h3 className="text-lg font-semibold">{reportData.title}</h3>
              <ul className="list-disc pl-5 mt-2">
                {reportData.content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="mt-4 flex gap-4">
                <button
                  className="w-full p-2 text-white rounded bg-blue-500 hover:bg-blue-600"
                  onClick={exportToCSV}
                >
                  Export to CSV
                </button>
                <button
                  className="w-full p-2 text-white rounded bg-red-500 hover:bg-red-600"
                  onClick={exportToPDF}
                >
                  Export to PDF
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComplianceReportPage;
