import React from 'react';
import AdminLayout from '../../../../components/admin/AdminLayout';
import FacultyList from '../../../../components/admin/FacultyList';
import ProtectedRoute from '../../../../components/ProtectedRoute';

export default function FacultyListPage() {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <FacultyList />
      </AdminLayout>
    </ProtectedRoute>
  );
}