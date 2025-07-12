import React from 'react';
import AdminLayout from '../../../../components/admin-comp/AdminLayout';
import FacultyList from '../../../../components/admin-comp/FacultyList';
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