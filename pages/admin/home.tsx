import React from 'react';
import AdminLayout from '../../components/admin-comp/AdminLayout';
import AdminHome from '../../components/admin-comp/AdminHome';
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