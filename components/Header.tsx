import React, { useState, useContext, createContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, Plus, Minus, Globe, LogIn, Users, Briefcase, Heart, ChevronDown, FileText } from 'lucide-react';

// Language and Font Context
interface AppContextType {
  language: 'en' | 'kn';
  fontSize: number;
  setLanguage: (lang: 'en' | 'kn') => void;
  setFontSize: (size: number) => void;
}

const AppContext = createContext<AppContextType>({
  language: 'en',
  fontSize: 16,
  setLanguage: () => { },
  setFontSize: () => { },
});

export const useAppContext = () => useContext(AppContext);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'kn'>('en');
  const [fontSize, setFontSize] = useState(16);

  return (
    <AppContext.Provider value={{ language, fontSize, setLanguage, setFontSize }}>
      {children}
    </AppContext.Provider>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const router = useRouter();
  const { language, fontSize, setLanguage, setFontSize } = useAppContext();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);


  const navItems = [
    { path: '/', label: { en: 'Home', kn: 'ಮುಖ್ಯ' } },
    { path: '/about', label: { en: 'About', kn: 'ನಮ್ಮ ಬಗ್ಗೆ' } },
    { path: '/schools', label: { en: 'Academics', kn: 'ಶಾಲೆಗಳು' } },
    { path: '/school-facilities', label: { en: 'School Facilities', kn: 'ಪ್ರವೇಶ' } },
    
    // { path: '/admissions', label: { en: 'Admissions', kn: 'ಪ್ರವೇಶ' } },
    { path: '/events', label: { en: 'Events', kn: 'ಕಾರ್ಯಕ್ರಮಗಳು' } },
    { path: '/results', label: { en: 'Results', kn: 'ಫಲಿತಾಂಶಗಳು' }, isFlashing: true },
    { path: '/gallery', label: { en: 'Gallery', kn: 'ಗ್ಯಾಲರಿ' } },
    { path: '/contact', label: { en: 'Contact', kn: 'ಸಂಪರ್ಕ' } },
  ];

  const connectPages = [
    { path: '/connect/alumni', label: { en: 'Alumni Connect', kn: 'ಹಳೆಯ ವಿದ್ಯಾರ್ಥಿ ಸಂಪರ್ಕ' } },
    { path: '/connect/mentor', label: { en: 'Mentor Connect', kn: 'ಮಾರ್ಗದರ್ಶಕ ಸಂಪರ್ಕ' } },
    { path: '/connect/csr', label: { en: 'CSR Connect', kn: 'CSR ಸಂಪರ್ಕ' } },
    { path: '/blog', label: { en: 'Blog', kn: 'ಬ್ಲಾಗ್' } },
  ];

  const loginMenuItems = [
    {
      label: { en: 'Alumni Login', kn: 'ಹಳೆಯ ವಿದ್ಯಾರ್ಥಿ ಲಾಗಿನ್' },
      href: '/login/alumni',
      icon: Users,
      color: 'text-blue-600',
      description: { en: 'Former Students', kn: 'ಹಳೆಯ ವಿದ್ಯಾರ್ಥಿಗಳು' }
    },
    {
      label: { en: 'CSR Login', kn: 'CSR ಲಾಗಿನ್' },
      href: '/login/csr',
      icon: Briefcase,
      color: 'text-green-600',
      description: { en: 'Corporate Partners', kn: 'ಕಾರ್ಪೊರೇಟ್ ಪಾಲುದಾರರು' }
    },
    {
      label: { en: 'Mentor Login', kn: 'ಮಾರ್ಗದರ್ಶಕ ಲಾಗಿನ್' },
      href: '/login/mentor',
      icon: Heart,
      color: 'text-purple-600',
      description: { en: 'Student Mentors', kn: 'ವಿದ್ಯಾರ್ಥಿ ಮಾರ್ಗದರ್ಶಕರು' }
    },
    {
      label: { en: 'Admin Login', kn: 'ಆಡಳಿತ ಲಾಗಿನ್' },
      href: '/admin/login',
      icon: LogIn,
      color: 'text-gray-600',
      description: { en: 'System Administration', kn: 'ಸಿಸ್ಟಮ್ ಆಡಳಿತ' }
    },
  ];
  const increaseFontSize = () => {
    if (fontSize < 24) {
      setFontSize(fontSize + 2);
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 12) {
      setFontSize(fontSize - 2);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'kn' : 'en');
  };

  return (
    <div style={{ fontSize: `${fontSize}px` }}>
      <header className="bg-white shadow-lg sticky top-0 z-50">
        {/* Top utility bar */}
        <div className="bg-gray-100 border-b border-gray-200">
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-end items-center h-10">
              {/* Government Logo */}
              <div className="flex items-center">
                {/* <img 
                  src="https://getmycollege.in/wp-content/uploads/2025/06/Screenshot-2025-06-12-131427.jpg" 
                  alt="Government of Karnataka" 
                  className="h-12 mr-3"
                /> */}
              </div>

              {/* Left side - Connect Pages */}
              <div className="flex items-center space-x-6 mr-8">
                {connectPages.map((page) => (
                  <Link
                    key={page.path}
                    href={page.path}
                    className={`text-sm font-medium transition-colors hover:text-blue-600 ${router.pathname === page.path ||
                      (router.pathname.startsWith("/achievements") &&
                        page.path === "/achievements")
                      ? "text-blue-600"
                      : "text-gray-700"
                      }`}
                  >
                    {page.label[language]}
                  </Link>
                ))}
              </div>

              {/* Right side - Controls and Login */}
              <div className="flex items-center space-x-4">
                {/* Font Size Controls */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={decreaseFontSize}
                    className="p-1 text-gray-600 hover:text-gray-800 transition-colors"
                    title="Decrease font size"
                  >
                    <Minus className="h-3 w-3" />
                  </button>
                  <span className="text-xs text-gray-600">A</span>
                  <button
                    onClick={increaseFontSize}
                    className="p-1 text-gray-600 hover:text-gray-800 transition-colors"
                    title="Increase font size"
                  >
                    <Plus className="h-3 w-3" />
                  </button>
                </div>

                {/* Language Switcher */}
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-1 text-xs text-gray-600 hover:text-gray-800 transition-colors"
                  title="Switch language"
                >
                  <Globe className="h-3 w-3" />
                  <span>{language === "en" ? "ಕನ್ನಡ" : "English"}</span>
                </button>

                {/* Login Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setShowLoginDropdown(!showLoginDropdown)}
                    className="flex items-center space-x-1 text-xs text-gray-600 hover:text-gray-800 transition-colors px-3 py-2 rounded hover:bg-gray-200"
                  >
                    <LogIn className="h-3 w-3" />
                    <span>{language === "en" ? "Login" : "ಲಾಗಿನ್"}</span>
                    <ChevronDown className="h-3 w-3" />
                  </button>

                  {showLoginDropdown && (
                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                      <div className="py-1">
                        {loginMenuItems.map((item, index) => (
                          <Link
                            key={index}
                            href={item.href}
                            className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors border-b border-gray-100 last:border-b-0"
                            onClick={() => setShowLoginDropdown(false)}
                          >
                            <div className="flex items-center space-x-3">
                              <item.icon className={`h-4 w-4 ${item.color}`} />
                              <div>
                                <div className="font-medium">
                                  {item.label[language]}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {item.description[language]}
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-22 py-2">
            <Link href="/" className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img
                  src="/KREIS copy.jpg"
                  alt="School Logo"
                  className="h-20 w-20 rounded-full object-cover border-2 border-blue-600"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">
                  Kittur Rani Chennamma
                </span>
                <span className="text-sm text-gray-600 hidden sm:block">
                  {language === "en"
                    ? "Residential School, Balepura, Devanahalli"
                    : "ವಸತಿ ಶಾಲೆ, ಬಾಲೇಪುರ, ದೇವನಹಳ್ಳಿ"}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.path}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(item.path)}
                  onMouseLeave={() => setOpenDropdown(null)}
                 
                  style={{ paddingBottom: "20px",paddingTop: "20px" }} 
                >
                  {item.path === "/about" ? (
                    <>
                      <div
                        className={`text-lg font-medium transition-colors hover:text-blue-600 relative flex items-center ${router.pathname.startsWith("/about")
                          ? "text-blue-600"
                          : "text-gray-700"
                          }`}
                      >
                        {item.label[language]}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </div>
                      <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-200 z-50 hidden group-hover:block">
                        <div className="py-1">
                          <Link
                            href="/about/kreis"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            About KREIS
                          </Link>
                          <Link
                            href="/about/school"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            About School
                          </Link>
                          <Link
                            href="/about/faculties"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            About Faculties
                          </Link>
                        </div>
                      </div>
                    </>
                  ) : item.path === "/schools" ? (
                    <>
                      <div
                        className={`text-lg font-medium transition-colors hover:text-blue-600 relative flex items-center ${router.pathname.startsWith("/schools")
                          ? "text-blue-600"
                          : "text-gray-700"
                          }`}
                      >
                        {item.label[language]}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </div>
                      <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-200 z-50 hidden group-hover:block">
                        <div className="py-1">

                        <Link
                            href="/schools/statistics"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Academic Insights
                          </Link>
                          <Link
                            href="/schools/development"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Student Development Program
                          </Link>
                         
                          <Link
                            href="/schools/achievements"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Achievements & Activities
                          </Link>

                          <Link
                            href="/schools/calendarofevents"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Calendar of Events
                          </Link>


                          <Link
                            href="/schools"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            School Overview
                          </Link>
                          <Link
                            href="/schools/facility"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            School Facility
                          </Link>
                         
                          <Link
                            href="/schools/hostel"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Hostel & Canteen
                          </Link>
                         
                          <Link
                            href="/schools/amenities"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Amenities
                          </Link>
                        </div>
                      </div>
                    </>
                  ) : item.path === "/achievements" ? (
                    <>
                      <div
                        className={`text-lg font-medium transition-colors hover:text-blue-600 relative flex items-center ${router.pathname.startsWith("/achievements")
                          ? "text-blue-600"
                          : "text-gray-700"
                          }`}
                      >
                        Achievements
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </div>
                      <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-200 z-50 hidden group-hover:block">
                        <div className="py-1">
                          <Link
                            href="/achievements"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            All Achievements
                          </Link>
                          <Link
                            href="/achievements/academic"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Academic Achievements
                          </Link>
                          <Link
                            href="/achievements/sports"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Sports & Physical Achievements
                          </Link>
                          <Link
                            href="/achievements/cultural"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Cultural Achievements
                          </Link>
                          <Link
                            href="/achievements/social"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Social Initiative Activities
                          </Link>
                        </div>
                      </div>
                    </>
                  ) 
                  
                  : item.path === "/school-facilities" ? (
                    <>
                      <div
                        className={`text-lg font-medium transition-colors hover:text-blue-600 relative flex items-center ${router.pathname.startsWith("/school-facilities")
                          ? "text-blue-600"
                          : "text-gray-700"
                          }`}
                      >
                        {item.label[language]}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </div>
                      <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-200 z-50 hidden group-hover:block">
                        <div className="py-1">

                       
                         

                          {/* <Link
                            href="/schools"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            School Overview
                          </Link> */}
                          <Link
                            href="/schools/facility"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                          Infrastructure                          
                          </Link>
                         
                          <Link
                            href="/schools/hostel"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Hostel & Canteen
                          </Link>
                         
                          <Link
                            href="/schools/amenities"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Amenities
                          </Link>
                        </div>
                      </div>
                    </>
                    ): (
                    <Link
                      href={item.path}
                      className={`text-lg font-medium transition-colors hover:text-blue-600 relative ${router.pathname === item.path
                        ? "text-blue-600"
                        : "text-gray-700"
                        } ${item.isFlashing ? "animate-pulse" : ""}`}
                    >
                      {item.label[language]}
                      {item.isFlashing && (
                        <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full animate-ping"></span>
                      )}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden pb-4">
              <div className="flex flex-col space-y-2">
                {/* Connect Pages for Mobile */}
                <div className="border-b border-gray-200 pb-2 mb-2">
                  <p className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Connect
                  </p>
                  {connectPages.map((page) => (
                    <Link
                      key={page.path}
                      href={page.path}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${router.pathname === page.path
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                        }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {page.label[language]}
                    </Link>
                  ))}
                </div>

                {/* Main Navigation for Mobile */}
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={
                      item.path === "/schools" ? "/schools/facility" : item.path
                    }
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors relative ${router.pathname === item.path
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      } ${item.isFlashing ? "animate-pulse" : ""}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label[language]}
                    {item.isFlashing && (
                      <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full animate-ping"></span>
                    )}
                    {item.path === "/schools" && (
                      <div className="mt-2 ml-4 space-y-1">
                        <Link
                          href="/schools"
                          className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-600"
                        >
                          School Overview
                        </Link>
                        <Link
                          href="/schools/facility"
                          className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-600"
                        >
                          School Facility
                        </Link>
                        <Link
                          href="/schools/statistics"
                          className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-600"
                        >
                          Academic Insights
                        </Link>
                        <Link
                          href="/schools/hostel"
                          className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-600"
                        >
                          Hostel & Canteen
                        </Link>
                        <Link
                          href="/schools/development"
                          className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-600"
                        >
                          Student Development Program
                        </Link>
                        <Link
                          href="/schools/amenities"
                          className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-600"
                        >
                          Amenities
                        </Link>
                      </div>
                    )}
                    {item.path === "/achievements" && (
                      <div className="mt-2 ml-4 space-y-1">
                        <Link
                          href="/achievements"
                          className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-600"
                        >
                          All Achievements
                        </Link>
                        <Link
                          href="/achievements/academic"
                          className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-600"
                        >
                          Academic Achievements
                        </Link>
                        <Link
                          href="/achievements/sports"
                          className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-600"
                        >
                          Sports & Physical Achievements
                        </Link>
                        <Link
                          href="/achievements/cultural"
                          className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-600"
                        >
                          Cultural Achievements
                        </Link>
                        <Link
                          href="/achievements/social"
                          className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-600"
                        >
                          Social Initiative Activities
                        </Link>
                      </div>
                    )}
                  </Link>
                ))}

                {/* Login Options for Mobile */}
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <p className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Login
                  </p>
                  {loginMenuItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <item.icon className={`h-4 w-4 mr-3 ${item.color}`} />
                      {item.label[language]}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          )}
        </div>

        {/* Custom CSS for flashing animation */}
      </header>

      {/* Announcement Banner */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 text-white py-2 shadow-md overflow-hidden announcement-banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-animation whitespace-nowrap">
            <span className="inline-flex items-center space-x-8">
              <span className="flex items-center space-x-2">
                <span className="animate-pulse">🔴</span>
                <span className="font-semibold text-sm">
                  {language === "en" ? "BREAKING NEWS:" : "ತಾಜಾ ಸುದ್ದಿ:"}
                </span>
                <span className="text-sm">
                  {language === "en"
                    ? "SSLC Results 2024 declared! Check your results now"
                    : "SSLC ಫಲಿತಾಂಶಗಳು 2024 ಪ್ರಕಟವಾಗಿದೆ! ಈಗಲೇ ಪರಿಶೀಲಿಸಿ"}
                </span>
              </span>
              <span className="text-sm">•</span>
              <span className="text-sm">
                {language === "en"
                  ? "New admissions open for Academic Year 2024-25"
                  : "ಶೈಕ್ಷಣಿಕ ವರ್ಷ 2024-25 ಗೆ ಹೊಸ ಪ್ರವೇಶಗಳು ತೆರೆದಿವೆ"}
              </span>
              <span className="text-sm">•</span>
              <span className="text-sm">
                {language === "en"
                  ? "Alumni Connect portal now live - Register today!"
                  : "ಹಳೆಯ ವಿದ್ಯಾರ್ಥಿ ಸಂಪರ್ಕ ಪೋರ್ಟಲ್ ಈಗ ಲೈವ್ - ಇಂದೇ ನೋಂದಾಯಿಸಿ!"}
              </span>
              <span className="text-sm">•</span>
              <span className="text-sm">
                {language === "en"
                  ? "CSR partnerships available - Join our mission"
                  : "CSR ಪಾಲುದಾರಿಕೆಗಳು ಲಭ್ಯ - ನಮ್ಮ ಮಿಷನ್‌ಗೆ ಸೇರಿ"}
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Custom CSS for scrolling animation */}
    </div>
  );
};

export default Header;