import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import AdminHome from '../../components/admin/AdminHome';
import ProtectedRoute from '../../components/ProtectedRoute';

export default function AdminHomePage() {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <AdminHome />
      </AdminLayout>
    </ProtectedRoute>
  );
}