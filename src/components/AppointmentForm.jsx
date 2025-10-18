import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Reusable Input Component
const FormInput = ({ label, type, name, value, onChange, placeholder, required = false }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-2">{label} {required && "*"}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 bg-gray-50"
    />
  </div>
);

function AppointmentForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredDate: "",
    message: ""
  });
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const whatsappMessage = `
Hello Sir, I would like to book an appointment for an eye consultation.
Here's my details:

*Name:* ${formData.fullName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Preferred Date:* ${formData.preferredDate}
*Additional Message:* ${formData.message || "No additional message"}

Thank you!
    `.trim();

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // WhatsApp phone number (replace with your actual business number)
    const whatsappNumber = "917598895773"; // Your number without + or 0
    
    // Create WhatsApp URLs
    const whatsappAppUrl = `whatsapp://send?phone=${whatsappNumber}&text=${encodedMessage}`;
    const whatsappWebUrl = `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
    
    // Try to open WhatsApp app first, fallback to web version
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      // For mobile devices - try app first, then web
      window.location.href = whatsappAppUrl;
      
      // Fallback: if app doesn't open, redirect to web after a delay
      setTimeout(() => {
        if (!document.hidden) {
          window.open(whatsappWebUrl, '_blank');
        }
      }, 2000);
    } else {
      // For desktop - open web version directly
      window.open(whatsappWebUrl, '_blank');
    }
    
    // Reset form and close modal
    setFormData({ fullName: "", email: "", phone: "", preferredDate: "", message: "" });
    onClose();
  };

  const PrivacyPolicyModal = () => (
    <AnimatePresence>
      {showPrivacyPolicy && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-[60] p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowPrivacyPolicy(false)}
        >
          <motion.div
            className="bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[80vh] overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-4 flex justify-between items-center">
              <h2 className="text-xl font-bold text-white">Privacy Policy</h2>
              <button
                className="text-white hover:bg-white/20 rounded-full p-1 transition-all duration-200"
                onClick={() => setShowPrivacyPolicy(false)}
                aria-label="Close Privacy Policy"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh] space-y-4 text-sm text-gray-700">
              <p><strong>Last Updated:</strong> December 2024</p>

              <section>
                <h3 className="font-semibold text-gray-900 mb-2">1. Information We Collect</h3>
                <p>We collect personal information that you provide when booking an appointment, including:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>Full name and contact details</li>
                  <li>Email address and phone number</li>
                  <li>Preferred appointment date</li>
                  <li>Any additional medical information you choose to share</li>
                </ul>
              </section>

              <section>
                <h3 className="font-semibold text-gray-900 mb-2">2. How We Use Your Information</h3>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>Schedule and manage your appointments</li>
                  <li>Send appointment reminders and updates</li>
                  <li>Provide personalized eye care services</li>
                  <li>Communicate important health information</li>
                </ul>
              </section>

              <section>
                <h3 className="font-semibold text-gray-900 mb-2">3. Data Protection</h3>
                <p>We implement security measures to protect your personal information and maintain strict confidentiality in accordance with medical privacy standards.</p>
              </section>

              <section>
                <h3 className="font-semibold text-gray-900 mb-2">4. Your Rights</h3>
                <p>You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.</p>
              </section>

              <section>
                <h3 className="font-semibold text-gray-900 mb-2">5. Contact Us</h3>
                <p>Email: rajopticalssattur@gmail.com<br />Phone: +91 75988 95773</p>
              </section>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {/* Appointment Form Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden border border-gray-200"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-800 to-blue-600 px-6 py-5 flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold text-white">Book Your Appointment</h2>
                  <p className="text-teal-100 text-sm mt-1">Get expert eye care consultation</p>
                </div>
                <button
                  className="text-white hover:bg-white/20 rounded-full p-2 transition-all duration-200 hover:rotate-90"
                  onClick={onClose}
                  aria-label="Close Appointment Form"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                <FormInput label="Full Name" type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter your full name" required />
                <FormInput label="Email Address" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" required />
                <FormInput label="Phone Number" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 1234567890" required />
                <FormInput label="Preferred Date" type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} required />

                {/* Message field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Message (Optional)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any specific concerns or additional information..."
                    rows="3"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 bg-gray-50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white py-4 rounded-xl font-bold hover:from-blue-500 hover:to-blue-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Request Appointment via WhatsApp
                </button>

                <p className="text-xs text-gray-600 text-center pt-2">
                  By submitting this form, you agree to our{" "}
                  <button
                    type="button"
                    onClick={() => setShowPrivacyPolicy(true)}
                    className="text-blue-500 hover:text-blue-700 font-medium underline transition-colors duration-200 cursor-pointer"
                  >
                    privacy policy
                  </button>
                </p>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal />
    </>
  );
}

export default AppointmentForm;