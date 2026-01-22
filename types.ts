
export interface User {
  id: string;
  name: string;
  email: string;
  timeAgo: string;
}

export interface UserManagementItem {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Inactive';
  createdOn: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
}

export interface StatMetric {
  title: string;
  value: string;
  increase: number;
  iconType: 'users' | 'subscriptions' | 'revenue';
}

export interface PolicyItem {
  version: string;
  createdBy: string;
  createdDate: string;
  updatedOn: string;
}
