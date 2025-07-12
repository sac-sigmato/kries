import React from 'react';
import AdminLayout from '../../components/admin-comp/AdminLayout';
import AdminDashboard from '../../components/admin-comp/AdminDashboard';
import ProtectedRoute from '../../components/ProtectedRoute';

export default function AdminDashboardPage() {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <AdminDashboard />
      </AdminLayout>
    </ProtectedRoute>
  );
}