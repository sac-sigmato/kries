import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import AdminUsers from '../../components/admin/AdminUsers';
import ProtectedRoute from '../../components/ProtectedRoute';

export default function AdminUsersPage() {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <AdminUsers />
      </AdminLayout>
    </ProtectedRoute>
  );
}