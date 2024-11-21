
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Cheptoo",
    role: "Emergency Medicine Physician",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80",
    quote: "The training provided by Equinox Emergency College is exceptional. Their hands-on approach and expert instructors truly prepare students for real-world emergency scenarios."
  },
  {
    name: "James Ochieng",
    role: "Corporate Safety Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    quote: "Their corporate training programs have significantly improved our team's emergency response capabilities. The instructors are knowledgeable and professional."
  },
  {
    name: "Emily Nekesa",
    role: "EMS Graduate",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80",
    quote: "Thanks to Equinox, I gained the confidence and skills needed to excel in my career as an emergency medical technician. The practical training was invaluable."
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
          <p className="text-lg text-gray-600">Hear from our graduates and corporate clients</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-100 animate-pulse" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 animate-fade-in"
                  style={{ animationDelay: `${index * 300}ms` }}
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-6">"{testimonial.quote}"</p>

              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 fill-current animate-scale-in"
                    style={{ animationDelay: `${(index * 100) + (i * 100)}ms` }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;