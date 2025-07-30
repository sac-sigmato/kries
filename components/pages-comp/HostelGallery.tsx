// components/HostelGallery.tsx
"use client";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import React, { useState } from "react";

const hostelImages = [
  "Hostel Entrance.jpeg",
  "Hostel1.jpeg",
  "Hostel Pic 2.jpeg",
  "Hostel Pic 3.jpeg",
  "Hostel Pic 4.jpeg",
  "Hostel Pic 5.jpeg",
  "Hostel Walkpath.jpeg",
];

const HostelGallery: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = hostelImages.map((img) => ({
    src: `/hostel/${img}`,
  }));

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Photo Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {slides.map((slide, i) => (
            <img
              key={i}
              src={slide.src}
              alt={`Hostel ${i + 1}`}
              className="w-full h-48 object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            />
          ))}
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={slides}
        />
      </div>
    </section>
  );
};

export default HostelGallery;
