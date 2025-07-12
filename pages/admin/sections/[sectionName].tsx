import React from 'react';
import { useRouter } from 'next/router';
import AdminLayout from '../../../components/admin-comp/AdminLayout';
import SectionEditor from '../../../components/admin-comp/SectionEditor';
import ProtectedRoute from '../../../components/ProtectedRoute';

export default function SectionEditorPage() {
  const router = useRouter();
  const { sectionName } = router.query;

  return (
    <ProtectedRoute>
      <AdminLayout>
        <SectionEditor sectionName={sectionName as string} />
      </AdminLayout>
    </ProtectedRoute>
  );
}