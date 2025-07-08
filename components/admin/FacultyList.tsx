import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Plus, Edit, Trash2, Eye, EyeOff, Search, Filter } from 'lucide-react';

interface FacultyMember {
  id: string;
  name: string;
  position: string;
  department: string;
  qualification: string;
  experience: string;
  specialization: string;
  image_url?: string;
  email?: string;
  phone?: string;
  achievements: string[];
  bio?: string;
  order_index: number;
  is_active: boolean;
}

const FacultyList: React.FC = () => {
  const [facultyMembers, setFacultyMembers] = useState<FacultyMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const departments = [
    { id: '', name: 'All Departments' },
    { id: 'administration', name: 'Administration' },
    { id: 'academics', name: 'Academic Affairs' },
    { id: 'science', name: 'Science & Mathematics' },
    { id: 'languages', name: 'Languages' },
    { id: 'social', name: 'Social Sciences' },
    { id: 'arts', name: 'Arts & Culture' },
    { id: 'sports', name: 'Physical Education' },
    { id: 'counseling', name: 'Student Counseling' },
  ];

  useEffect(() => {
    fetchFacultyMembers();
  }, []);

  const fetchFacultyMembers = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/faculty');
      if (response.ok) {
        const data = await response.json();
        setFacultyMembers(data);
      }
    } catch (error) {
      console.error('Error fetching faculty members:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleActive = async (id: string, isActive: boolean) => {
    try {
      const response = await fetch(`/api/faculty?id=${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ is_active: !isActive }),
      });

      if (response.ok) {
        await fetchFacultyMembers();
      }
    } catch (error) {
      console.error('Error toggling faculty status:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this faculty member?')) {
      try {
        const response = await fetch(`/api/faculty?id=${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          await fetchFacultyMembers();
        }
      } catch (error) {
        console.error('Error deleting faculty member:', error);
      }
    }
  };

  const filteredFaculty = facultyMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = !selectedDepartment || member.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const getDepartmentName = (departmentId: string) => {
    const dept = departments.find(d => d.id === departmentId);
    return dept?.name || departmentId;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Faculty Management</h1>
          <p className="text-gray-600 mt-2">Manage faculty members and their profiles</p>
        </div>
        <Link
          href="/admin/cms/faculty/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Faculty
        </Link>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Search by name, position..."
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {departments.map((dept) => (
                <option key={dept.id} value={dept.id}>{dept.name}</option>
              ))}
            </select>
          </div>
          <div className="flex items-end">
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedDepartment('');
              }}
              className="w-full bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      {/* Faculty List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFaculty.map((faculty) => (
          <div key={faculty.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              {faculty.image_url ? (
                <img
                  src={faculty.image_url}
                  alt={faculty.name}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">No Image</span>
                </div>
              )}
              <div className="absolute top-4 right-4">
                <span className={`px-2 py-1 text-xs font-semibold rounded ${
                  faculty.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {faculty.is_active ? 'Active' : 'Inactive'}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-1">{faculty.name}</h3>
              <p className="text-blue-600 font-semibold mb-2">{faculty.position}</p>
              <p className="text-gray-600 text-sm mb-3">{faculty.qualification}</p>
              <p className="text-gray-500 text-sm mb-3">Department: {getDepartmentName(faculty.department)}</p>
              
              <div className="flex space-x-2 mt-4">
                <button
                  onClick={() => handleToggleActive(faculty.id, faculty.is_active)}
                  className="flex-1 bg-gray-200 text-gray-700 px-3 py-2 rounded text-sm hover:bg-gray-300 transition-colors flex items-center justify-center"
                >
                  {faculty.is_active ? <EyeOff className="h-4 w-4 mr-1" /> : <Eye className="h-4 w-4 mr-1" />}
                  {faculty.is_active ? 'Deactivate' : 'Activate'}
                </button>
                <Link
                  href={`/admin/cms/faculty/${faculty.id}`}
                  className="flex-1 bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(faculty.id)}
                  className="bg-red-600 text-white px-3 py-2 rounded text-sm hover:bg-red-700 transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredFaculty.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No faculty members found</h3>
          <p className="text-gray-600">
            {searchTerm || selectedDepartment
              ? 'Try adjusting your search criteria or filters.'
              : 'Add your first faculty member to get started.'}
          </p>
        </div>
      )}
    </div>
  );
};

export default FacultyList;