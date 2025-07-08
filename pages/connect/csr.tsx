import React from 'react';
import Layout from '../../components/Layout';
import { Building, Users, Award, TrendingUp, Heart, CheckCircle, Target, Globe, Handshake, ArrowRight } from 'lucide-react';

const CSRConnect: React.FC = () => {
  const impactStats = [
    { icon: Building, number: "50+", label: "Corporate Partners" },
    { icon: Users, number: "10,000+", label: "Students Benefited" },
    { icon: Award, number: "₹5 Cr+", label: "CSR Investment" },
    { icon: TrendingUp, number: "95%", label: "Impact Success Rate" }
  ];

  const csrOpportunities = [
    {
      icon: Target,
      title: "Education Infrastructure",
      description: "Support building modern classrooms, laboratories, and digital learning centers",
      investment: "₹10-50 Lakhs",
      impact: "500+ students per facility"
    },
    {
      icon: Globe,
      title: "Digital Learning Initiative",
      description: "Provide tablets, computers, and internet connectivity for digital education",
      investment: "₹5-25 Lakhs",
      impact: "1000+ students digitally empowered"
    },
    {
      icon: Users,
      title: "Teacher Training Programs",
      description: "Enhance teaching quality through professional development and skill training",
      investment: "₹2-10 Lakhs",
      impact: "100+ teachers trained annually"
    },
    {
      icon: Heart,
      title: "Student Scholarships",
      description: "Support meritorious students from economically disadvantaged backgrounds",
      investment: "₹1-5 Lakhs",
      impact: "50+ students supported per year"
    }
  ];

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
                  <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors flex items-center justify-center">
                    Become a Partner
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                    Download Brochure
                  </button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800"
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
                Choose from our carefully designed CSR programs that align with your company's values and create meaningful impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {csrOpportunities.map((opportunity, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <opportunity.icon className="h-8 w-8 text-green-600" />
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
                  src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600"
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

        {/* Success Stories */}
        <section className="py-20">
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
        </section>

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
                Download CSR Catalog
              </button>
            </div>
            <div className="mt-8 text-green-100">
              <p>Contact our CSR team: <strong>csr@kreis.kar.nic.in</strong> | <strong>+91 80 2234 5678</strong></p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CSRConnect;