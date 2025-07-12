import React from 'react';
import AdminLayout from '../../components/admin-comp/AdminLayout';
import AdminUsers from '../../components/admin-comp/AdminUsers';
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