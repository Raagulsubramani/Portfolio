import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaJava, FaDocker, FaGithub, FaFigma,
  FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaAndroid, FaCode
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiJavascript, SiTypescript, SiTailwindcss,
  SiPython, SiDjango, SiMongodb, SiMysql, SiPostgresql,
  SiGraphql, SiKotlin, SiPostman,
  SiNetlify
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

interface SkillCategory {
  name: string;
  skills: Array<{
    name: string;
    icon: React.ReactNode;
  }>;
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: <FaReact className="text-[#61DAFB] text-3xl" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white text-3xl" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E] text-3xl" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6] text-3xl" /> },
      { name: "HTML", icon: <FaHtml5 className="text-[#E34F26] text-3xl" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6] text-3xl" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3] text-3xl" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4] text-3xl" /> }
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: "Python", icon: <SiPython className="text-[#3776AB] text-3xl" /> },
      { name: "Django", icon: <SiDjango className="text-[#092E20] dark:text-[#44B78B] text-3xl" /> },
      { name: "Java", icon: <FaJava className="text-[#007396] text-3xl" /> },
      { name: "REST API", icon: <TbApi className="text-[#FF4B4B] text-3xl" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248] text-3xl" /> },
      { name: "MySQL", icon: <SiMysql className="text-[#4479A1] text-3xl" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791] text-3xl" /> },
      { name: "GraphQL", icon: <SiGraphql className="text-[#E10098] text-3xl" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-[#339933] text-3xl" /> }
    ]
  },
  {
    name: "Mobile & AR",
    skills: [
      { name: "Java", icon: <FaJava className="text-[#007396] text-3xl" /> },
      { name: "Kotlin", icon: <SiKotlin className="text-[#7F52FF] text-3xl" /> },
      { name: "Android Studio", icon: <FaAndroid className="text-[#3DDC84] text-3xl" /> },
      { name: "XML", icon: <FaCode className="text-[#F16529] text-3xl" /> }
    ]
  },
  {
    name: "Others",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-[#F05032] text-3xl" /> },
      { name: "GitHub", icon: <FaGithub className="text-[#181717] dark:text-white text-3xl" /> },
      { name: "Docker", icon: <FaDocker className="text-[#2496ED] text-3xl" /> },
      { name: "Netlify", icon: <SiNetlify className="text-[#00C7B7] text-3xl" /> },
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37] text-3xl" /> },
      { name: "Figma", icon: <FaFigma className="text-[#F24E1E] text-3xl" /> }
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 dark:text-white">Skills & Expertise</h2>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg mb-4">
            Here are some of my skills on which I have been working on for the past 1+ years.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={category.name}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-xl font-bold mb-6 text-center dark:text-white">{category.name}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow gap-2"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {skill.icon}
                    <span className="font-medium text-sm text-gray-800 dark:text-gray-200 mt-2">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;