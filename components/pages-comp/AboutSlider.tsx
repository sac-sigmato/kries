// components/AboutSlider.tsx
'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Calendar } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const slides = [
  {
    img: '/about.jpeg',
    years: '25+',
    text: 'Years of Excellence',
  },
  {
    img: '/School-prayer-2.jpeg',
    years: '10K+',
    text: 'Students Graduated',
  },
  {
    img: '/Schoo-event1.jpeg',
    years: '50+',
    text: 'Experienced Faculty',
  },
  {
    img: '/ind1.jpeg',
    years: '50+',
    text: 'Experienced Faculty',
  },
]

export default function AboutSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      loop
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      navigation
      className="w-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative">
            <img
              src={slide.img}
              alt={slide.text}
              className="rounded-lg shadow-xl h-[350px] w-full object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 text-white p-3 rounded-full">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{slide.years}</p>
                  <p className="text-gray-600">{slide.text}</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
