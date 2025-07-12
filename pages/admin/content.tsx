import React from 'react';
import AdminLayout from '../../components/admin-comp/AdminLayout';
import AdminContent from '../../components/admin-comp/AdminContent';
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