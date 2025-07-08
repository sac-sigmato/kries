import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import AdminContent from '../../components/admin/AdminContent';
import ProtectedRoute from '../../components/ProtectedRoute';

export default function AdminContentPage() {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <AdminContent />
      </AdminLayout>
    </ProtectedRoute>
  );
}