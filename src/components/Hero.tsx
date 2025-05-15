import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16 overflow-hidden"
    >
      {/* Background floating dots */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] opacity-30 dark:opacity-10"></div>

      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8 md:gap-16 relative z-10">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Hi, I'm{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 animate-text-glow bg-[length:200%]">
              S.RAAGUL
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-8">
            Jr. Full Stack Developer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg mb-8">
            Passionate about building scalable applications using modern technologies. Specialized in Python, Django, Java, React, and AR development.
          </p>
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full font-medium shadow-lg hover:shadow-xl backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            onClick={scrollToAbout}
          >
            Learn More
          </motion.button>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl after:content-[''] after:absolute after:inset-0 after:rounded-full after:border-4 after:border-purple-500 after:blur-md after:animate-pulse after:opacity-30">
        <img 
          src="/profile.jpg" 
          alt="S.RAAGUL" 
          className="w-full h-full object-cover relative z-10"
        />
      </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1,
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 0.5
        }}
        onClick={scrollToAbout}
      >
        <ChevronDown size={36} className="text-gray-600 dark:text-gray-400" />
      </motion.div>
    </section>
  );
};

export default Hero;
