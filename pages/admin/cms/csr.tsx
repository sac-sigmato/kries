'use client';

import React, { useState, useEffect } from 'react';
import AdminLayout from '../../../components/admin/AdminLayout';
import ProtectedRoute from '../../../components/ProtectedRoute';
import { Calendar, Edit, Plus, Trash2 } from 'lucide-react';

interface CSR {
  id: string;
  title: string;
  description: string;
  icon: string;
  investment: string;
  impact: string;
  created_at: string;
}

const AdminCSRPage: React.FC = () => {
  const [csrs, setCsrs] = useState<CSR[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingCsr, setEditingCsr] = useState<CSR | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    icon: '',
    investment: '',
    impact: ''
  });

  useEffect(() => {
    fetchCSR();
  }, []);

  const fetchCSR = async () => {
    const res = await fetch('/api/csr');
    const data = await res.json();
    setCsrs(data || []);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = editingCsr ? 'PUT' : 'POST';
    const url = editingCsr ? `/api/csr?id=${editingCsr.id}` : '/api/csr';

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    resetForm();
    await fetchCSR();
  };

  const handleEdit = (item: CSR) => {
    setEditingCsr(item);
    setFormData({
      title: item.title,
      description: item.description,
      icon: item.icon,
      investment: item.investment,
      impact: item.impact
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Delete this CSR entry?')) {
      await fetch(`/api/csr?id=${id}`, { method: 'DELETE' });
      fetchCSR();
    }
  };

  const resetForm = () => {
    setFormData({ title: '', description: '', icon: '', investment: '', impact: '' });
    setEditingCsr(null);
    setShowForm(false);
  };

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">CSR Management</h1>
              <p className="text-gray-600 mt-2">Create and manage CSR initiatives</p>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center"
            >
              <Plus className="h-4 w-4 mr-2" /> Add CSR
            </button>
          </div>

          {showForm && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900">{editingCsr ? 'Edit' : 'Add'} CSR Entry</h2>
                <button onClick={resetForm} className="text-gray-500 hover:text-gray-700">×</button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {['title', 'icon', 'investment', 'impact'].map((field) => (
                  <div key={field}>
                    <label className="block text-sm font-medium capitalize mb-1">{field.replace('_', ' ')}</label>
                    <input
                      type="text"
                      value={(formData as any)[field]}
                      onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      required={field === 'title' || field === 'icon'}
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>

                <div className="flex space-x-4">
                  <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    {editingCsr ? 'Update' : 'Create'}
                  </button>
                  <button type="button" onClick={resetForm} className="bg-gray-300 text-gray-800 px-4 py-2 rounded">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {csrs.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">{item.icon}</span>
                  <span className="text-xs text-gray-500">{new Date(item.created_at).toLocaleDateString()}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mt-2 text-sm line-clamp-3">{item.description}</p>
                <p className="text-sm text-gray-700 mt-2 font-medium">{item.investment} – {item.impact}</p>

                <div className="flex space-x-2 mt-4">
                  <button
                    onClick={() => handleEdit(item)}
                    className="flex-1 bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700"
                  >
                    <Edit className="h-4 w-4 inline mr-1" /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-600 text-white px-3 py-2 rounded text-sm hover:bg-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
};

export default AdminCSRPage;
