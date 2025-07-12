'use client';

import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../components/admin-comp/AdminLayout';
import ProtectedRoute from '../../../components/ProtectedRoute';
import { ArrowLeft, Plus, Trash2 } from 'lucide-react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { supabase } from '../../../lib/supabase-client';

interface CSR {
  id: number;
  created_at?: string;
  title: string;
  description: string;
  icon: string;
  investment: string;
  impact: string;
}

const iconOptions = [
  '🏫', // School
  '📚', // Books
  '💡', // Innovation / Electricity
  '🩺', // Healthcare
  '🌱', // Environment
  '🎓', // Graduation / Education
  '🧑‍🏫', // Teacher
  '💻', // Digital learning
  '🚰', // Clean water
  '🔋', // Renewable energy
  '🍎', // Nutrition
  '🧠', // Mental health
  '🏥', // Hospital
  '🚸', // Child safety
  '🧽', // Hygiene
  '🚜', // Rural development
];

const impactOptions = [
  'Improved Literacy',
  'Healthcare Access',
  'Environmental Impact',
  'Women Empowerment',
  'STEM Education',
  'Digital Inclusion',
  'Teacher Capacity Building',
  'Infrastructure Enhancement',
  'Child Nutrition Support',
  'Mental Health Awareness',
  'Renewable Energy Access',
  'Hygiene & Sanitation',
  'Skill Development',
  'Community Upliftment',
  'Educational Equity',
];

const investmentOptions = [
  '₹50,000 - ₹1,00,000',
  '₹1L - ₹5L',
  '₹5L - ₹10L',
  '₹10L - ₹25L',
  '₹25L - ₹50L',
  '₹50L - ₹1 Cr',
  '₹1 Cr+',
];

const CSRAdminPage: React.FC = () => {
  const [csrs, setCsrs] = useState<CSR[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<Omit<CSR, 'id' | 'created_at'>>({
    title: '',
    description: '',
    icon: iconOptions[0],
    investment: investmentOptions[0],
    impact: impactOptions[0]
  });

  useEffect(() => {
    fetchCSRs();
  }, []);

  const fetchCSRs = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('csr_opportunities')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast.error('Failed to load CSR data');
    } else {
      setCsrs(data || []);
    }
    setLoading(false);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      icon: iconOptions[0],
      investment: investmentOptions[0],
      impact: impactOptions[0]
    });
    setEditingId(null);
  };

  const openForm = (csr?: CSR) => {
    if (csr) {
      setFormData({
        title: csr.title,
        description: csr.description,
        icon: csr.icon,
        investment: csr.investment,
        impact: csr.impact
      });
      setEditingId(csr.id);
    } else {
      resetForm();
    }
    setShowForm(true);
  };

  const handleSubmit = async () => {
    const { title, description, icon, investment, impact } = formData;
    if (!title || !description || !icon || !investment || !impact) {
      toast.error('All fields are required');
      return;
    }

    const payload = { title, description, icon, investment, impact };

    const { data, error } = editingId
      ? await supabase.from('csr_opportunities').update(payload).eq('id', editingId).select()
      : await supabase.from('csr_opportunities').insert([payload]).select();

    if (error) {
      toast.error('Failed to save');
    } else {
      toast.success(editingId ? 'Updated successfully' : 'Added successfully');
      fetchCSRs();
      setShowForm(false);
      resetForm();
    }
  };

  const confirmDelete = (id: number) => {
    setDeleteId(id);
    setShowDeleteConfirm(true);
  };

  const handleDelete = async () => {
    if (deleteId === null) return;
    const { error } = await supabase.from('csr_opportunities').delete().eq('id', deleteId);
    if (error) {
      toast.error('Delete failed');
    } else {
      toast.success('Deleted successfully');
      fetchCSRs();
    }
    setDeleteId(null);
    setShowDeleteConfirm(false);
  };

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/admin/cms" className="text-blue-600 hover:text-blue-800 flex items-center mb-2">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to CMS
              </Link>
              <h1 className="text-3xl font-bold text-gray-900">CSR Opportunities</h1>
              <p className="text-gray-600 text-sm">Manage CSR opportunities shown on the website.</p>
            </div>
            <button
              onClick={() => openForm()}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add CSR
            </button>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {csrs.map((csr) => (
              <div key={csr.id} className="bg-white shadow p-5 rounded-lg hover:shadow-md transition">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-2xl">{csr.icon}</span>
                  <span className="text-xs text-gray-400">{csr.created_at?.slice(0, 10)}</span>
                </div>
                <h3 className="font-semibold text-lg text-gray-900">{csr.title}</h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">{csr.description}</p>
                <div className="text-sm mt-3 text-gray-700">
                  <div><b>Investment:</b> {csr.investment}</div>
                  <div><b>Impact:</b> {csr.impact}</div>
                </div>
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => openForm(csr)}
                    className="flex-1 bg-blue-600 text-white text-sm px-3 py-2 rounded hover:bg-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => confirmDelete(csr.id)}
                    className="bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* --- ADD/EDIT MODAL --- */}
          {showForm && (
           <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
           <div className="bg-white w-full max-w-lg rounded-lg p-6 space-y-4">
             <h2 className="text-xl font-semibold text-gray-800">
               {editingId ? 'Edit CSR Entry' : 'Add New CSR'}
             </h2>
         
             <div className="space-y-3">
               {/* Title */}
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                 <input
                   type="text"
                   placeholder="Enter title"
                   value={formData.title}
                   onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                   className="w-full border border-gray-300 rounded px-3 py-2"
                   required
                 />
               </div>
         
               {/* Description */}
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                 <textarea
                   placeholder="Enter description"
                   value={formData.description}
                   onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                   rows={3}
                   className="w-full border border-gray-300 rounded px-3 py-2"
                   required
                 />
               </div>
         
               {/* Icon */}
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Icon</label>
                 <select
                   value={formData.icon}
                   onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                   className="w-full border border-gray-300 rounded px-3 py-2"
                   required
                 >
                   <option value="">Select an icon</option>
                   {iconOptions.map((icon) => (
                     <option key={icon} value={icon}>{icon}</option>
                   ))}
                 </select>
               </div>
         
               {/* Investment Range */}
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Investment Range</label>
                 <select
                   value={formData.investment}
                   onChange={(e) => setFormData({ ...formData, investment: e.target.value })}
                   className="w-full border border-gray-300 rounded px-3 py-2"
                   required
                 >
                   <option value="">Select investment range</option>
                   {investmentOptions.map((opt) => (
                     <option key={opt} value={opt}>{opt}</option>
                   ))}
                 </select>
               </div>
         
               {/* Impact */}
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Expected Impact</label>
                 <select
                   value={formData.impact}
                   onChange={(e) => setFormData({ ...formData, impact: e.target.value })}
                   className="w-full border border-gray-300 rounded px-3 py-2"
                   required
                 >
                   <option value="">Select impact</option>
                   {impactOptions.map((opt) => (
                     <option key={opt} value={opt}>{opt}</option>
                   ))}
                 </select>
               </div>
             </div>
         
             <div className="flex justify-end space-x-3 pt-4">
               <button
                 onClick={() => setShowForm(false)}
                 className="text-gray-500 hover:text-gray-700"
               >
                 Cancel
               </button>
               <button
                 onClick={handleSubmit}
                 className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
               >
                 {editingId ? 'Update' : 'Add'}
               </button>
             </div>
           </div>
         </div>
         
          )}

          {/* --- DELETE CONFIRMATION --- */}
          {showDeleteConfirm && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Confirm Delete</h3>
                <p className="text-sm text-gray-600 mb-6">Are you sure you want to delete this CSR entry?</p>
                <div className="flex justify-end gap-3">
                  <button onClick={() => setShowDeleteConfirm(false)} className="text-gray-500 hover:text-gray-700">Cancel</button>
                  <button
                    onClick={handleDelete}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
};

export default CSRAdminPage;
