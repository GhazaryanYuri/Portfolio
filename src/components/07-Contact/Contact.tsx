// Import React hooks and dependencies
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion"; // For animations
import { useInView } from "react-intersection-observer"; // For triggering animations on scroll
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react"; // Icons
import { useForm, ValidationError } from "@formspree/react"; // Formspree for form backend

const Contact = () => {
  // Hook to detect when the contact section is visible on screen (for animations)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Local state to control showing the "success" message
  const [showSuccess, setShowSuccess] = useState(false);

  // Get form state and submit function from Formspree
  // Replace "mvgrebng" with your actual Formspree form ID
  const [state, submitForm] = useForm("mvgrebng");

  // Reference to the form element for clearing inputs after successful submit
  const formRef = useRef<HTMLFormElement>(null);

  // React effect runs when submission success state changes
  useEffect(() => {
    if (state.succeeded) {
      // Clear all form inputs by resetting the form DOM element
      formRef.current?.reset();

      // Show the success message to user
      setShowSuccess(true);

      // Automatically hide the success message after 2 seconds
      const timer = setTimeout(() => setShowSuccess(false), 2000);

      // Cleanup the timer if component unmounts or re-renders before timeout
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  // Form submit handler calls Formspree's submit function
  // Prevents the default page reload behavior
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitForm(e);
  };

  // Contact info data — used to generate contact links with icons
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "yuranar12@gmail.com",
      link: "mailto:yuranar12@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+374 (91) 14-08-79",
      link: "tel:+37491140879",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Yerevan, Armenia",
      link: "#",
    },
  ];

  // Social media links with icons and URLs
  const socialLinks = [
    { icon: Github, href: "https://github.com/GhazaryanYuri", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/ghazaryan.yuri?igsh=MTRkZzE0MG5qZjl1bw%3D%3D",
      label: "Instagram",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Animated section header */}
        <motion.div
          ref={ref} // Track visibility for animation
          initial={{ opacity: 0, y: 50 }} // Start hidden and shifted down
          animate={inView ? { opacity: 1, y: 0 } : {}} // Animate in on scroll
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="text-purple-400">Touch</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Let's work together to bring your ideas to life. I'm always open to
            discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left side: Contact information with icons and links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }} // Start hidden and shifted left
            animate={inView ? { opacity: 1, x: 0 } : {}} // Animate in on scroll
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Let's Connect
            </h3>

            {/* Loop through contact info to render each item */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  whileHover={{ scale: 1.05 }} // Hover scale effect
                  className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                >
                  <div className="p-3 bg-purple-500 rounded-full">
                    <info.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{info.title}</h4>
                    <p className="text-gray-300">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social media icon links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 360 }} // Fun spin & scale effect
                  transition={{ duration: 0.3 }}
                  className="p-3 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-purple-500 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right side: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }} // Start hidden and shifted right
            animate={inView ? { opacity: 1, x: 0 } : {}} // Animate in on scroll
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Attach ref for resetting inputs */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Name input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-white font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors duration-300"
                  placeholder="Your Name"
                />
                {/* Formspree validation error for name */}
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>

              {/* Email input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-white font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
                {/* Formspree validation error for email */}
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              {/* Message textarea */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-white font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
                {/* Formspree validation error for message */}
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              {/* Success message, shown only briefly after form submits successfully */}
              {showSuccess && (
                <p className="text-green-400 text-center font-medium text-lg">
                  ✅ Message sent successfully!
                </p>
              )}

              {/* Submit button with animation and disabled state when submitting */}
              <motion.button
                disabled={state.submitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className={`w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                  state.submitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <Send size={20} />
                {state.submitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
