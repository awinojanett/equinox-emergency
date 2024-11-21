
import Mission from '../components/Mission';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-white/40" />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-3 sm:px-4">
          <div className="flex items-start pl-4">
            <div className="w-1 h-32 bg-red-500 mr-6" />
            <div>
              <h1 className="text-6xl font-bold text-blue-900">ABOUT</h1>
              <h1 className="text-6xl font-bold text-blue-900">US</h1>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-3 sm:px-4">
        <Mission />
      </div>
    </div>
  );
};

export default About;