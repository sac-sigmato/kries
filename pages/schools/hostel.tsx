import React from 'react';
import Layout from '../../components/Layout';
import { Home, Coffee, CheckCircle, Twitter } from 'lucide-react';

const HostelCanteen: React.FC = () => {
  const weeklyMenu = [
    { day: "Monday", breakfast: "Idli, Sambar, Chutney", lunch: "Rice, Dal, Vegetable Curry, Curd", dinner: "Chapati, Vegetable Curry, Milk" },
    { day: "Tuesday", breakfast: "Upma, Chutney", lunch: "Rice, Sambar, Vegetable, Buttermilk", dinner: "Pulao, Raita, Fruit" },
    { day: "Wednesday", breakfast: "Poha, Boiled Egg", lunch: "Rice, Dal, Vegetable Curry, Curd", dinner: "Chapati, Paneer Curry, Milk" },
    { day: "Thursday", breakfast: "Dosa, Chutney", lunch: "Rice, Sambar, Vegetable, Buttermilk", dinner: "Chapati, Mixed Vegetable, Milk" },
    { day: "Friday", breakfast: "Bread, Jam, Boiled Egg", lunch: "Rice, Dal, Vegetable Curry, Curd", dinner: "Chapati, Dal Fry, Milk" },
    { day: "Saturday", breakfast: "Pongal, Chutney", lunch: "Rice, Sambar, Vegetable, Buttermilk", dinner: "Pulao, Raita, Fruit" },
    { day: "Sunday", breakfast: "Aloo Paratha, Curd", lunch: "Special Meal (Biryani, Raita, Sweet)", dinner: "Chapati, Paneer Curry, Milk" }
  ];

  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Hostel & Canteen</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Providing comfortable accommodation and nutritious meals for our residential students.
              </p>
            </div>
          </div>
        </section>

        {/* Hostel Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Home className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Hostel Facilities</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our residential hostels provide a comfortable and safe living environment for students. Separate hostels for boys and girls are equipped with modern amenities and supervised by dedicated wardens who ensure the well-being of all students.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <p className="text-gray-600">Spacious dormitories with proper ventilation and lighting</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <p className="text-gray-600">Clean and hygienic bathrooms with 24/7 water supply</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <p className="text-gray-600">Dedicated study areas for evening study sessions</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <p className="text-gray-600">Regular cleaning and maintenance of all areas</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <p className="text-gray-600">24/7 security and supervision by trained wardens</p>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Hostel Dormitory"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Canteen Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="School Canteen"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <Coffee className="h-8 w-8 text-green-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Canteen Services</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our canteen provides nutritious and balanced meals to all residential students. The menu is designed by nutrition experts to ensure proper growth and development of students. All meals are prepared in hygienic conditions using quality ingredients.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3" />
                    <p className="text-gray-600">Three nutritious meals daily plus evening snacks</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3" />
                    <p className="text-gray-600">Balanced diet with proper protein, carbohydrates, and vitamins</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3" />
                    <p className="text-gray-600">Special meals on festivals and celebrations</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3" />
                    <p className="text-gray-600">Regular quality checks by health department</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3" />
                    <p className="text-gray-600">Transparent food quality monitoring system</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Today's Menu Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Today's Menu</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our canteen serves nutritious and balanced meals prepared with care.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { meal: "Breakfast", time: "7:00 AM - 8:30 AM", items: ["Idli", "Sambar", "Coconut Chutney", "Boiled Egg", "Milk"] },
                { meal: "Lunch", time: "12:30 PM - 2:00 PM", items: ["Rice", "Dal", "Mixed Vegetable Curry", "Curd", "Pickle", "Papad"] },
                { meal: "Dinner", time: "7:30 PM - 9:00 PM", items: ["Chapati", "Paneer Curry", "Rice", "Dal", "Fruit", "Milk"] }
              ].map((mealTime, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{mealTime.meal}</h3>
                  <p className="text-sm text-gray-500 mb-4">{mealTime.time}</p>
                  <ul className="space-y-2">
                    {mealTime.items.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Weekly Menu Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Weekly Menu</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our menu is designed to provide balanced nutrition throughout the week.
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="py-3 px-6 text-left">Day</th>
                    <th className="py-3 px-6 text-left">Breakfast</th>
                    <th className="py-3 px-6 text-left">Lunch</th>
                    <th className="py-3 px-6 text-left">Dinner</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {weeklyMenu.map((day, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="py-4 px-6 font-medium">{day.day}</td>
                      <td className="py-4 px-6">{day.breakfast}</td>
                      <td className="py-4 px-6">{day.lunch}</td>
                      <td className="py-4 px-6">{day.dinner}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Food Transparency Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Food Transparency Initiative</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Follow our real-time updates on meal quality and hostel conditions.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Twitter className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Live Food Quality Updates</h3>
              </div>
              <p className="text-gray-600 mb-6">
                The Social Welfare Department of Karnataka is committed to transparency in our food service. Follow our Twitter handle for daily updates on meal quality, menu, and hostel conditions.
              </p>
              <div className="bg-gray-100 rounded-lg p-6">
                <p className="text-center text-gray-700 mb-4">Twitter Feed from @kreiskrcrs661</p>
                <div className="flex justify-center">
                  <a 
                    href="https://x.com/kreiskrcrs661" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                  >
                    <Twitter className="h-5 w-5 mr-2" />
                    View Twitter Feed
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HostelCanteen;