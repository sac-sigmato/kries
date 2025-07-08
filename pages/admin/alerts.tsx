import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import ProtectedRoute from '../../components/ProtectedRoute';
import { Mail, Send, Users, AlertCircle, CheckCircle, Clock, Plus, Edit, Trash2 } from 'lucide-react';

interface EmailAlert {
  _id: string;
  title: string;
  message: string;
  recipients: string[];
  recipient_type: 'all' | 'class' | 'individual';
  class_filter?: string;
  section_filter?: string;
  priority: 'low' | 'medium' | 'high';
  scheduled_time?: string;
  status: 'draft' | 'scheduled' | 'sent' | 'failed';
  sent_count: number;
  created_at: string;
  sent_at?: string;
}

interface Student {
  _id: string;
  name: string;
  email: string;
  class: string;
  section: string;
  parent_email?: string;
}

const AdminAlertsPage: React.FC = () => {
  const [alerts, setAlerts] = useState<EmailAlert[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingAlert, setEditingAlert] = useState<EmailAlert | null>(null);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    message: '',
    recipient_type: 'all' as 'all' | 'class' | 'individual',
    class_filter: '',
    section_filter: '',
    individual_emails: '',
    priority: 'medium' as 'low' | 'medium' | 'high',
    scheduled_time: '',
    send_to_parents: false
  });

  const classes = ['6th', '7th', '8th', '9th', '10th'];
  const sections = ['A', 'B', 'C', 'D'];

  useEffect(() => {
    fetchAlerts();
    fetchStudents();
  }, []);

  const fetchAlerts = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/email-alerts');
      if (response.ok) {
        const data = await response.json();
        setAlerts(data);
      }
    } catch (error) {
      console.error('Error fetching alerts:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchStudents = async () => {
    try {
      const response = await fetch('/api/students');
      if (response.ok) {
        const data = await response.json();
        setStudents(data);
      }
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const getRecipientEmails = () => {
    let emails: string[] = [];
    
    switch (formData.recipient_type) {
      case 'all':
        emails = students.map(s => s.email);
        if (formData.send_to_parents) {
          emails = [...emails, ...students.filter(s => s.parent_email).map(s => s.parent_email!)];
        }
        break;
      
      case 'class':
        const filteredStudents = students.filter(s => 
          s.class === formData.class_filter && 
          (!formData.section_filter || s.section === formData.section_filter)
        );
        emails = filteredStudents.map(s => s.email);
        if (formData.send_to_parents) {
          emails = [...emails, ...filteredStudents.filter(s => s.parent_email).map(s => s.parent_email!)];
        }
        break;
      
      case 'individual':
        emails = formData.individual_emails.split(',').map(email => email.trim()).filter(email => email);
        break;
    }
    
    return [...new Set(emails)]; // Remove duplicates
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const recipients = getRecipientEmails();
      
      if (recipients.length === 0) {
        alert('No recipients found. Please check your selection.');
        return;
      }

      const alertData = {
        title: formData.title,
        message: formData.message,
        recipients,
        recipient_type: formData.recipient_type,
        class_filter: formData.class_filter,
        section_filter: formData.section_filter,
        priority: formData.priority,
        scheduled_time: formData.scheduled_time || null,
        status: formData.scheduled_time ? 'scheduled' : 'draft'
      };

      const method = editingAlert ? 'PUT' : 'POST';
      const url = editingAlert ? `/api/email-alerts?id=${editingAlert._id}` : '/api/email-alerts';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(alertData),
      });

      if (response.ok) {
        await fetchAlerts();
        resetForm();
      }
    } catch (error) {
      console.error('Error saving alert:', error);
    }
  };

  const handleSendNow = async (alertId: string) => {
    if (confirm('Are you sure you want to send this alert now?')) {
      try {
        setSending(true);
        const response = await fetch(`/api/email-alerts/send?id=${alertId}`, {
          method: 'POST',
        });

        if (response.ok) {
          await fetchAlerts();
          alert('Alert sent successfully!');
        } else {
          alert('Failed to send alert. Please try again.');
        }
      } catch (error) {
        console.error('Error sending alert:', error);
        alert('Error sending alert. Please try again.');
      } finally {
        setSending(false);
      }
    }
  };

  const handleEdit = (alert: EmailAlert) => {
    setEditingAlert(alert);
    setFormData({
      title: alert.title,
      message: alert.message,
      recipient_type: alert.recipient_type,
      class_filter: alert.class_filter || '',
      section_filter: alert.section_filter || '',
      individual_emails: alert.recipient_type === 'individual' ? alert.recipients.join(', ') : '',
      priority: alert.priority,
      scheduled_time: alert.scheduled_time ? alert.scheduled_time.slice(0, 16) : '',
      send_to_parents: false
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this alert?')) {
      try {
        const response = await fetch(`/api/email-alerts?id=${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          await fetchAlerts();
        }
      } catch (error) {
        console.error('Error deleting alert:', error);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      message: '',
      recipient_type: 'all',
      class_filter: '',
      section_filter: '',
      individual_emails: '',
      priority: 'medium',
      scheduled_time: '',
      send_to_parents: false
    });
    setEditingAlert(null);
    setShowForm(false);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'sent':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'scheduled':
        return <Clock className="h-5 w-5 text-blue-500" />;
      case 'failed':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Mail className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'sent':
        return 'bg-green-100 text-green-800';
      case 'scheduled':
        return 'bg-blue-100 text-blue-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-green-100 text-green-800';
    }
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
              <h1 className="text-3xl font-bold text-gray-900">Email Alerts</h1>
              <p className="text-gray-600 mt-2">Send notifications and alerts to students and parents</p>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
            >
              <Plus className="h-4 w-4 mr-2" />
              Create Alert
            </button>
          </div>

          {/* Alert Form */}
          {showForm && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  {editingAlert ? 'Edit Alert' : 'Create New Alert'}
                </h2>
                <button
                  onClick={resetForm}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Alert Title *</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Exam Schedule Update"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your message here..."
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Recipients *</label>
                    <select
                      value={formData.recipient_type}
                      onChange={(e) => setFormData({ ...formData, recipient_type: e.target.value as any })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="all">All Students</option>
                      <option value="class">Specific Class</option>
                      <option value="individual">Individual Emails</option>
                    </select>
                  </div>

                  {formData.recipient_type === 'class' && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Class *</label>
                        <select
                          value={formData.class_filter}
                          onChange={(e) => setFormData({ ...formData, class_filter: e.target.value })}
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
                        <label className="block text-sm font-medium text-gray-700 mb-2">Section</label>
                        <select
                          value={formData.section_filter}
                          onChange={(e) => setFormData({ ...formData, section_filter: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">All Sections</option>
                          {sections.map((section) => (
                            <option key={section} value={section}>{section}</option>
                          ))}
                        </select>
                      </div>
                    </>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                    <select
                      value={formData.priority}
                      onChange={(e) => setFormData({ ...formData, priority: e.target.value as any })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                </div>

                {formData.recipient_type === 'individual' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Addresses *</label>
                    <textarea
                      value={formData.individual_emails}
                      onChange={(e) => setFormData({ ...formData, individual_emails: e.target.value })}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter email addresses separated by commas"
                      required
                    />
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Schedule Time (Optional)</label>
                    <input
                      type="datetime-local"
                      value={formData.scheduled_time}
                      onChange={(e) => setFormData({ ...formData, scheduled_time: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="flex items-end">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="send_to_parents"
                        checked={formData.send_to_parents}
                        onChange={(e) => setFormData({ ...formData, send_to_parents: e.target.checked })}
                        className="mr-2"
                      />
                      <label htmlFor="send_to_parents" className="text-sm font-medium text-gray-700">
                        Also send to parents
                      </label>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Recipients Preview:</strong> {getRecipientEmails().length} email(s) will be sent
                  </p>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {editingAlert ? 'Update Alert' : 'Save Alert'}
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

          {/* Alerts List */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Alert Details
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Recipients
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Priority
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Sent Count
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {alerts.map((alert) => (
                    <tr key={alert._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{alert.title}</div>
                          <div className="text-sm text-gray-500 line-clamp-2">{alert.message}</div>
                          <div className="text-xs text-gray-400 mt-1">
                            Created: {new Date(alert.created_at).toLocaleDateString()}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {alert.recipient_type === 'all' && 'All Students'}
                          {alert.recipient_type === 'class' && `${alert.class_filter}${alert.section_filter ? ` - ${alert.section_filter}` : ''}`}
                          {alert.recipient_type === 'individual' && 'Individual'}
                        </div>
                        <div className="text-sm text-gray-500">{alert.recipients.length} recipients</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(alert.priority)}`}>
                          {alert.priority.toUpperCase()}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {getStatusIcon(alert.status)}
                          <span className={`ml-2 inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(alert.status)}`}>
                            {alert.status.toUpperCase()}
                          </span>
                        </div>
                        {alert.sent_at && (
                          <div className="text-xs text-gray-400 mt-1">
                            Sent: {new Date(alert.sent_at).toLocaleDateString()}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{alert.sent_count}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          {(alert.status === 'draft' || alert.status === 'scheduled') && (
                            <button
                              onClick={() => handleSendNow(alert._id)}
                              disabled={sending}
                              className="text-green-600 hover:text-green-900 disabled:opacity-50"
                              title="Send Now"
                            >
                              <Send className="h-4 w-4" />
                            </button>
                          )}
                          <button
                            onClick={() => handleEdit(alert)}
                            className="text-blue-600 hover:text-blue-900"
                            title="Edit"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(alert._id)}
                            className="text-red-600 hover:text-red-900"
                            title="Delete"
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

          {alerts.length === 0 && (
            <div className="text-center py-12">
              <Mail className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No alerts found</h3>
              <p className="text-gray-600">Create your first email alert to get started.</p>
            </div>
          )}
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
};

export default AdminAlertsPage;