import { useState } from 'react';

const courses = [
  {
    category: "Life Support",
    items: [
      {
        title: "Basic Life Support (BLS)",
        duration: "2 weeks",
        description: "Essential life-saving techniques and emergency response procedures."
      },
      {
        title: "Advanced Cardiovascular Life Support (ACLS)",
        duration: "4 weeks",
        description: "Advanced cardiac emergency management and treatment protocols."
      }
    ]
  },
  {
    category: "Emergency Response",
    items: [
      {
        title: "First Aid Training",
        duration: "1 week",
        description: "Comprehensive first aid techniques for emergency situations."
      },
      {
        title: "Fire Safety",
        duration: "2 weeks",
        description: "Fire prevention, safety protocols, and emergency response."
      }
    ]
  },
  {
    category: "Specialized Training",
    items: [
      {
        title: "Aviation Security",
        duration: "3 weeks",
        description: "Specialized emergency response training for aviation scenarios."
      },
      {
        title: "Pre-Hospital Trauma Life Support",
        duration: "4 weeks",
        description: "Advanced trauma care and management in pre-hospital settings."
      }
    ]
  }
];

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState(courses[0].category);

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Courses</h2>
          <p className="text-lg text-gray-600">Comprehensive training programs for emergency medical care</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <div className="sticky top-20">
              <nav className="flex flex-col space-y-2">
                {courses.map((category) => (
                  <button
                    key={category.category}
                    onClick={() => setActiveCategory(category.category)}
                    className={`px-4 py-2 text-left rounded-md transition-colors ${
                      activeCategory === category.category
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 hover:bg-blue-50'
                    }`}
                  >
                    {category.category}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          <div className="md:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {courses
                .find((cat) => cat.category === activeCategory)
                ?.items.map((course, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-sm text-blue-600 mb-4">Duration: {course.duration}</p>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <button className="text-blue-600 hover:text-blue-700 font-medium">
                      Learn more →
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;