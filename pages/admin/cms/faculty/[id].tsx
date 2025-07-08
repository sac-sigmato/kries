import React from 'react';
import AdminLayout from '../../../../components/admin/AdminLayout';
import FacultyEditor from '../../../../components/admin/FacultyEditor';
import ProtectedRoute from '../../../../components/ProtectedRoute';

export default function FacultyEditorPage() {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <FacultyEditor />
      </AdminLayout>
    </ProtectedRoute>
  );
}