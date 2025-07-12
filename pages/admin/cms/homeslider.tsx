"use client";

import React, { useEffect, useState } from "react";
import AdminLayout from "../../../components/admin-comp/AdminLayout";
import ProtectedRoute from "../../../components/ProtectedRoute";
import { ArrowLeft, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";
import { supabase } from "../../../lib/supabase-client";

interface HomeSlider {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image_url: string;
  button_text: string;
  button_url: string;
  order_index: number;
  is_active: boolean;
  created_at?: string;
}

const HomeSliderAdminPage: React.FC = () => {
  const [sliders, setSliders] = useState<HomeSlider[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Omit<HomeSlider, "id" | "created_at">>({
    title: "",
    subtitle: "",
    description: "",
    image_url: "",
    button_text: "",
    button_url: "",
    order_index: 0,
    is_active: true,
  });

  useEffect(() => {
    fetchSliders();
  }, []);

  const fetchSliders = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("home_slider")
      .select("*")
      .order("order_index", { ascending: true });

    if (error) toast.error("Failed to fetch sliders");
    else setSliders(data || []);
    setLoading(false);
  };

  const handleSubmit = async () => {
    const {
      title,
      subtitle,
      description,
      image_url,
      button_text,
      button_url,
      order_index,
      is_active,
    } = formData;

    if (!title || !image_url) {
      toast.error("Title and Image are required");
      return;
    }

    const payload = {
      title,
      subtitle,
      description,
      image_url,
      button_text,
      button_url,
      order_index,
      is_active,
    };

    const { error } = editingId
      ? await supabase.from("home_slider").update(payload).eq("id", editingId)
      : await supabase.from("home_slider").insert([payload]);

    if (error) toast.error("Save failed");
    else {
      toast.success(editingId ? "Updated" : "Added");
      fetchSliders();
      setShowForm(false);
      setEditingId(null);
    }
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("home_slider").delete().eq("id", id);
    if (error) toast.error("Delete failed");
    else {
      toast.success("Deleted successfully");
      fetchSliders();
    }
  };

  const openForm = (slider?: HomeSlider) => {
    if (slider) {
      const { id, created_at, ...rest } = slider;
      setFormData(rest);
      setEditingId(id);
    } else {
      setFormData({
        title: "",
        subtitle: "",
        description: "",
        image_url: "",
        button_text: "",
        button_url: "",
        order_index: 0,
        is_active: true,
      });
      setEditingId(null);
    }
    setShowForm(true);
  };

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/admin/cms" className="text-blue-600 hover:text-blue-800 flex items-center mb-2">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to CMS
              </Link>
              <h1 className="text-3xl font-bold text-gray-900">Home Slider CMS</h1>
              <p className="text-gray-600 text-sm">Manage homepage hero sliders here.</p>
            </div>
            <button
              onClick={() => openForm()}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center"
            >
              <Plus className="h-4 w-4 mr-2" /> Add Slide
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sliders.map((slider) => (
              <div key={slider.id} className="bg-white shadow p-5 rounded-lg hover:shadow-md">
                <img src={slider.image_url} alt={slider.title} className="h-40 w-full object-cover rounded mb-2" />
                <h3 className="font-semibold text-lg">{slider.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{slider.subtitle}</p>
                <p className="text-xs text-gray-500 line-clamp-2 mt-1">{slider.description}</p>
                <div className="text-sm mt-3">
                  <span className="text-gray-600">Button:</span> {slider.button_text} → {slider.button_url}<br />
                  <span className="text-gray-600">Order:</span> {slider.order_index}, Active: {slider.is_active ? "Yes" : "No"}
                </div>
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => openForm(slider)}
                    className="flex-1 bg-blue-600 text-white text-sm px-3 py-2 rounded hover:bg-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(slider.id)}
                    className="bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {showForm && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-white w-full max-w-2xl rounded-lg p-6 space-y-4 overflow-auto max-h-[90vh]">
                <h2 className="text-xl font-semibold text-gray-800">
                  {editingId ? "Edit Slide" : "Add New Slide"}
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {Object.entries(formData).map(([key, value]) => (
                    key === "is_active" ? (
                      <div key={key} className="flex items-center gap-2">
                        <label className="text-sm font-medium">Active</label>
                        <input
                          type="checkbox"
                          checked={value as boolean}
                          onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                        />
                      </div>
                    ) : (
                      <div key={key}>
                        <label className="text-sm font-medium capitalize">{key.replace("_", " ")}</label>
                        <input
                          type={key.includes("index") ? "number" : "text"}
                          value={value as string | number}
                          onChange={(e) => setFormData({ ...formData, [key]: key.includes("index") ? Number(e.target.value) : e.target.value })}
                          className="w-full border border-gray-300 rounded px-3 py-2"
                        />
                      </div>
                    )
                  ))}
                </div>
                <div className="flex justify-end space-x-3 pt-4">
                  <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-gray-700">
                    Cancel
                  </button>
                  <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    {editingId ? "Update" : "Add"}
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

export default HomeSliderAdminPage;
