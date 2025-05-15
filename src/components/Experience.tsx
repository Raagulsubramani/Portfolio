import React from 'react';
import { motion } from 'framer-motion';
import Timeline from './Timeline';
import { experiences } from '../data/experiences';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A journey marked by continuous growth, hands-on learning, and a passion for building impactful digital solutions. From developing full-stack applications and immersive Android apps to earning a strong academic foundation.
          </p>
        </motion.div>

        <Timeline items={experiences} />
      </div>
    </section>
  );
};

export default Experience;
