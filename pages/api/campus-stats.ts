import { NextApiRequest, NextApiResponse } from "next";
import {
  supabaseServer as supabase,
  isSupabaseConfigured,
} from "@/lib/supabase-client";

const defaultStats = [
  {
    value: "0",
    label: "of Campus",
    color_class: "text-teal-500",
    svg_path:
      "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
  },
  {
    value: "0",
    label: "Students Studying",
    color_class: "text-blue-500",
    svg_path:
      "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
  },
  {
    value: "0",
    label: "Education Heroes",
    color_class: "text-teal-500",
    svg_path:
      "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
  },
  {
    value: "0",
    label: "Alumni Network",
    color_class: "text-blue-500",
    svg_path:
      "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z",
  },
  {
    value: "0",
    label: "Free Education with Food & Lodging",
    color_class: "text-yellow-500",
    svg_path:
      "M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z",
  },
  {
    value: "0",
    label: "Passing Percentage",
    color_class: "text-blue-500",
    svg_path: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
  },
  {
    value: "0",
    label: "Girl Safe Environment",
    color_class: "text-yellow-500",
    svg_path:
      "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z",
  },
  {
    value: "0",
    label: "CSR Projects Completed",
    color_class: "text-teal-500",
    svg_path: "M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z",
  },
];



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") return res.status(200).end();

  if (!isSupabaseConfigured()) {
    return res.status(500).json({ message: "Supabase not configured correctly." });
  }

  try {
    if (req.method === "POST") {
      const updates = req.body;

      const { data, error } = await supabase
        .from("campus_stats")
        .upsert(updates, { onConflict: "id" }); // use your actual PK (id or label)

      if (error) throw error;

      return res.status(200).json({ message: "Updated successfully", data });
    }

    // GET method
    const { data: existing, error: fetchError } = await supabase
      .from("campus_stats")
      .select("*");

    if (fetchError) throw fetchError;

    return res.status(200).json(existing);
  } catch (error: any) {
    console.error("Campus stats error:", error);
    return res.status(500).json({ message: error.message || "Server error" });
  }
}
