import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Get In Touch</h2>
           
           <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            Have a question, collaboration idea, or just want to say hi? I'm always open to new opportunities and conversations. Let's connect!
          </p>

          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-bold mb-6 dark:text-white">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  <Mail className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="font-medium dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400">raagulsubramani2001@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  <Phone className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="font-medium dark:text-white">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-400">+91 6383965667</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  <MapPin className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="font-medium dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">Puducherry, India</p>
                </div>
              </div>
            </div>

            <motion.a
              href="/resume-raagul.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg mt-8"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg w-full md:w-auto disabled:opacity-70"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={18} /> {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;