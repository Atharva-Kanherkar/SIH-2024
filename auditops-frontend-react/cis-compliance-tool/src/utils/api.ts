import axios from 'axios';

export const runAudit = async (os: string, version: string) => {
  return axios.post('/api/audit', { os, version });
};

export const fetchAuditResults = async () => {
  return axios.get('/api/results');
};
