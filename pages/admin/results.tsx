import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import ProtectedRoute from '../../components/ProtectedRoute';
import { GraduationCap, Plus, Edit, Trash2, Download, Upload, Search } from 'lucide-react';

interface Result {
  id: string;
  student_name: string;
  student_id: string;
  class: string;
  section: string;
  exam_type: string;
  subjects: {
    subject: string;
    marks_obtained: number;
    max_marks: number;
    grade: string;
  }[];
  total_marks: number;
  percentage: number;
  grade: string;
  rank?: number;
  academic_year: string;
  created_at: string;
  updated_at: string;
}

const AdminResultsPage: React.FC = () => {
  const [results, setResults] = useState<Result[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingResult, setEditingResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterClass, setFilterClass] = useState('');
  const [filterExamType, setFilterExamType] = useState('');

  const [formData, setFormData] = useState({
    student_name: '',
    student_id: '',
    class: '',
    section: '',
    exam_type: 'unit_test_1',
    academic_year: new Date().getFullYear().toString(),
    subjects: [
      { subject: 'Kannada', marks_obtained: 0, max_marks: 100 },
      { subject: 'English', marks_obtained: 0, max_marks: 100 },
      { subject: 'Hindi', marks_obtained: 0, max_marks: 100 },
      { subject: 'Mathematics', marks_obtained: 0, max_marks: 100 },
      { subject: 'Science', marks_obtained: 0, max_marks: 100 },
      { subject: 'Social Science', marks_obtained: 0, max_marks: 100 }
    ]
  });

  const classes = ['6th', '7th', '8th', '9th', '10th'];
  const sections = ['A', 'B', 'C', 'D'];
  const examTypes = [
    { value: 'unit_test_1', label: 'Unit Test 1' },
    { value: 'unit_test_2', label: 'Unit Test 2' },
    { value: 'mid_term', label: 'Mid Term Exam' },
    { value: 'final_exam', label: 'Final Exam' },
    { value: 'annual_exam', label: 'Annual Exam' }
  ];

  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/results');
      if (response.ok) {
        const data = await response.json();
        setResults(data);
      }
    } catch (error) {
      console.error('Error fetching results:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculateGrade = (percentage: number): string => {
    if (percentage >= 90) return 'A+';
    if (percentage >= 80) return 'A';
    if (percentage >= 70) return 'B+';
    if (percentage >= 60) return 'B';
    if (percentage >= 50) return 'C+';
    if (percentage >= 40) return 'C';
    if (percentage >= 35) return 'D';
    return 'F';
  };

  const calculateSubjectGrade = (marks: number, maxMarks: number): string => {
    const percentage = (marks / maxMarks) * 100;
    return calculateGrade(percentage);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Calculate totals and grades
      const totalMarksObtained = formData.subjects.reduce((sum, subject) => sum + subject.marks_obtained, 0);
      const totalMaxMarks = formData.subjects.reduce((sum, subject) => sum + subject.max_marks, 0);
      const percentage = (totalMarksObtained / totalMaxMarks) * 100;
      const grade = calculateGrade(percentage);

      const subjectsWithGrades = formData.subjects.map(subject => ({
        ...subject,
        grade: calculateSubjectGrade(subject.marks_obtained, subject.max_marks)
      }));

      const resultData = {
        ...formData,
        subjects: subjectsWithGrades,
        total_marks: totalMarksObtained,
        percentage: Math.round(percentage * 100) / 100,
        grade
      };

      const method = editingResult ? 'PUT' : 'POST';
      const url = editingResult ? `/api/results?id=${editingResult.id}` : '/api/results';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(resultData),
      });

      if (response.ok) {
        await fetchResults();
        resetForm();
      }
    } catch (error) {
      console.error('Error saving result:', error);
    }
  };

  const handleEdit = (result: Result) => {
    setEditingResult(result);
    setFormData({
      student_name: result.student_name,
      student_id: result.student_id,
      class: result.class,
      section: result.section,
      exam_type: result.exam_type,
      academic_year: result.academic_year,
      subjects: result.subjects.map(s => ({
        subject: s.subject,
        marks_obtained: s.marks_obtained,
        max_marks: s.max_marks
      }))
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this result?')) {
      try {
        const response = await fetch(`/api/results?id=${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          await fetchResults();
        }
      } catch (error) {
        console.error('Error deleting result:', error);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      student_name: '',
      student_id: '',
      class: '',
      section: '',
      exam_type: 'unit_test_1',
      academic_year: new Date().getFullYear().toString(),
      subjects: [
        { subject: 'Kannada', marks_obtained: 0, max_marks: 100 },
        { subject: 'English', marks_obtained: 0, max_marks: 100 },
        { subject: 'Hindi', marks_obtained: 0, max_marks: 100 },
        { subject: 'Mathematics', marks_obtained: 0, max_marks: 100 },
        { subject: 'Science', marks_obtained: 0, max_marks: 100 },
        { subject: 'Social Science', marks_obtained: 0, max_marks: 100 }
      ]
    });
    setEditingResult(null);
    setShowForm(false);
  };

  const updateSubjectMarks = (index: number, field: 'marks_obtained' | 'max_marks', value: number) => {
    const updatedSubjects = [...formData.subjects];
    updatedSubjects[index][field] = value;
    setFormData({ ...formData, subjects: updatedSubjects });
  };

  const filteredResults = results.filter(result => {
    const matchesSearch = result.student_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         result.student_id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = !filterClass || result.class === filterClass;
    const matchesExamType = !filterExamType || result.exam_type === filterExamType;
    
    return matchesSearch && matchesClass && matchesExamType;
  });

  const getGradeColor = (grade: string) => {
    const colors = {
      'A+': 'bg-green-100 text-green-800',
      'A': 'bg-green-100 text-green-800',
      'B+': 'bg-blue-100 text-blue-800',
      'B': 'bg-blue-100 text-blue-800',
      'C+': 'bg-yellow-100 text-yellow-800',
      'C': 'bg-yellow-100 text-yellow-800',
      'D': 'bg-orange-100 text-orange-800',
      'F': 'bg-red-100 text-red-800'
    };
    return colors[grade as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  if (loading) {
    return (
      <ProtectedRoute>
        <AdminLayout>
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
          </div>
        </AdminLayout>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Results Management</h1>
              <p className="text-gray-600 mt-2">Manage student examination results by class</p>
            </div>
            <div className="flex space-x-2">
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center">
                <Download className="h-4 w-4 mr-2" />
                Export
              </button>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center">
                <Upload className="h-4 w-4 mr-2" />
                Import
              </button>
              <button
                onClick={() => setShowForm(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Result
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Search Student</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Name or ID"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
                <select
                  value={filterClass}
                  onChange={(e) => setFilterClass(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All Classes</option>
                  {classes.map((cls) => (
                    <option key={cls} value={cls}>{cls}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Exam Type</label>
                <select
                  value={filterExamType}
                  onChange={(e) => setFilterExamType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All Exams</option>
                  {examTypes.map((exam) => (
                    <option key={exam.value} value={exam.value}>{exam.label}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-end">
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setFilterClass('');
                    setFilterExamType('');
                  }}
                  className="w-full bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>

          {/* Result Form */}
          {showForm && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  {editingResult ? 'Edit Result' : 'Add New Result'}
                </h2>
                <button
                  onClick={resetForm}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Student Name *</label>
                    <input
                      type="text"
                      value={formData.student_name}
                      onChange={(e) => setFormData({ ...formData, student_name: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Student ID *</label>
                    <input
                      type="text"
                      value={formData.student_id}
                      onChange={(e) => setFormData({ ...formData, student_id: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Class *</label>
                    <select
                      value={formData.class}
                      onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select Class</option>
                      {classes.map((cls) => (
                        <option key={cls} value={cls}>{cls}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Section *</label>
                    <select
                      value={formData.section}
                      onChange={(e) => setFormData({ ...formData, section: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select Section</option>
                      {sections.map((section) => (
                        <option key={section} value={section}>{section}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Exam Type *</label>
                    <select
                      value={formData.exam_type}
                      onChange={(e) => setFormData({ ...formData, exam_type: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      {examTypes.map((exam) => (
                        <option key={exam.value} value={exam.value}>{exam.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Academic Year *</label>
                    <input
                      type="text"
                      value={formData.academic_year}
                      onChange={(e) => setFormData({ ...formData, academic_year: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Subject Marks</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {formData.subjects.map((subject, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-3">{subject.subject}</h4>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-sm text-gray-600 mb-1">Marks Obtained</label>
                            <input
                              type="number"
                              value={subject.marks_obtained}
                              onChange={(e) => updateSubjectMarks(index, 'marks_obtained', parseInt(e.target.value) || 0)}
                              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              min="0"
                              max={subject.max_marks}
                            />
                          </div>
                          <div>
                            <label className="block text-sm text-gray-600 mb-1">Max Marks</label>
                            <input
                              type="number"
                              value={subject.max_marks}
                              onChange={(e) => updateSubjectMarks(index, 'max_marks', parseInt(e.target.value) || 100)}
                              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              min="1"
                            />
                          </div>
                        </div>
                        <div className="mt-2 text-sm text-gray-600">
                          Grade: {calculateSubjectGrade(subject.marks_obtained, subject.max_marks)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {editingResult ? 'Update Result' : 'Save Result'}
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Results Table */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Student Details
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Class & Section
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Exam Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total Marks
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Percentage
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Grade
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredResults.map((result) => (
                    <tr key={result.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{result.student_name}</div>
                          <div className="text-sm text-gray-500">ID: {result.student_id}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{result.class} - {result.section}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {examTypes.find(e => e.value === result.exam_type)?.label || result.exam_type}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{result.total_marks}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{result.percentage}%</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getGradeColor(result.grade)}`}>
                          {result.grade}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEdit(result)}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(result.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {filteredResults.length === 0 && (
            <div className="text-center py-12">
              <GraduationCap className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600">Add student results to get started.</p>
            </div>
          )}
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
};

export default AdminResultsPage;