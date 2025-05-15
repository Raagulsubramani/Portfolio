import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
              S.RAAGUL
            </h3>
            <p className="mt-2 text-gray-400">Full Stack Developer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-4 mb-6 md:mb-0"
          >
            <motion.a
              href="https://www.instagram.com/raagulrockzz?igsh=MTFjbGZranJnYjU5dg=="
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: '#fff' }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full hover:bg-gray-800"
            >
            <Instagram size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/raagul-s-9263a3227/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: '#fff' }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full hover:bg-gray-800"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="https://x.com/RaagulRockzz"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: '#fff' }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full hover:bg-gray-800"
            >
              <Twitter size={20} />
            </motion.a>
            <motion.a
              href="mailto:raagulsubramani2001@gmail.com"
              whileHover={{ scale: 1.1, color: '#fff' }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full hover:bg-gray-800"
            >
              <Mail size={20} />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm"
        >
          <p>&copy; {currentYear} S.RAAGUL All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;