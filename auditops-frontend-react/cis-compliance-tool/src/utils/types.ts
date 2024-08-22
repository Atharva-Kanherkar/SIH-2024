export interface AuditResults {
    compliant: number;
    nonCompliant: number;
    warnings: number;
    details: string[];
  }
  
  export type OsType = 'Windows' | 'Linux';
  