import { FaAward, FaUsers, FaShieldAlt, FaMapMarkerAlt, FaPhone, FaClock, FaCalendarAlt, FaCamera, FaMicroscope, FaChartLine, FaWhatsapp, FaStar, FaHeart, FaGem } from "react-icons/fa";
import Navlinks from "../components/Navlinks";
import Footer from "./Footer";

function Aboutus() {
  const stats = [
    { number: "10+", label: "Years Experience", icon: FaAward, color: "from-amber-500 to-orange-500" },
    { number: "5,000+", label: "Happy Patients", icon: FaUsers, color: "from-emerald-500 to-green-500" },
    { number: "100%", label: "Quality Service", icon: FaShieldAlt, color: "from-blue-500 to-cyan-500" },
    { number: "Free", label: "Consultation", icon: FaAward, color: "from-green-500 to-green-500" }
  ];

  const features = [
    { title: "Advanced Technology", description: "State-of-the-art diagnostic equipment for precise eye care solutions", icon: FaGem, color: "from-purple-500 to-indigo-500" },
    { title: "Expert Team", description: "Experienced professionals dedicated to your vision health", icon: FaUsers, color: "from-blue-500 to-cyan-500" },
    { title: "Premium Collections", description: "Wide range of designer frames and quality lenses", icon: FaStar, color: "from-amber-500 to-orange-500" },
    { title: "Personalized Care", description: "Customized solutions for your unique vision needs", icon: FaHeart, color: "from-rose-500 to-pink-500" }
  ];

  const journeyMilestones = [
    { year: "2015", icon: FaCalendarAlt, title: "Foundation Established", description: "Began operations on April 22, 2015 with essential eye-care diagnostics", equipment: ["Autorefractor Meter", "Lensometer & Lens Edger", "Non-Contact Tonometer", "Slit Lamp"], color: "from-blue-500 to-cyan-500" },
    { year: "2020", icon: FaCamera, title: "Advanced Retina Imaging", description: "Installation of Fundus Camera for advanced Retina Examination", equipment: ["Fundus Camera", "Improved Clinical Photography Equipment"], color: "from-purple-500 to-indigo-500" },
    { year: "2021", icon: FaMicroscope, title: "Enhanced Imaging Capabilities", description: "Further upgrades to support high-quality ophthalmic imaging", equipment: ["Upgraded Imaging Systems", "Enhanced Diagnostic Tools"], color: "from-emerald-500 to-green-500" },
    { year: "2025", icon: FaChartLine, title: "Comprehensive Glaucoma Assessment", description: "Introduction of advanced field analyzer technology", equipment: ["Elison Field Analyzer", "Advanced Glaucoma Testing"], color: "from-amber-500 to-orange-500" }
  ];

  // WhatsApp contact function
  const handleWhatsAppClick = () => {
    const phoneNumber = "917598895773";
    const message = "Hello! I would like to book an appointment or get more information about your eye care services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navlinks />

      {/* Hero Section */}
      <section className="pt-10 pb-10 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-600 mb-4 border border-gray-200">
            <FaStar className="text-amber-500" />
            <span>Trusted Since 2015</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Raj Eye Care</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            From humble beginnings to advanced diagnostic excellence — delivering accurate, reliable, and compassionate eye care for over a decade.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`bg-gradient-to-br ${stat.color} rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1`}>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 backdrop-blur-sm">
                    <stat.icon className="text-white text-lg sm:text-xl" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-white/90 text-sm sm:text-base font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-10 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Our Journey</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              A decade of continuous growth and technological advancement in eye care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {journeyMilestones.map((milestone, index) => (
              <div key={index} className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className={`bg-gradient-to-br ${milestone.color} rounded-xl p-2 sm:p-3 flex items-center justify-center group-hover:scale-105 transition-transform`}>
                    <milestone.icon className="text-white text-base sm:text-lg" />
                  </div>
                  <div>
                    <span className="text-gray-700 font-bold text-sm sm:text-lg">{milestone.year}</span>
                    <h3 className="text-gray-900 font-semibold text-sm sm:text-base">{milestone.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm mb-2 leading-relaxed">{milestone.description}</p>
                <div>
                  <h4 className="text-gray-900 font-semibold text-xs sm:text-sm mb-1">Equipment Added:</h4>
                  <ul className="space-y-1 text-xs sm:text-sm">
                    {milestone.equipment.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600">
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Why Choose Us</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Committed to providing the highest standard of eye care with modern technology and experienced professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-4 sm:p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className={`bg-gradient-to-br ${feature.color} rounded-xl p-2 sm:p-3 flex items-center justify-center group-hover:scale-105 transition-transform`}>
                    <feature.icon className="text-white text-base sm:text-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">{feature.title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4 sm:space-y-6 text-gray-700">
          <p className="text-base sm:text-lg leading-relaxed">
            At Raj Eye Care, we believe that clear vision is fundamental to quality of life. 
            Our practice is built on technical excellence, compassionate care, and continuous innovation.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            We combine advanced diagnostic technology with personalized attention to ensure every patient receives the best possible eye care solution.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Aboutus;
