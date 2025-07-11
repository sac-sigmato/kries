import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { Building, Users, Award, TrendingUp, Heart, CheckCircle, Target, Globe, Handshake, ArrowRight } from 'lucide-react';
import { supabase } from '@/lib/supabase-client';


const CSRConnect: React.FC = () => {
  const impactStats = [
    { icon: Building, number: "5+", label: "Corporate Partners" },
    { icon: Users, number: "1,250+", label: "Students Benefited" },
    { icon: Award, number: "10 Lakhs+", label: "CSR Investment" },
    { icon: TrendingUp, number: "95%", label: "Impact Success Rate" }
  ];

  const [showModal, setShowModal] = useState(false);
  const [csrOpportunities, setCsrOpportunities] = useState<any[]>([]);


  useEffect(() => {
    fetchCsrOpportunities();
  }, []);

  const fetchCsrOpportunities = async () => {
    const { data, error } = await supabase
      .from('csr_opportunities')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error) {
      setCsrOpportunities(data || []);
    }
  };


  const partnershipBenefits = [
    "Brand visibility through school infrastructure naming rights",
    "Employee engagement through volunteering opportunities",
    "Detailed impact reports with measurable outcomes",
    "Tax benefits under Section 80G of Income Tax Act",
    "Recognition at KREIS events and publications",
    "Opportunity to mentor students and faculty"
  ];

  const successStories = [
    {
      company: "TechCorp Solutions",
      project: "Digital Learning Center",
      investment: "₹25 Lakhs",
      impact: "Equipped 5 schools with computer labs, benefiting 1,200 students",
      year: "2023"
    },
    {
      company: "Green Energy Ltd",
      project: "Solar Power Initiative",
      investment: "₹40 Lakhs",
      impact: "Installed solar panels in 10 schools, saving ₹2 Lakhs annually",
      year: "2023"
    },
    {
      company: "HealthFirst Pharma",
      project: "Student Health Program",
      investment: "₹15 Lakhs",
      impact: "Provided health checkups and nutrition support to 2,000 students",
      year: "2024"
    }
  ];


  
  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">CSR Connect</h1>
                <p className="text-xl text-green-100 mb-8">
                  Partner with KREIS to create lasting impact in rural education. Transform lives through strategic CSR investments that deliver measurable social outcomes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                <button
  onClick={() => setShowModal(true)}
  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors flex items-center justify-center"
>
  Become a Partner
  <ArrowRight className="ml-2 h-5 w-5" />
</button>

                  <a
  href="/ATG_Certificate_for_CSR.pdf"
  download
  className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
>
  Download ATG Certificate
</a>

                </div>
              </div>
              <div className="relative">
                <img
                  src="https://getmycollege.in/wp-content/uploads/2025/06/481659797_1158152906104757_7907473054770689485_n-1024x576.jpg?auto=compress&cs=tinysrgb&w=800"
                  alt="Students in classroom"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-600 text-white p-3 rounded-full">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">10,000+</p>
                      <p className="text-gray-600">Lives Impacted</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our CSR Impact</h2>
              <p className="text-xl text-gray-600">Measurable outcomes from our corporate partnerships</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {impactStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-green-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>



        

        {/* CSR Opportunities */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                CSR Investment Opportunities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from the below requirements to invest that align with your company's values and create meaningful impact
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {csrOpportunities.map((opportunity, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-full text-2xl">
                      {opportunity.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{opportunity.title}</h3>
                      <p className="text-gray-600 mb-4">{opportunity.description}</p>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Investment Range</p>
                          <p className="font-semibold text-green-600">{opportunity.investment}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Expected Impact</p>
                          <p className="font-semibold text-gray-900">{opportunity.impact}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-20 bg-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Partnership Benefits
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Our CSR partnerships offer comprehensive benefits that go beyond traditional corporate giving.
                </p>
                <div className="space-y-4">
                  {partnershipBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                      <p className="text-gray-700">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="/st1.jpeg"
                  alt="Corporate partnership"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="text-center">
                    <Handshake className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <p className="font-semibold text-gray-900">50+</p>
                    <p className="text-sm text-gray-600">Active Partners</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Principal Contribution Section */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* Left Image */}
    <div>
      <img
        src="/Principal.jpeg" // Replace with your actual image path
        alt="Principal"
        className="w-full rounded-xl shadow-lg object-cover"
      />
    </div>

    {/* Right Content */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Principal Contribution</h2>
      <p className="text-lg text-gray-700 mb-6">Empowering Change through Leadership</p>

      <p className="text-gray-600 mb-6">
        Under the dynamic leadership and unwavering commitment of the Principal, the transformation journey of Kittur Rani Chennamma Residential School, Balepura has witnessed remarkable progress...
      </p>

      <ul className="space-y-4 text-gray-700 list-disc pl-5">
        <li><strong>Strategic Vision and Planning:</strong> Identified core needs and aligned with CSR goals.</li>
        <li><strong>Effective Implementation:</strong> Personally ensured project quality and timely execution.</li>
        <li><strong>Focus on Holistic Development:</strong> Emphasized academics, co-curricular, and wellness equally.</li>
        <li><strong>Sustainability and Long-Term Impact:</strong> Initiatives are future-proof and sustainable.</li>
      </ul>
    </div>
  </div>
</section>


        {/* CSR Needs Section */}
        <section className="py-20 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
      Key CSR Requirements
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Card 1 */}
      <div className="relative bg-white rounded-xl shadow-md p-6 overflow-hidden border border-gray-200">
        <h3 className="text-xl font-semibold text-green-700 mb-3">Infrastructure Development</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 relative z-10">
          <li>Science & Computer Labs</li>
          <li>Smart Classes & Digital Learning Zones</li>
          <li>Library Setup</li>
          <li>Dormitory Upgrades</li>
          <li>Sanitation & Drinking Water System</li>
        </ul>
        <img
          src="/gp1.jpeg"
          alt="Infrastructure"
          className="absolute bottom-0 right-0 w-40 h-40 rounded-full object-cover opacity-80 z-0 transform translate-x-6 translate-y-6 pointer-events-none"
        />
      </div>

      {/* Card 2 */}
      <div className="relative bg-white rounded-xl shadow-md p-6 overflow-hidden border border-gray-200">
        <h3 className="text-xl font-semibold text-green-700 mb-3">Educational Resources</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 relative z-10">
          <li>Smart Boards, Projectors, Tablets</li>
          <li>Books, Stationery, STEM Kits</li>
          <li>Teacher Training Workshops</li>
        </ul>
        <img
          src="/g2.jpeg"
          alt="Education"
          className="absolute bottom-0 right-0 w-40 h-40 rounded-full object-cover opacity-80 z-0 transform translate-x-6 translate-y-6 pointer-events-none"
        />
      </div>

      {/* Card 3 */}
      <div className="relative bg-white rounded-xl shadow-md p-6 overflow-hidden border border-gray-200">
        <h3 className="text-xl font-semibold text-green-700 mb-3">Health & Nutrition</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 relative z-10">
          <li>Health Check-Up Camps (Dental, Eye, General)</li>
          <li>Mental Health & Wellness Programs</li>
        </ul>
        <img
          src="/gl3.jpg"
          alt="Health"
          className="absolute bottom-0 right-0 w-40 h-40 rounded-full object-cover opacity-80 z-0 transform translate-x-6 translate-y-6 pointer-events-none"
        />
      </div>

      {/* Card 4 */}
      <div className="relative bg-white rounded-xl shadow-md p-6 overflow-hidden border border-gray-200">
        <h3 className="text-xl font-semibold text-green-700 mb-3">Sustainability</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 relative z-10">
          <li>Solar Panels</li>
          <li>Rainwater Harvesting</li>
          <li>Waste Management Units</li>
        </ul>
        <img
          src="/sc-4.jpg"
          alt="Sustainability"
          className="absolute bottom-0 right-0 w-40 h-40 rounded-full object-cover opacity-80 z-0 transform translate-x-6 translate-y-6 pointer-events-none"
        />
      </div>
    </div>
  </div>
</section>


        {/* CSR Activities Section */}
        <section className="py-20 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto space-y-20">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
      CSR Activities & Initiatives
    </h2>

    {/* STEM Laboratory Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <div>
        <h3 className="text-2xl font-bold text-green-700 mb-4">STEM Laboratory</h3>
        <p className="text-gray-700 mb-4">
          A state-of-the-art STEM Laboratory has been successfully installed at Kittur Rani Chennamma Residential School, Balepura, under the CSR initiative of <strong>Collins Aerospace</strong>.
        </p>
        <p className="text-gray-700 mb-4">
          This significant milestone was made possible through the proactive approach and persistent efforts of the beloved Principal, <strong>Bhaskar Babu</strong>, who has shown exceptional personal interest in reaching out to various companies and encouraging CSR involvement for the holistic development of the school.
        </p>
        <p className="text-gray-700">
          His unwavering dedication has played a pivotal role in transforming the school premises and equipping students with modern, hands-on learning facilities to nurture innovation and scientific thinking.
        </p>
      </div>

      {/* Right Image */}
      <div className="relative">
        <img
          src="/STEM-Lab-1.jpeg" // 🔄 Replace with actual path
          alt="STEM Lab"
          className="rounded-xl shadow-lg object-cover w-full h-80"
        />
      </div>
    </div>

    {/* Plantation Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left Image */}
      <div className="relative order-2 md:order-1">
        <img
          src="/CSR-Plant-Sapling-Initiative.jpeg" // 🔄 Replace with actual path
          alt="Tree Plantation"
          className="rounded-xl shadow-lg object-cover w-full h-80"
        />
      </div>

      {/* Right Content */}
      <div className="order-1 md:order-2">
        <h3 className="text-2xl font-bold text-green-700 mb-4">CSR 3,000 Plant Sapling Initiative</h3>
        <p className="text-gray-700 mb-4">
          Under the CSR initiative of the <strong>Pai Foundation</strong>, a significant tree plantation drive was carried out with the successful planting of 3,000 saplings across the campus.
        </p>
        <p className="text-gray-700 mb-4">
          This impactful event reflects the Foundation’s commitment to environmental sustainability and community development, with immense support from Principal <strong>Bhaskar Babu</strong>.
        </p>
        <p className="text-gray-700">
          His visionary leadership continues to inspire staff and students to work towards a better, greener future.
        </p>
      </div>
    </div>

    {/* Contact CTA */}
    <div className="text-center mt-16">
      <p className="text-lg text-gray-800">
        Let’s build a future where every girl has access to equal opportunity and dignified learning.
      </p>
      <p className="text-green-700 font-semibold mt-4">
        📧 csrconnect@kitturschool.org &nbsp; | &nbsp; 📞 +91-94482 27951
      </p>
    </div>
  </div>
</section>


        {/* Success Stories */}
        {/* <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how our corporate partners have created meaningful impact through strategic CSR investments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">{story.company}</h3>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {story.year}
                    </span>
                  </div>
                  <h4 className="text-green-600 font-semibold mb-2">{story.project}</h4>
                  <p className="text-gray-600 mb-4">{story.impact}</p>
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-500">Investment</p>
                    <p className="font-bold text-2xl text-green-600">{story.investment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* How It Works */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How CSR Partnership Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our streamlined process ensures maximum impact and transparency in every partnership.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Initial Consultation", description: "Discuss your CSR goals and budget with our team" },
                { step: "2", title: "Project Selection", description: "Choose from our curated list of high-impact projects" },
                { step: "3", title: "Implementation", description: "We execute the project with regular progress updates" },
                { step: "4", title: "Impact Reporting", description: "Receive detailed reports on outcomes and beneficiaries" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-green-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Join leading companies in transforming rural education through strategic CSR partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                Schedule a Meeting
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Contribute
              </button>
            </div>
            <div className="mt-8 text-green-100">
              <p>Contact our CSR team: <strong>csr@kreis.kar.nic.in</strong> | <strong>+91 80 2234 5678</strong></p>
            </div>
          </div>
        </section>
      </div>

      {showModal && (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
    <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full relative">
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
      >
        ✕
      </button>
      <h2 className="text-2xl font-bold mb-4 text-green-700">CSR Partnership Registration</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Company Name</label>
          <input type="text" className="w-full border border-gray-300 rounded-md p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Contact Person</label>
          <input type="text" className="w-full border border-gray-300 rounded-md p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" className="w-full border border-gray-300 rounded-md p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input type="tel" className="w-full border border-gray-300 rounded-md p-2" />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Submit
        </button>
      </form>
    </div>
  </div>

  


)}


{showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
              <h2 className="text-2xl font-bold mb-4 text-green-700">CSR Partnership Registration</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Company Name</label>
                  <input type="text" className="w-full border border-gray-300 rounded-md p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Contact Person</label>
                  <input type="text" className="w-full border border-gray-300 rounded-md p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" className="w-full border border-gray-300 rounded-md p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input type="tel" className="w-full border border-gray-300 rounded-md p-2" />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}


    </Layout>
  );
};

export default CSRConnect;