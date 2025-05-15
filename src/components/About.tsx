import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Rocket } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I'm a passionate Junior Full Stack Developer with expertise in building scalable applications using modern technologies. My background in Mechanical Engineering has equipped me with strong problem-solving abilities that I now apply to create efficient software solutions.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Currently working at Gooroo Mobility India, I develop full-stack applications using Java, Python, Django, and React/Next.js. I've also expanded my skills into Android Development and AR Applications.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I'm constantly learning and exploring new technologies to enhance my development skills and create better user experiences.
            </p>
          </motion.div>

          <motion.div 
            className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <Code className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2 dark:text-white">Web Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Creating responsive and interactive web applications using React and Next.js
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <Cpu className="text-purple-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2 dark:text-white">Backend Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Building robust APIs and server applications with Python and Django
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm md:col-span-2">
              <Rocket className="text-indigo-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2 dark:text-white">AR Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Crafting immersive augmented reality experiences for Android platforms using java and Kotlin
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;