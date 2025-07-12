import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FileText, Users, BarChart, ArrowRight } from "lucide-react";
type StatItem = {
  id?: string;
  label: string;
  value: string;
  icon: React.ReactNode;
  colorClass: string;
};

const AdminCMS: React.FC = () => {
  const [showStats, setShowStats] = useState(false);
  const [stats, setStats] = useState<StatItem[]>([]);

  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState<Record<string, boolean>>({});

  const handleChange = (index: number, field: string, value: string) => {
    setStats((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const handleSave = async (index: number) => {
    const stat = stats[index];
    setLoading(true);
    try {
      const res = await fetch("/api/campus-stats", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([stat]), // send as array
      });

      if (!res.ok) throw new Error("Failed to update stat");

      const updated = await res.json();
      console.log("Updated:", updated);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      setEditing((prev) => ({ ...prev, [stat.id || stat.label]: false }));
    }
  };

  useEffect(() => {
    if (showStats) {
      fetch("/api/campus-stats")
        .then((res) => res.json())
        .then((data) => setStats(data))
        .catch(console.error);
    }
  }, [showStats]);

  const cmsPages = [
    {
      title: "Home Slider",
      description:
        "Manage Home Page Slider images and content",
      icon: FileText,
      color: "bg-blue-100 text-blue-600",
      link: "/admin/cms/homeslider",
      type: "link",
    },
    {
      title: "About Us",
      description:
        "Manage about page content including mission, vision, and faculty list",
      icon: FileText,
      color: "bg-blue-100 text-blue-600",
      link: "/admin/cms/about",
      type: "link",
    },
    {
      title: "Faculty Management",
      description: "Add, edit, and manage faculty members and their profiles",
      icon: Users,
      color: "bg-green-100 text-green-600",
      link: "/admin/cms/faculty",
      type: "link",
    },
    {
      title: "Campus Stats CMS",
      description: "Manage and update homepage statistics shown on dashboard",
      icon: BarChart,
      color: "bg-yellow-100 text-yellow-600",
      link: "",
      type: "inline",
    },
    {
      title: "CSR Oportunities",
      description: "Manage and update CSR data",
      icon: BarChart,
      color: "bg-yellow-100 text-yellow-600",
      link: "/admin/cms/csr",
      type: "link",
    },
  ];

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Content Management</h1>
        <p className="text-gray-600 mt-2">Manage website content and pages</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cmsPages.map((page, index) => {
          const CardContent = (
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 h-full cursor-pointer">
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-full ${page.color} mr-4`}>
                  <page.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {page.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">{page.description}</p>
              <div className="flex items-center text-blue-600 font-medium">
                Manage
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          );

          if (page.type === "link") {
            return (
              <Link key={index} href={page.link}>
                {CardContent}
              </Link>
            );
          } else {
            return (
              <div key={index} onClick={() => setShowStats((prev) => !prev)}>
                {CardContent}
              </div>
            );
          }
        })}
      </div>

      {showStats && (
        <section className="py-16 bg-white border-t">
          <div className="max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6">Campus Statistics</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((item, index) => {
                const match = item.value.match(/^(\d+(?:\.\d+)?)(.*)$/);
                const numericValue = match ? match[1] : item.value;
                const suffix = match && match[2] ? match[2] : "";

                const isEditing = editing[item.id || item.label] ?? false;

                const toggleEdit = () => {
                  setEditing((prev) => ({
                    ...prev,
                    [item.id || item.label]: !isEditing,
                  }));
                };

                const handleInputChange = (
                  e: React.ChangeEvent<HTMLInputElement>
                ) => {
                  const value = e.target.value;
                  handleChange(index, "value", value + suffix);
                };

                const handleUpdate = async () => {
                  await handleSave(index);
                  setEditing((prev) => ({
                    ...prev,
                    [item.id || item.label]: false,
                  }));
                };

                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md text-center"
                  >
                    <div
                      className={`${item.colorClass} mb-4 flex justify-center`}
                    >
                      {item.icon}
                    </div>

                    {isEditing ? (
                      <input
                        type="number"
                        value={numericValue}
                        onChange={handleInputChange}
                        className="text-4xl font-bold text-gray-900 mb-2 w-full text-center border-b border-gray-300 focus:outline-none focus:border-blue-500"
                      />
                    ) : (
                      <h3 className="text-4xl font-bold text-gray-900 mb-2">
                        {item.value}
                      </h3>
                    )}

                    <p className="text-gray-600">{item.label}</p>

                    <button
                      onClick={isEditing ? handleUpdate : toggleEdit}
                      disabled={loading}
                      className="mt-4 text-sm bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 disabled:opacity-50"
                    >
                      {isEditing ? "Update" : "Edit"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default AdminCMS;
