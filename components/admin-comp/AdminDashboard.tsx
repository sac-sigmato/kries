import React from 'react';


interface InfoItem {
  label: string;
  value: string | number;
}

interface InfoCardProps {
  title: string;
  data: InfoItem[];
}

const InfoCard: React.FC<InfoCardProps> = ({ title, data }) => (
  <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
    <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">{title}</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item, idx) => (
        <div key={idx} className="border p-3 rounded-md bg-gray-50">
          <p className="text-sm text-gray-500">{item.label}</p>
          <p className="text-lg font-bold text-gray-900">{item.value}</p>
        </div>
      ))}
    </div>
  </div>
);

const AdminFullDashboard = () => {
  return (
    <div className="space-y-6 p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900">School Dashboard Overview</h1>

      <InfoCard
        title="Student Details & Attendance"
        data={[
          { label: 'Total Student Count', value: 205 },
          { label: 'Student Attendance', value: 'Daily Present' },
          { label: 'Health Checkup Count', value: 238 },
        ]}
      />

      <InfoCard
        title="Results"
        data={[
          { label: 'Pass Percentage (SSLC)', value: '100%' },
          { label: 'Topper Marks & %', value: '614 (98.24%)' },
          { label: 'Distinctions in SSLC', value: '17 Students' },
          { label: 'CET Qualified', value: 20 },
          { label: 'NEET Qualified', value: 3 },
        ]}
      />

      <InfoCard
        title="Staff Details & Attendance"
        data={[
          { label: 'Teaching Staff Count', value: 8 },
          { label: 'Non-Teaching Staff Count', value: 4 },
          { label: 'Vacant Positions', value: 0 },
        ]}
      />

      <InfoCard
        title="Infrastructure Status"
        data={[
          { label: 'Building Type', value: 'Own' },
          { label: 'Campus Area', value: '6.9 Acres' },
          { label: 'Classrooms', value: 6 },
          { label: 'Science Laboratories', value: 3 },
          { label: 'Computer Lab', value: 1 },
          { label: 'STEM Lab', value: 1 },
          { label: 'Computers', value: 25 },
          { label: 'Library Books', value: 2500 },
          { label: 'Smart Classroom', value: 1 },
          { label: 'Smart Board', value: 1 },
          { label: 'Water Purifiers', value: 4 },
          { label: 'Boys Toilets', value: 0 },
          { label: 'Girls Toilets', value: 40 },
          { label: 'Internet Connectivity', value: 'Yes' },
          { label: 'CCTV Cameras', value: 8 },
          { label: 'Fire & Safety Equipment', value: '3 Sets' },
          { label: 'Electric Poles', value: 6 },
          { label: 'Bulbs - Solar', value: 8 },
          { label: 'Bulbs - Street Light', value: 5 },
        ]}
      />

      <InfoCard
        title="Residential School Facility"
        data={[
          { label: 'Students in Hostel', value: 205 },
          { label: 'Room Occupancy', value: 15 },
          { label: 'Daily Hostel Attendance', value: 205 },
          { label: 'Bed Cots (2 Tier)', value: 100 },
          { label: 'Beds & Bedsheets', value: 250 },
          { label: 'Pillows & Blankets', value: 250 },
          { label: 'Bathrooms for Boys', value: 0 },
          { label: 'Bathrooms for Girls', value: 40 },
          { label: 'Hot Water Supply', value: 'Yes' },
          { label: 'Staff Nurse', value: 1 },
          { label: 'Emergency Ambulance', value: 'No' },
        ]}
      />

      <InfoCard
        title="Canteen"
        data={[
          { label: 'In-House Canteen', value: 'Yes' },
          { label: 'Seating Capacity', value: 250 },
          { label: 'Canteen Staff', value: 5 },
        ]}
      />

      <InfoCard
        title="Garden & Campus Cleanliness"
        data={[
          { label: 'Trees Planted', value: 1500 },
          { label: 'Gardeners', value: 0 },
          { label: 'Borewells', value: 1 },
          { label: 'Borewell Working', value: 'Yes' },
          { label: 'Dry & Wet Dustbins', value: 4 },
        ]}
      />

      <InfoCard
        title="Sports Activities"
        data={[
          { label: 'Basketball Court', value: 1 },
          { label: 'Volleyball Court', value: 1 },
          { label: 'Kho-Kho Court', value: 1 },
          { label: 'Long Jump Court', value: 1 },
          { label: '100m Race Track', value: 1 },
          { label: 'Yoga & Karate Classes', value: 'Yes' },
        ]}
      />

      <InfoCard
        title="Alumni Engagement"
        data={[
          { label: 'Alumni Registered', value: 155 },
          { label: 'Alumni Contributions', value: 'Rs. 0/-' },
          { label: 'Mentoring Sessions', value: 'No' },
        ]}
      />

      <InfoCard
        title="CSR & Fund Utilization"
        data={[
          { label: 'CSR Fund Inflows', value: 'Rs. 9,00,000/-' },
          { label: 'CSR Contributions', value: 'STEM Lab, Computer Lab, Smart Board' },
        ]}
      />

      <InfoCard
        title="Achievements"
        data={[
          { label: 'Academic Achievements', value: 'SSLC District Level Toppers: 3' },
          { label: 'Sports Achievements', value: 'Kho-Kho Division Level' },
          { label: 'Cultural Achievements', value: 'District Level' },
          { label: 'Staff Achievements', value: 'State Level Resource Person (Maths & Social Science)' },
        ]}
      />
    </div>
  );
};

export default AdminFullDashboard;
