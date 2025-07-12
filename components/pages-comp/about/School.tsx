import React from 'react';
import { useState, useEffect } from 'react';
import { Users, Award, Globe, BookOpen, CheckCircle, Calendar, MapPin, Phone, Mail, GraduationCap } from 'lucide-react';

interface FacultyMember {
  id: number;
  name: string;
  position: string;
  department: string;
  qualification: string;
  experience: string;
  specialization: string;
  image_url?: string;
  image?: string;
  email?: string;
  phone?: string;
  achievements: string[];
  bio?: string;
}

const School: React.FC = () => {
  const [facultyMembers, setFacultyMembers] = useState<FacultyMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'administration', name: 'Administration' },
    { id: 'academics', name: 'Academic Affairs' },
    { id: 'science', name: 'Science & Mathematics' },
    { id: 'languages', name: 'Languages' },
    { id: 'social', name: 'Social Sciences' },
    { id: 'arts', name: 'Arts & Culture' },
    { id: 'sports', name: 'Physical Education' },
    { id: 'counseling', name: 'Student Counseling' },
  ];

  useEffect(() => {
    fetchFacultyMembers();
  }, []);

  const fetchFacultyMembers = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/faculty');
      if (response.ok) {
        const data = await response.json();

        setFacultyMembers([
          {
            id: 1,
            name: "Dr. Bhaskar Babu G",
            position: "Director General",
            department: "administration",
            qualification: "Ph.D. in Education Administration",
            experience: "25 years",
            specialization: "Educational Leadership, Rural Education Policy",
            image:
              "https://getmycollege.in/wp-content/uploads/2025/06/Principal-Photo-for-Principals-Message-1024x846.jpeg",
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
            department: "academics",
            qualification: "M.Ed., Ph.D. in Curriculum Development",
            experience: "20 years",
            specialization: "Curriculum Design, Teacher Training",
            image:
              "https://getmycollege.in/wp-content/uploads/2025/06/20250619_1232_Raghavendras-School-Lecture_simple_compose_01jy3fshf1e4vb03asy97ss8dn.png?auto=compress&cs=tinysrgb&w=300",
            email: "academic@kreis.kar.nic.in",
            phone: "+91 80 2234 5679",
            achievements: [
              "Best Teacher Award",
              "Curriculum Innovation Award",
              "Educational Research Excellence",
            ],
          },
          {
            id: 3,
            name: "Mr. Ananda V",
            position: "Head of Science Department",
            department: "science",
            qualification: "M.Sc. Physics, Ph.D. in Science Education",
            experience: "18 years",
            specialization:
              "Physics, Science Methodology, Laboratory Management",
            image:
              "https://getmycollege.in/wp-content/uploads/2025/06/profile-placeholder.jpg?auto=compress&cs=tinysrgb&w=300",
            email: "science@kreis.kar.nic.in",
            phone: "+91 80 2234 5680",
            achievements: [
              "Science Teacher Excellence Award",
              "Innovation in Science Teaching",
              "Student Mentorship Award",
            ],
          },
          {
            id: 4,
            name: "Mr. Raghavendra B",
            position: "Kannada Language Coordinator",
            department: "languages",
            qualification: "M.A. Kannada Literature, B.Ed.",
            experience: "15 years",
            specialization: "Kannada Literature, Language Pedagogy",
            image:
              "https://getmycollege.in/wp-content/uploads/2025/06/20250619_1232_Raghavendras-School-Lecture_simple_compose_01jy3fshf2fahtbn2cxs30mq6d.png",
            email: "kannada@kreis.kar.nic.in",
            phone: "+91 80 2234 5681",
            achievements: [
              "State Language Teacher Award",
              "Cultural Heritage Promotion",
              "Literary Contribution Award",
            ],
          },
          {
            id: 5,
            name: "Mr.  Suresh Hegde",
            position: "Mathematics Coordinator",
            department: "science",
            qualification: "M.Sc. Mathematics, B.Ed.",
            experience: "16 years",
            specialization: "Advanced Mathematics, Problem Solving Techniques",
            image:
              "https://getmycollege.in/wp-content/uploads/2025/06/profile-placeholder.jpg?auto=compress&cs=tinysrgb&w=300",
            email: "mathematics@kreis.kar.nic.in",
            phone: "+91 80 2234 5682",
            achievements: [
              "Mathematics Excellence Award",
              "Student Competition Mentor",
              "Innovative Teaching Methods",
            ],
          },
          {
            id: 6,
            name: "Dr. Rachani B G",
            position: "Student Counselor",
            department: "counseling",
            qualification: "M.A. Psychology, Ph.D. in Counseling Psychology",
            experience: "12 years",
            specialization: "Adolescent Psychology, Career Guidance",
            image:
              "https://getmycollege.in/wp-content/uploads/2025/06/woman.jpg?auto=compress&cs=tinysrgb&w=300",
            email: "counseling@kreis.kar.nic.in",
            phone: "+91 80 2234 5683",
            achievements: [
              "Best Counselor Award",
              "Student Welfare Excellence",
              "Mental Health Advocacy",
            ],
          },
          {
            id: 7,
            name: "Dr. Shailaja",
            position: "Physical Education Director",
            department: "sports",
            qualification: "M.P.Ed., Sports Coaching Certification",
            experience: "14 years",
            specialization:
              "Sports Training, Physical Fitness, Athletic Development",
            image:
              "https://getmycollege.in/wp-content/uploads/2025/06/woman.jpg?auto=compress&cs=tinysrgb&w=300",
            email: "sports@kreis.kar.nic.in",
            phone: "+91 80 2234 5684",
            achievements: [
              "State Sports Excellence Award",
              "Athletic Training Certification",
              "Youth Development Award",
            ],
          },
          {
            id: 8,
            name: "Mrs. Lakshmi Desai",
            position: "Social Science Coordinator",
            department: "social",
            qualification: "M.A. History, M.A. Political Science, B.Ed.",
            experience: "17 years",
            specialization:
              "Indian History, Civics, Social Studies Methodology",
            image:
              "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
            email: "socialscience@kreis.kar.nic.in",
            phone: "+91 80 2234 5685",
            achievements: [
              "History Teaching Excellence",
              "Social Awareness Programs",
              "Community Engagement Award",
            ],
          },
        ]);
      }
    } catch (error) {
      console.error('Error fetching faculty members:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredFaculty = facultyMembers.filter(member => {
    return selectedDepartment === 'all' || member.department === selectedDepartment;
  });

  const getDepartmentName = (departmentId: string) => {
    const dept = departments.find(d => d.id === departmentId);
    return dept?.name || departmentId;
  };
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About School</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Karnataka Residential Educational Institutions Society (KREIS) -
              Empowering rural students through quality residential education
              since 1999.
            </p>
          </div>
        </div>
      </section>



      {/* About Kittur Rani Chennamma School Section */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          About Kittur Rani Chennamma Residential School, Balepura
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Kittur Rani Chennamma Residential School, Balepura was established with the noble intention of providing inclusive and quality education to students from all walks of life by the Government of Karnataka. With a residential setup that fosters discipline and focused learning, the school aims to provide a nurturing atmosphere where students grow intellectually, emotionally, and socially.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Our school is a symbol of women empowerment and cultural pride, drawing inspiration from Rani Chennamma’s legacy. Equipped with dedicated faculty, a well-structured curriculum, and modern facilities, we strive to create responsible citizens and lifelong learners.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Empowering young minds through quality education, discipline, and holistic development, the school stands as a beacon of academic excellence. Join us in shaping the journey of knowledge, values, and a brighter tomorrow.
        </p>
      </div>
      <div>
        <img
          src="https://getmycollege.in/wp-content/uploads/2025/06/School-Main-Block-Pic-1-1024x768.png"
          alt="Kittur Rani Chennamma School"
          className="rounded-xl shadow-lg w-full object-cover"
        />
      </div>
    </div>
  </div>
</section>

{/* Principal’s Message Section */}
<section className="py-20 bg-gray-50">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <img
      src="https://getmycollege.in/wp-content/uploads/2025/06/Principal-Photo-for-Principals-Message-1024x846.jpeg"
      alt="Principal Bhaskar Babu"
      className="mx-auto h-80 w-80 rounded-full object-cover mb-6 shadow-md"
    />
    <h2 className="text-2xl font-bold text-gray-800 mb-2">Principal’s Message</h2>
    <p className="text-lg text-gray-700 mb-6 italic">
      "Education is not just about textbooks and classrooms—it is about lighting the fire of curiosity, building values, and fostering leadership."
    </p>
    <p className="text-md text-gray-600 mb-4">
      At our school, we take pride in offering a comprehensive learning environment where tradition meets innovation. We believe in nurturing every child’s unique potential and instilling in them a sense of responsibility, confidence, and compassion. Our dedicated staff ensures academic excellence alongside strong character and discipline.
    </p>
    <p className="text-md text-gray-600 font-medium">Warm regards,</p>
    <p className="text-md text-gray-800 font-semibold">Bhaskar Babu</p>
    <p className="text-sm text-gray-500">Principal, Kittur Rani Chennamma Residential School, Balepura</p>
  </div>
</section>




      {/* About KREIS Section */}
    

      {/* Mission & Vision Section */}
      
      {/* Stats Section */}
    

      {/* Our Schools Section */}
    

  
   
    </div>
  );
};

export default School;