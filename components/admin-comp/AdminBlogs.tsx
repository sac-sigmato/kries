import React from 'react';

const AdminBlogs: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Blog Management</h1>
        <p className="text-gray-600 mt-2">Create and manage blog posts</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600">Blog management features will be implemented here.</p>
      </div>
    </div>
  );
};

export default AdminBlogs;