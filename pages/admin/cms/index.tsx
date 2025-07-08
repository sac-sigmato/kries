import React from 'react';
import AdminLayout from '../../../components/admin/AdminLayout';
import AdminCMS from '../../../components/admin/AdminCMS';
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