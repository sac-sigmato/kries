import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { GraduationCap, Users, Award, TrendingUp, MapPin, Briefcase, Heart, Star } from 'lucide-react';
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";


const AlumniConnect: React.FC = () => {

  const [showPayment, setShowPayment] = useState(false);

  const AlumniModal = ({ isOpen, onClose, children, title }: {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
  }) => (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        </Transition.Child>
  
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title className="text-lg font-bold text-gray-900 mb-4">{title}</Dialog.Title>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );

  

  const alumniStats = [
    { icon: Users, number: "120+", label: "Alumni Worldwide" },
    { icon: Briefcase, number: "98%", label: "Employment Rate" },
    { icon: Award, number: "200+", label: "Industry Leaders" },
    { icon: Heart, number: "10+", label: "Mentors Active" }
  ];
  const [showForm, setShowForm] = useState(false);

  const alumniList = [
    { name: "Anu", studying: "BSc Nursing", college: "SNR College Kolar", classOf: 2022 },
    { name: "Bhavya R", studying: "MBBS", college: "Sri Atal Bihari College, Shivajinagar", classOf: 2022 },
    { name: "Gaganashree", studying: "Fashion Designing", college: "Franklin Institute Bangalore", classOf: 2022 },
    { name: "Ganavi", studying: "BSc Agriculture", college: "GKVK, Chintamani", classOf: 2022 },
    { name: "Nethravati", studying: "Engineering", college: "Vemana Institute of Technology, Bangalore", classOf: 2022 },
    { name: "Rakshitha KR", studying: "Law", college: "Basaveshwara Law College", classOf: 2022 },
    { name: "Sanjana R", studying: "BSc", college: "Pragathi First Grade College", classOf: 2022 },
    { name: "Vanajakshi CK", studying: "BCom", college: "First Grade College, Hoskote", classOf: 2022 },
    { name: "Lavanya", studying: "Engineering", college: "RC College, Bangalore", classOf: 2022 },
    { name: "Mohita M", studying: "BBM", college: "Presidency University, Bangalore", classOf: 2022 },
    { name: "Bhanupriya", studying: "BCA", college: "Presidency University, Bangalore", classOf: 2022 },
    { name: "Anushree", studying: "BA", college: "Govt. First Grade College, Chintamani", classOf: 2022 },
    { name: "Navyashree", studying: "BCom", college: "Maharani College, Bangalore", classOf: 2022 },
    { name: "Sandhya L", studying: "BSc", college: "Dolphin Degree College", classOf: 2022 },
    { name: "Chandrika", studying: "BSc Nursing", college: "Channegowda Nursing College", classOf: 2022 },
  ];
  const boyImages = ["/al5.webp", "/al2.webp", "/al5.webp", "/al1.webp"];
  const girlImages = ["/al1.webp", "/al2.webp", "/al4.webp", "/al5.webp"]; // can be cycled or one

  const featuredAlumni2 = [
    {
      id: 1,
      name: "Dr. Bhaskar Babu G",
      position: "Director General",
      department: "Administration",
      qualification: "Ph.D. in Education Administration",
      experience: "25 years",
      specialization: "Educational Leadership, Rural Education Policy",
      image: "/al9.webp",
      email: "director@kreis.kar.nic.in",
      phone: "+91 80 2234 5678",
      achievements: [
        "Padma Shri Awardee",
        "National Education Excellence Award",
        "25+ Research Publications",
      ],
    },
    {
      id: 2,
      name: "Mr. Subramanyam S A",
      position: "Academic Director",
      department: "Academics",
      qualification: "M.Ed., Ph.D. in Curriculum Development",
      experience: "20 years",
      specialization: "Curriculum Design, Teacher Training",
      image: "/al8.webp",
      email: "academic@kreis.kar.nic.in",
      phone: "+91 80 2234 5679",
      achievements: [
        "Best Teacher Award",
        "Curriculum Innovation Award",
        "Educational Research Excellence",
      ],
    },
    
    {
      id: 4,
      name: "Neha Rao",
      position: "Sr Product Manager",
      department: "Technology",
      qualification: "MBA, B.Tech",
      experience: "14 years",
      specialization: "Product Strategy, SaaS Platforms",
      image: "/al4.webp",
      email: "suresh.reddy@microsoft.com",
      phone: "+91 98765 43210",
      achievements: [
        "Led Microsoft Azure Product Growth",
        "Top 100 Tech Influencer (2023)",
        "ProductCon Speaker",
      ],
    },
    {
      id: 5,
      name: "Priya Sharma",
      position: "Quality Analyst",
      department: "IT Services",
      qualification: "B.E. in Computer Science",
      experience: "9 years",
      specialization: "Test Automation, Agile QA",
      image: "/al5.webp",
      email: "priya.sharma@infosys.com",
      phone: "+91 91234 56789",
      achievements: [
        "Awarded QA Innovator at Infosys",
        "Published 3 QA Frameworks",
        "Speaker at SeleniumConf",
      ],
    },
    {
      id: 6,
      name: "Vikram Joshi",
      position: "Sales Manager",
      department: "E-Commerce",
      qualification: "MBA in Marketing",
      experience: "11 years",
      specialization: "Sales Strategy, Team Management",
      image: "/al6.webp",
      email: "vikram.joshi@amazon.com",
      phone: "+91 99887 66554",
      achievements: [
        "Amazon Star Performer (2022)",
        "Scaled B2C Revenue by 300%",
        "Mentored 15+ Sales Executives",
      ],
    },
    {
      id: 7,
      name: "Satish Gaokar",
      position: "Sr Business Manager",
      department: "Operations",
      qualification: "MBA, B.Com",
      experience: "17 years",
      specialization: "Business Strategy, Operations",
      image: "/al7.webp",
      email: "satish.gaokar@qoocer.com",
      phone: "+91 90909 19191",
      achievements: [
        "Launched 4 Business Units",
        "Process Excellence Leader",
        "Operational Efficiency Award",
      ],
    },
    {
      id: 8,
      name: "Dr. Shailaja",
      position: "Physical Education Director",
      department: "Sports",
      qualification: "M.P.Ed., Sports Coaching Certification",
      experience: "14 years",
      specialization: "Sports Training, Physical Fitness, Athletic Development",
      image: "/al2.webp",
      email: "sports@kreis.kar.nic.in",
      phone: "+91 80 2234 5684",
      achievements: [
        "State Sports Excellence Award",
        "Athletic Training Certification",
        "Youth Development Award",
      ],
    },
    {
      id: 9,
      name: "Mrs. Lakshmi Desai",
      position: "Social Science Coordinator",
      department: "Social Studies",
      qualification: "M.A. History, M.A. Political Science, B.Ed.",
      experience: "17 years",
      specialization: "Indian History, Civics, Social Studies Methodology",
      image: "/al1.webp",
      email: "socialscience@kreis.kar.nic.in",
      phone: "+91 80 2234 5685",
      achievements: [
        "History Teaching Excellence",
        "Social Awareness Programs",
        "Community Engagement Award",
      ],
    },
  ];
  
  const benefits = [
    {
      icon: Users,
      title: "Network & Connect",
      description: "Connect with fellow alumni across the globe and build meaningful professional relationships."
    },
    {
      icon: Heart,
      title: "Mentor Students",
      description: "Guide current students and help them navigate their career paths with your experience."
    },
    {
      icon: Award,
      title: "Give Back",
      description: "Contribute to scholarships, infrastructure development, and other initiatives."
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Access exclusive job opportunities and professional development resources."
    }
  ];

  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Users className="h-16 w-16 mx-auto mb-6" />
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Alumni Connect</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Join our vibrant community of KREIS alumni making a difference worldwide. Connect, mentor, and give back to your alma mater.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button
  onClick={() => setShowForm(true)}
  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
>
  Join Alumni Network
</button>

                {/* <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Update Your Profile
                </button> */}
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {alumniStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


       

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
  {alumniList.map((alum, idx) => {
    // Define male indexes
    const maleIndexes = [5, 6, 7, 8]; // as per your mapping
    const isMale = maleIndexes.includes(idx);

    // Assign image
    const imageSrc = isMale
      ? boyImages[maleIndexes.indexOf(idx)] // get exact boy image
      : girlImages[idx % girlImages.length]; // cycle girl images

    return (
      <div
        key={idx}
        className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center"
      >
        <img
          src={imageSrc}
          alt={alum.name}
          className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-blue-600"
        />
        <h3 className="text-lg font-bold text-gray-900 mb-1">{alum.name}</h3>
        <p className="text-sm text-blue-700 font-medium mb-1">{alum.studying}</p>
        <p className="text-sm text-gray-600 mb-2">{alum.college}</p>
        <div className="text-sm text-gray-500 font-medium">🎓 Class of {alum.classOf}</div>
      </div>
    );
  })}
</div>



        {/* Featured Alumni Section */}
        {/* <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Alumni
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet some of our distinguished alumni who are making a significant impact in their respective fields.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredAlumni.map((alumni, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="relative">
                    <img
                      src={alumni.image}
                      alt={alumni.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Class of 2025
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{alumni.name}</h3>
                    <p className="text-blue-600 font-semibold mb-3"></p>
                    <p className="text-gray-600 text-sm mb-3"></p>
                    <div className="flex items-center text-gray-500 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                     Bengaluru
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Join Alumni Connect?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the benefits of staying connected with your alma mater and fellow alumni.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        {/* <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Read inspiring stories from our alumni who have achieved remarkable success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredAlumni.slice(0, 3).map((alumni, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-center mb-6">
                    <img
                      src={alumni.image}
                      alt={alumni.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{alumni.name}</h4>
                      <p className="text-blue-600 text-sm">Class of 2025</p>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "KREIS gave me the foundation to dream big and achieve my goals. The values and education I received shaped my entire career journey."
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Connect?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of KREIS alumni worldwide and be part of our growing community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
  onClick={() => setShowForm(true)}
  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
>
  Join Alumni Network
</button>

              <button
  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
  onClick={() => setShowPayment(true)}
>
  Contribute
</button>

            </div>
          </div>
        </section>
      </div>

      <AlumniModal isOpen={showForm} onClose={() => setShowForm(false)} title="Alumni Registration">

      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg">
  <form className="space-y-6 max-h-[80vh] overflow-y-auto px-1">
    {/* Grid Inputs */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <input
        type="text"
        placeholder="Full Name *"
        required
        className="w-full px-4 py-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="email"
        placeholder="Email *"
        required
        className="w-full px-4 py-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="tel"
        placeholder="Phone Number"
        className="w-full px-4 py-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="Qualification"
        className="w-full px-4 py-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="Department / Stream"
        className="w-full px-4 py-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500"
      />
      <select
        required
        className="w-full px-4 py-3 border rounded-md border-gray-300 bg-white focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select Passing Year</option>
        {Array.from({ length: 30 }, (_, i) => 1995 + i)
          .reverse()
          .map((year) => (
            <option key={year}>{year}</option>
          ))}
      </select>
      <input
        type="text"
        placeholder="Current Job Title"
        className="w-full px-4 py-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="Company Name"
        className="w-full px-4 py-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="LinkedIn / Website (optional)"
        className="w-full px-4 py-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Mentor Question */}
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Would you like to mentor students?
      </label>
      <div className="flex gap-6">
        <label className="inline-flex items-center gap-2">
          <input type="radio" name="mentor" value="yes" className="accent-blue-600" />
          Yes
        </label>
        <label className="inline-flex items-center gap-2">
          <input type="radio" name="mentor" value="no" className="accent-blue-600" />
          No
        </label>
      </div>
    </div>

    {/* Contribution Areas */}
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Areas you'd like to contribute
      </label>
      <div className="flex flex-wrap gap-4">
        <label className="inline-flex items-center gap-2">
          <input type="checkbox" value="Scholarships" className="accent-blue-600" />
          Scholarships
        </label>
        <label className="inline-flex items-center gap-2">
          <input type="checkbox" value="Guest Talks" className="accent-blue-600" />
          Guest Talks
        </label>
        <label className="inline-flex items-center gap-2">
          <input type="checkbox" value="Events" className="accent-blue-600" />
          Alumni Events
        </label>
        <label className="inline-flex items-center gap-2">
          <input type="checkbox" value="Infrastructure" className="accent-blue-600" />
          Infrastructure
        </label>
      </div>
    </div>

    {/* Message Box */}
    <div>
      <textarea
        placeholder="Share a message or memory (optional)"
        rows={3}
        className="w-full px-4 py-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Submit */}
    <div className="flex justify-end">
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition"
      >
        Submit
      </button>
    </div>
  </form>
</div>

    </AlumniModal>

    <AlumniModal isOpen={showPayment} onClose={() => setShowPayment(false)} title="Contribute to KREIS">
  <div className="space-y-6 px-1 max-h-[70vh] overflow-y-auto">
    <p className="text-gray-700">Select a payment method and proceed with your contribution. This is a dummy interface.</p>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div className="border rounded-lg p-4 hover:shadow-lg transition cursor-pointer">
        <input type="radio" name="payment" id="upi" className="accent-blue-600 mr-2" />
        <label htmlFor="upi" className="font-medium">UPI</label>
        <p className="text-sm text-gray-500 mt-2">Pay using PhonePe, GPay, Paytm, etc.</p>
      </div>
      <div className="border rounded-lg p-4 hover:shadow-lg transition cursor-pointer">
        <input type="radio" name="payment" id="card" className="accent-blue-600 mr-2" />
        <label htmlFor="card" className="font-medium">Credit / Debit Card</label>
        <p className="text-sm text-gray-500 mt-2">Visa, MasterCard, RuPay supported.</p>
      </div>
      <div className="border rounded-lg p-4 hover:shadow-lg transition cursor-pointer">
        <input type="radio" name="payment" id="netbanking" className="accent-blue-600 mr-2" />
        <label htmlFor="netbanking" className="font-medium">Net Banking</label>
        <p className="text-sm text-gray-500 mt-2">All major Indian banks supported.</p>
      </div>
    </div>

    <div>
      <label className="block mb-1 font-semibold text-sm text-gray-700">Contribution Amount</label>
      <input
        type="number"
        placeholder="Enter amount (e.g., 1000)"
        className="w-full px-4 py-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div className="flex justify-end">
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition"
        onClick={() => {
          alert("Thank you for your contribution!");
          setShowPayment(false);
        }}
      >
        Make Payment
      </button>
    </div>
  </div>
</AlumniModal>



    </Layout>

    
  );
};

export default AlumniConnect;