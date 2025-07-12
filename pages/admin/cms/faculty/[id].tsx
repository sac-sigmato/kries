import React from 'react';
import AdminLayout from '../../../../components/admin-comp/AdminLayout';
import FacultyEditor from '../../../../components/admin-comp/FacultyEditor';
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