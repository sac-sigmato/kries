'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase-client';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

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
}

const HeroSlider = () => {
  const [sliderItems, setSliderItems] = useState<HomeSlider[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSliders = async () => {
      const { data, error } = await supabase
        .from('home_slider')
        .select('*')
        .eq('is_active', true)
        .order('order_index', { ascending: true });

      if (error) {
        console.error('Error fetching sliders:', error.message);
      } else {
        setSliderItems(data || []);
      }
      setLoading(false);
    };

    fetchSliders();
  }, []);

  useEffect(() => {
    if (sliderItems.length < 2) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [sliderItems]);

  return (
    <section className="relative h-[360px] sm:h-[480px] md:h-[550px] overflow-hidden">
      {loading ? (
        <div className="h-[550px] flex items-center justify-center bg-gray-100">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : sliderItems.length > 0 ? (
        <div className="relative h-[550px]">
          {sliderItems.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <div
                className="h-[550px] w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image_url})` }}
              >
                {/* Gradient only at bottom for text */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" /> */}

                {/* Bottom-left text box */}
                <div className="absolute bottom-16 left-8 text-white z-20 max-w-xl">
                  {/* {slide.subtitle && (
                    <p className="text-sm md:text-base text-blue-200 mb-1">{slide.subtitle}</p>
                  )} */}
                  {/* <h1 className="text-2xl md:text-4xl font-bold mb-2">{slide.title}</h1> */}
                  {/* <p className="text-sm md:text-sm mb-4">{slide.description}</p> */}
                  {/* {slide.button_text && slide.button_url && (
                    <Link
                      href={slide.button_url}
                      className="inline-flex items-center bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2 rounded-lg text-sm"
                    >
                      {slide.button_text}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  )} */}
                </div>
              </div>
            </div>
          ))}

          {/* Dots */}
          {sliderItems.length > 1 && (
           <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex flex-col space-y-2 z-30">
           {sliderItems.map((_, i) => (
             <button
               key={i}
               onClick={() => setCurrentSlide(i)}
               className={`w-3 h-3 rounded-full transition-all duration-300 ${
                 i === currentSlide ? 'bg-white' : 'bg-white/50'
               }`}
             />
           ))}
         </div>
         
          )}
        </div>
      ) : (
        <div className="h-full flex items-center justify-center text-gray-500">No slides found.</div>
      )}
    </section>
  );
};

export default HeroSlider;
