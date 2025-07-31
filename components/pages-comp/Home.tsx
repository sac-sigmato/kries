import React from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';
import {
  AboutPreviewSection,
  ProgramsHighlightSection,
  LeadershipSection,
  TestimonialsSection,
  NewsEventsSection,
  ContactSection,
  SchoolFacilitySection} from '../HomeSections';
import HeroSlider from './HeroSlider';


import {
  GraduationCap,
  BarChart3,
  Users2,
  School,
  BedDouble,
  UtensilsCrossed,
  Leaf,
  Medal,
  UsersRound,
  Wallet,
  Trophy
} from "lucide-react";

import DetailedStatisticsTabs from './DetailedStatisticsTabs';

// type StatItem = {
//   label: string;
//   value: string;
//   icon: React.ReactNode;
//   colorClass: string;
// };

declare global {
  interface Window {
    twttr: {
      widgets: {
        load: (element?: HTMLElement | null) => void;
      };
    };
  }
}


const Home: React.FC = () => {
  const [sliderItems, setSliderItems] = useState<any[]>([]);
  const [sections, setSections] = useState<any[]>([]);
  const [, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    fetchHomeData();

    const embedContainer = document.getElementById("twitter-embed");
    if (!embedContainer) return;

    // Avoid adding the script multiple times
    if (!document.getElementById("twitter-wjs")) {
      const script = document.createElement("script");
      script.setAttribute("src", "https://platform.twitter.com/widgets.js");
      script.setAttribute("id", "twitter-wjs");
      script.setAttribute("async", "true");
      script.onload = () => {
        // Ensure widget initializes
        if (window?.twttr?.widgets) {
          window.twttr.widgets.load(embedContainer);
        }
      };
      document.body.appendChild(script);
    } else {
      // Script already exists – manually load widgets
      if (window?.twttr?.widgets) {
        window.twttr.widgets.load(embedContainer);
      }
    }
  }, []);


  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % sliderItems.length);
  }, [sliderItems.length]);

  useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (sliderItems.length > 1) {
      intervalRef.current = setInterval(nextSlide, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [sliderItems.length, nextSlide]);

  const fetchHomeData = async () => {
    try {
      const [sliderResponse, sectionsResponse] = await Promise.all([
        fetch('/api/home-slider'),
        fetch('/api/home-sections')
      ]);

      if (sliderResponse.ok) {
        const sliderData = await sliderResponse.json();
        setSliderItems(sliderData);
      }

      if (sectionsResponse.ok) {
        const sectionsData = await sectionsResponse.json();
        setSections(sectionsData);
      }
    } catch (error) {
      console.error('Error fetching home data:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderSection = (section: any) => {
    switch (section.section_name) {
      case 'about_preview':
        return <AboutPreviewSection key={section._id} section={section} />;
      case 'programs_highlight':
        return <ProgramsHighlightSection key={section._id} section={section} />;
      case 'leadership':
        return <LeadershipSection key={section._id} section={section} />;
      // case 'achievements':
      //   return <StatisticsSection key={section._id} section={section} />;
      case 'testimonials':
        return <TestimonialsSection key={section._id} section={section} />;
      // case 'facilities':
      //   return <CampusFacilitiesSection key={section._id} section={section} />;
      case 'news_events':
        return <NewsEventsSection key={section._id} section={section} />;
      case 'contact_section':
        return <ContactSection key={section._id} section={section} />;
      case 'school_facility':
        return <SchoolFacilitySection key={section._id} section={section} />;
      // case 'achievements_activities':
      //   return <AchievementsActivitiesSection key={section._id} section={section} />;
    }
  };


  const statTabsData = [
    {
      title: 'Student',
      icon: <GraduationCap className="text-indigo-500 text-2xl" />,
      data: [
        { label: 'Total Student Count', value: '205', icon: <Users2 className="text-blue-500 text-xl" /> },
        { label: 'Student Attendance', value: '98%', icon: <BarChart3 className="text-green-500 text-xl" /> },
        { label: 'Health Checkup Conducted', value: '238', icon: <GraduationCap className="text-pink-500 text-xl" /> },
      ],
    },
    {
      title: 'Results',
      icon: <BarChart3 className="text-red-500 text-2xl" />,
      data: [
        { label: 'SSLC Pass Percentage', value: '100%', icon: <BarChart3 className="text-blue-500 text-xl" /> },
        { label: 'Topper Marks', value: '614 (98.24%)', icon: <Trophy className="text-yellow-500 text-xl" /> },
        { label: 'Distinctions in SSLC', value: '17 Students', icon: <Users2 className="text-indigo-500 text-xl" /> },
        { label: 'Students Qualified for CET', value: '20', icon: <GraduationCap className="text-purple-500 text-xl" /> },
        { label: 'Students Qualified for NEET', value: '03', icon: <GraduationCap className="text-purple-500 text-xl" /> },
      ],
    },
    {
      title: 'Staff',
      icon: <Users2 className="text-green-500 text-2xl" />,
      data: [
        { label: 'Teaching Staff Count', value: '08', icon: <Users2 className="text-blue-500 text-xl" /> },
        { label: 'Non-Teaching Staff Count', value: '04', icon: <Users2 className="text-gray-500 text-xl" /> },
        { label: 'Vacant Positions', value: '0', icon: <Users2 className="text-red-500 text-xl" /> },
      ],
    },
    {
      title: 'Infrastructure',
      icon: <School className="text-orange-500 text-2xl" />,
      data: [
        { label: 'Building Type', value: 'Own', icon: <School className="text-yellow-500 text-xl" /> },
        { label: 'Campus Area', value: '6.9 Acres', icon: <School className="text-green-500 text-xl" /> },
        { label: 'No. of Classrooms', value: '06', icon: <School className="text-indigo-500 text-xl" /> },
        { label: 'Science Laboratories', value: '03', icon: <School className="text-cyan-500 text-xl" /> },
        { label: 'Computer Laboratory', value: '01', icon: <School className="text-purple-500 text-xl" /> },
        { label: 'STEM Laboratory', value: '01', icon: <School className="text-purple-500 text-xl" /> },
        { label: 'No. of Computers', value: '25', icon: <School className="text-blue-500 text-xl" /> },
        { label: 'Library Books', value: '2500', icon: <School className="text-green-500 text-xl" /> },
        { label: 'Smart Classroom', value: '01', icon: <School className="text-teal-500 text-xl" /> },
        { label: 'Smart Board', value: '01', icon: <School className="text-pink-500 text-xl" /> },
        { label: 'Drinking Water Purifiers', value: '04', icon: <School className="text-blue-400 text-xl" /> },
        { label: 'Boys Toilets', value: '00', icon: <School className="text-gray-500 text-xl" /> },
        { label: 'Girls Toilets', value: '40', icon: <School className="text-red-400 text-xl" /> },
        { label: 'Internet Connectivity', value: 'Yes', icon: <School className="text-green-600 text-xl" /> },
        { label: 'CCTV Cameras', value: '08', icon: <School className="text-black text-xl" /> },
        { label: 'Fire & Safety Equipment', value: '03 Sets', icon: <School className="text-red-600 text-xl" /> },
        { label: 'Electricity Poles in Campus', value: '06', icon: <School className="text-yellow-600 text-xl" /> },
        { label: 'Bulbs in Campus', value: 'Solar Light - 08, Street Light - 05', icon: <School className="text-yellow-300 text-xl" /> },
      ],
    },
    {
      title: 'Hostel',
      icon: <BedDouble className="text-pink-500 text-2xl" />,
      data: [
        { label: 'Students in Hostel', value: '205', icon: <Users2 className="text-purple-500 text-xl" /> },
        { label: 'Room Occupancy Status', value: '15', icon: <BedDouble className="text-blue-400 text-xl" /> },
        { label: 'Daily Hostel Attendance', value: '205', icon: <BarChart3 className="text-green-500 text-xl" /> },
        { label: 'Bed Cots (2 Tier)', value: '100', icon: <BedDouble className="text-blue-500 text-xl" /> },
        { label: 'Beds & Bedsheets', value: '250', icon: <BedDouble className="text-indigo-500 text-xl" /> },
        { label: 'Pillows & Blankets', value: '250', icon: <BedDouble className="text-pink-400 text-xl" /> },
        { label: 'Bathrooms for Boys', value: '00', icon: <BedDouble className="text-gray-500 text-xl" /> },
        { label: 'Bathrooms for Girls', value: '40', icon: <BedDouble className="text-red-400 text-xl" /> },
        { label: 'Hot Water Supply', value: 'Yes', icon: <BedDouble className="text-orange-500 text-xl" /> },
        { label: 'Staff Nurse for Health Checkup', value: '01', icon: <Users2 className="text-pink-600 text-xl" /> },
        { label: 'Emergency Ambulance in Campus', value: 'No', icon: <BedDouble className="text-red-600 text-xl" /> },
      ],
    },
    {
      title: 'Canteen',
      icon: <UtensilsCrossed className="text-red-500 text-2xl" />,
      data: [
        { label: 'In-House Canteen', value: 'Yes', icon: <UtensilsCrossed className="text-green-600 text-xl" /> },
        { label: 'Overall Seating Capacity', value: '250', icon: <UtensilsCrossed className="text-blue-500 text-xl" /> },
        { label: 'Canteen Staff', value: '05', icon: <Users2 className="text-yellow-500 text-xl" /> },
      ],
    },
    {
      title: 'Garden',
      icon: <Leaf className="text-green-600 text-2xl" />,
      data: [
        { label: 'Trees Planted', value: '1500', icon: <Leaf className="text-green-700 text-xl" /> },
        { label: 'Gardener Count', value: '00', icon: <Users2 className="text-gray-500 text-xl" /> },
        { label: 'Borewells', value: '01', icon: <Leaf className="text-blue-500 text-xl" /> },
        { label: 'Borewell Working Condition', value: 'Yes', icon: <Leaf className="text-green-500 text-xl" /> },
        { label: 'Dry & Wet Dustbins', value: '04', icon: <Leaf className="text-gray-600 text-xl" /> },
      ],
    },
    {
      title: 'Sports',
      icon: <Medal className="text-yellow-500 text-2xl" />,
      data: [
        { label: 'Basket Ball Court', value: '01', icon: <Medal className="text-orange-500 text-xl" /> },
        { label: 'Volley Ball Court', value: '01', icon: <Medal className="text-red-500 text-xl" /> },
        { label: 'Kho-Kho Court', value: '01', icon: <Medal className="text-blue-400 text-xl" /> },
        { label: 'Long Jump Court', value: '01', icon: <Medal className="text-indigo-400 text-xl" /> },
        { label: '100M Running Track', value: '01', icon: <Medal className="text-pink-500 text-xl" /> },
        { label: 'Yoga & Karate Classes', value: '01', icon: <Medal className="text-teal-500 text-xl" /> },
      ],
    },
    {
      title: 'Alumni',
      icon: <UsersRound className="text-indigo-500 text-2xl" />,
      data: [
        { label: 'Alumni Registrations', value: '155', icon: <UsersRound className="text-purple-500 text-xl" /> },
        { label: 'Alumni Contributions', value: '₹ 20', icon: <Wallet className="text-green-500 text-xl" /> },
        { label: 'Mentoring Sessions', value: 'No', icon: <UsersRound className="text-gray-400 text-xl" /> },
      ],
    },
    {
      title: 'CSR',
      icon: <Wallet className="text-green-700 text-2xl" />,
      data: [
        { label: 'CSR Fund Inflows', value: '₹ 9,00,000/-', icon: <Wallet className="text-green-500 text-xl" /> },
        { label: 'CSR Contributions', value: 'STEM Lab, Computer Lab, Smart Board', icon: <School className="text-blue-400 text-xl" /> },
      ],
    },
    {
      title: 'Achievements',
      icon: <Trophy className="text-yellow-600 text-2xl" />,
      data: [
        { label: 'Academic Achievements', value: 'SSLC District Toppers: 03 Students', icon: <Trophy className="text-blue-500 text-xl" /> },
        { label: 'Sports Achievements', value: 'Kho-Kho Division Level', icon: <Medal className="text-pink-500 text-xl" /> },
        { label: 'Cultural Achievements', value: 'District Level', icon: <Medal className="text-purple-500 text-xl" /> },
        { label: 'Staff Achievements', value: 'State Level Resource Person in Maths & Social Science', icon: <Trophy className="text-orange-500 text-xl" /> },
      ],
    },
  ];

  // const statTabsData = [
  //   {
  //     title: 'Student',
  //     icon: '🎓',
  //     data: [
  //       { label: 'Total Student Count', value: '205' },
  //       { label: 'Student Attendance', value: '98%' },
  //       { label: 'Health Checkup Conducted', value: '238' },
  //     ],
  //   },
  //   {
  //     title: 'Results',
  //     icon: '🧪',
  //     data: [
  //       { label: 'SSLC Pass Percentage', value: '100%' },
  //       { label: 'Topper Marks', value: '614 (98.24%)' },
  //       { label: 'Distinctions in SSLC', value: '17 Students' },
  //       { label: 'Students Qualified for CET', value: '20' },
  //       { label: 'Students Qualified for NEET', value: '03' },
  //     ],
  //   },
  //   {
  //     title: 'Staff',
  //     icon: '👨‍🏫',
  //     data: [
  //       { label: 'Teaching Staff Count', value: '08' },
  //       { label: 'Non-Teaching Staff Count', value: '04' },
  //       { label: 'Vacant Positions', value: '0' },
  //     ],
  //   },
  //   {
  //     title: 'Infrastructure',
  //     icon: '🏫',
  //     data: [
  //       { label: 'Building Type', value: 'Own' },
  //       { label: 'Campus Area', value: '6.9 Acres' },
  //       { label: 'No. of Classrooms', value: '06' },
  //       { label: 'Science Laboratories', value: '03' },
  //       { label: 'Computer Laboratory', value: '01' },
  //       { label: 'STEM Laboratory', value: '01' },
  //       { label: 'No. of Computers', value: '25' },
  //       { label: 'Library Books', value: '2500' },
  //       { label: 'Smart Classroom', value: '01' },
  //       { label: 'Smart Board', value: '01' },
  //       { label: 'Drinking Water Purifiers', value: '04' },
  //       { label: 'Boys Toilets', value: '00' },
  //       { label: 'Girls Toilets', value: '40' },
  //       { label: 'Internet Connectivity', value: 'Yes' },
  //       { label: 'CCTV Cameras', value: '08' },
  //       { label: 'Fire & Safety Equipment', value: '03 Sets' },
  //       { label: 'Electricity Poles in Campus', value: '06' },
  //       { label: 'Bulbs in Campus', value: 'Solar Light - 08, Street Light - 05' },
  //     ],
  //   },
  //   {
  //     title: 'Hostel',
  //     icon: '🛏️',
  //     data: [
  //       { label: 'Students in Hostel', value: '205' },
  //       { label: 'Room Occupancy Status', value: '15' },
  //       { label: 'Daily Hostel Attendance', value: '205' },
  //       { label: 'Bed Cots (2 Tier)', value: '100' },
  //       { label: 'Beds & Bedsheets', value: '250' },
  //       { label: 'Pillows & Blankets', value: '250' },
  //       { label: 'Bathrooms for Boys', value: '00' },
  //       { label: 'Bathrooms for Girls', value: '40' },
  //       { label: 'Hot Water Supply', value: 'Yes' },
  //       { label: 'Staff Nurse for Health Checkup', value: '01' },
  //       { label: 'Emergency Ambulance in Campus', value: 'No' },
  //     ],
  //   },
  //   {
  //     title: 'Canteen',
  //     icon: '🍽️',
  //     data: [
  //       { label: 'In-House Canteen', value: 'Yes' },
  //       { label: 'Overall Seating Capacity', value: '250' },
  //       { label: 'Canteen Staff', value: '05' },
  //     ],
  //   },
  //   {
  //     title: 'Garden',
  //     icon: '🌱',
  //     data: [
  //       { label: 'Trees Planted', value: '1500' },
  //       { label: 'Gardener Count', value: '00' },
  //       { label: 'Borewells', value: '01' },
  //       { label: 'Borewell Working Condition', value: 'Yes' },
  //       { label: 'Dry & Wet Dustbins', value: '04' },
  //     ],
  //   },
  //   {
  //     title: 'Sports',
  //     icon: '🏅',
  //     data: [
  //       { label: 'Basket Ball Court', value: '01' },
  //       { label: 'Volley Ball Court', value: '01' },
  //       { label: 'Kho-Kho Court', value: '01' },
  //       { label: 'Long Jump Court', value: '01' },
  //       { label: '100M Running Track', value: '01' },
  //       { label: 'Yoga & Karate Classes', value: '01' },
  //     ],
  //   },
  //   {
  //     title: 'Alumni',
  //     icon: '👥',
  //     data: [
  //       { label: 'Alumni Registrations', value: '155' },
  //       { label: 'Alumni Contributions', value: '₹ 20' },
  //       { label: 'Mentoring Sessions', value: 'No' },
  //     ],
  //   },
  //   {
  //     title: 'CSR',
  //     icon: '💰',
  //     data: [
  //       { label: 'CSR Fund Inflows', value: '₹ 9,00,000/-' },
  //       { label: 'CSR Contributions', value: 'STEM Lab, Computer Lab, Smart Board' },
  //     ],
  //   },
  //   {
  //     title: 'Achievements',
  //     icon: '🏆',
  //     data: [
  //       { label: 'Academic Achievements', value: 'SSLC District Toppers: 03 Students' },
  //       { label: 'Sports Achievements', value: 'Kho-Kho Division Level' },
  //       { label: 'Cultural Achievements', value: 'District Level' },
  //       { label: 'Staff Achievements', value: 'State Level Resource Person in Maths & Social Science' },
  //     ],
  //   },
  // ];

  


  

  const statMeta: {
    label: string;
    icon: React.ReactNode;
    colorClass: string;
  }[] = [
      {
        label: "of Campus",
        colorClass: "text-teal-500",
        icon: (
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
        ),
      },
      {
        label: "Students Studying",
        colorClass: "text-blue-500",
        icon: (
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
          </svg>
        ),
      },
      {
        label: "Education Heroes",
        colorClass: "text-teal-500",
        icon: (
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ),
      },
      {
        label: "Alumni Network",
        colorClass: "text-blue-500",
        icon: (
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
          </svg>
        ),
      },
      {
        label: "Free Education with Food & Lodging",
        colorClass: "text-yellow-500",
        icon: (
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
          </svg>
        ),
      },
      {
        label: "Passing Percentage",
        colorClass: "text-blue-500",
        icon: (
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
        ),
      },
      {
        label: "Girl Safe Environment",
        colorClass: "text-yellow-500",
        icon: (
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
          </svg>
        ),
      },
      {
        label: "CSR Projects Completed",
        colorClass: "text-teal-500",
        icon: (
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z" />
          </svg>
        ),
      },
    ];

  // const [stats, setStats] = useState<StatItem[]>([]);

  // useEffect(() => {
  //   fetch("/api/campus-stats")
  //     .then((res) => res.json())
  //     .then((data: { label: string; value: string }[]) => {
  //       const final = statMeta.map((meta) => {
  //         const matched = data.find((d) => d.label === meta.label);
  //         return {
  //           label: meta.label,
  //           value: matched?.value || "-",
  //           icon: meta.icon,
  //           colorClass: meta.colorClass,
  //         };
  //       });
  //       setStats(final);
  //     })
  //     .catch(console.error);
  // }, []);

  



  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Slider Section */}
     <HeroSlider/>

   
     <DetailedStatisticsTabs sections={statTabsData} />

      {/* <StatisticsSection stats={stats} /> */}


      {/* Ministers Section */}
      <section className="py-12 bg-gradient-to-b from-[#f9fafb] via-[#e8f1fa] to-[#d9eaf8]">
  <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
      Our Leadership
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
      {[
        {
          name: "SRI SIDDARAMAIAH",
          position: "Hon'ble Chief Minister",
          image: "/CM1.webp",
        },
        {
          name: "SRI D. K. SHIVAKUMAR",
          position: "Hon'ble Deputy Chief Minister",
          image: "/CM2.webp",
        },
        {
          name: "DR. H. C. MAHADEVAPPA",
          position: "Hon'ble Social Welfare Department Minister",
          image: "/CM3.webp",
        },
        {
          name: "SRI. SHIVARAJ TANGADAGI",
          position: "Minister for Backward Class Development",
          image: "/CM4.webp",
        },
      ].map((leader, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
        >
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-3">
            <img
              src={leader.image}
              alt={leader.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-blue-100"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-md font-bold text-gray-900 mb-1">
              {leader.name}
            </h3>
            <p className="text-blue-600 font-medium text-sm">
              {leader.position}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Dynamic Sections */}
      {sections.map((section) => renderSection(section))}

      {/* Food Quality & Transparency Section */}
      <section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {/* Left Text: Span 4 out of 12 */}
      <div className="lg:col-span-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Food Quality & Transparency
        </h2>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          The Social Welfare Department of Karnataka is taking a bold step
          towards transparency, accountability, and social audit by ensuring
          meal quality and hostels is closely monitored. This initiative
          enhances public trust and provides real-time insights into student
          nutrition, ensuring that meals served in residential schools and
          hostels meet the highest standards of quality and hygiene.
        </p>
        <a
          href="https://x.com/kreiskrcrs661"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800"
        >
          Follow our Food Transparency Updates
          <svg
            className="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </svg>
        </a>
      </div>

      {/* Right Image Carousel: Span 8 out of 12 */}
      <div className="lg:col-span-8 relative">
        <div className="rounded-lg shadow-lg">
          <div className="relative h-80">
            <div className="overflow-hidden absolute inset-0 flex items-center">
              <div className="flex animate-scroll space-x-4 whitespace-nowrap px-4">
                {[
                  "/f1.jpeg", "/f2.jpeg", "/f3.jpeg", "/f4.jpeg",
                  "/f5.jpeg", "/f6.jpeg", "/f7.jpeg", "/f8.jpeg",
                  "/f9.jpeg", "/f10.jpeg", "/f11.jpeg", "/f12.jpeg",
                  "/f13.jpeg", "/f14.jpeg", "/f15.jpeg", "/f16.jpeg"
                ].map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Food quality ${index + 1}`}
                    className="h-80 w-80 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;