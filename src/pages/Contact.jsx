import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane, FaUser, FaClock } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showPopup = (message) => {
    setPopupMessage(message);
    setTimeout(() => {
      setPopupMessage("");
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // 'http://localhost:5000/api/contact','https://raj-opticals-server.onrender.com/api/contact','https://rajeyecareandopticals.vercel.app'
      const response = await fetch('https://rajeyecareandopticals.vercel.app', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        showPopup(data.message);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        showPopup(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      showPopup('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaPhoneAlt className="text-sm" />,
      color: "bg-blue-500",
      label: "Call Now",
      content: (
        <a
          href="tel:+917598895773"
          className="text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base"
        >
          +91 7598895773
        </a>
      ),
    },
    {
      icon: <FaEnvelope className="text-sm" />,
      color: "bg-green-500",
      label: "Email Us",
      content: (
        <a
          href="mailto:rajopticalssattur@gmail.com"
          className="text-green-600 hover:text-green-700 text-xs sm:text-sm break-all"
        >
          rajopticalssattur@gmail.com
        </a>
      ),
    },
    {
      icon: <FaMapMarkerAlt className="text-sm" />,
      color: "bg-red-500",
      label: "Visit Clinic",
      content: (
        <p className="text-gray-700 text-xs sm:text-sm">
          138, Paruthi Mall Complex, Sattur
        </p>
      ),
    },
    {
      icon: <FaClock className="text-sm" />,
      color: "bg-purple-500",
      label: "Open Hours",
      content: (
        <p className="text-gray-700 text-xs sm:text-sm">9 AM - 8 PM • Everyday</p>
      ),
    },
  ];

  const formFields = [
    {
      name: "name",
      type: "text",
      icon: <FaUser className="text-xs" />,
      placeholder: "Full name",
    },
    {
      name: "email",
      type: "email",
      icon: <FaEnvelope className="text-xs" />,
      placeholder: "Email address",
    },
    {
      name: "phone",
      type: "tel",
      icon: <FaPhoneAlt className="text-xs" />,
      placeholder: "Phone number",
    },
  ];

  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.7198134412038!2d77.9186629!3d9.3580434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06cab7f6d1bcf9%3A0x18a5cba734a42a30!2sRAJ%20EYE%20CARE%20AND%20OPTICALS!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  return (
    <section id="contact" className="py-8 bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Popup Notification */}
      {popupMessage && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-sm" />
            <span className="text-sm font-medium">{popupMessage}</span>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Get in <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-gray-600 text-sm">
            Your vision is our priority
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Contact Info Section */}
          <div className="space-y-4">
            {contactInfo.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className={`p-2 ${item.color} rounded-lg text-white flex-shrink-0`}>
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 text-sm">
                    {item.label}
                  </p>
                  <div className="mt-1">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}

            {/* Map Section */}
            <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200 bg-white">
              <div className="w-full h-48 sm:h-40 md:h-48 relative">
                <iframe
                  src={mapUrl}
                  className="w-full h-full absolute inset-0"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Raj Eye Care Location Map"
                ></iframe>
              </div>
              
              <div className="p-3 bg-gray-50 border-t border-gray-200">
                <a
                  href="https://maps.google.com/maps?q=RAJ+EYE+CARE+AND+OPTICALS+Sattur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center justify-center gap-2"
                >
                  <FaMapMarkerAlt className="text-xs" />
                  Open in Google Maps App
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-4 sm:p-5 rounded-lg shadow-sm border border-gray-200">
            <div className="text-center mb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Quick Inquiry
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              {formFields.map((field) => (
                <div className="relative" key={field.name}>
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    {field.icon}
                  </span>
                  <input
                    {...field}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="w-full pl-9 pr-3 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:border-blue-400 focus:ring-1 focus:ring-blue-200 outline-none transition-colors text-sm"
                    required
                  />
                </div>
              ))}

              <textarea
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:border-blue-400 focus:ring-1 focus:ring-blue-200 outline-none transition-colors resize-none text-sm"
                placeholder="Tell us about your eye care needs..."
                required
              ></textarea>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-blue-400 transition-colors shadow-sm flex items-center justify-center gap-2 text-sm"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-xs" />
                    Send Message
                  </>
                )}
              </button>

              <div className="mt-3 p-2 bg-blue-50 rounded border border-blue-200">
                <p className="text-blue-700 text-xs text-center">
                  ⚡ Instant response during business hours
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;