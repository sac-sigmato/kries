import React from 'react';
import AdminLayout from '../../../components/admin-comp/AdminLayout';
import AdminCMS from '../../../components/admin-comp/AdminCMS';
import ProtectedRoute from '../../../components/ProtectedRoute';

export default function AdminCMSPage() {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <AdminCMS />
      </AdminLayout>
    </ProtectedRoute>
  );
}