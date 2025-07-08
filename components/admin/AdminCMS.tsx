import React, { useState } from 'react';
import Link from 'next/link';
import { FileText, Edit, Layers, Users, ArrowRight } from 'lucide-react';

const AdminCMS: React.FC = () => {
  const cmsPages = [
    {
      title: "About Us",
      description: "Manage about page content including mission, vision, and faculty list",
      icon: FileText,
      color: "bg-blue-100 text-blue-600",
      link: "/admin/cms/about"
    },
    {
      title: "Faculty Management",
      description: "Add, edit, and manage faculty members and their profiles",
      icon: Users,
      color: "bg-green-100 text-green-600",
      link: "/admin/cms/faculty"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Content Management</h1>
        <p className="text-gray-600 mt-2">Manage website content and pages</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cmsPages.map((page, index) => (
          <Link key={index} href={page.link}>
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 h-full cursor-pointer">
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-full ${page.color} mr-4`}>
                  <page.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{page.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{page.description}</p>
              <div className="flex items-center text-blue-600 font-medium">
                Manage
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminCMS;