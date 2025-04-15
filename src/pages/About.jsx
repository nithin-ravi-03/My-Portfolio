import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionTitle from '../components/SectionTitle'
import AnimatedText from '../components/AnimatedText'
import Sparkles from '../components/Sparkles'

// Skill icons (using Heroicons v2)
const skillIcons = {
  'React': (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#61DAFB]">
      <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />
      <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
      <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z" />
    </svg>
  ),
  'JavaScript': (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#F7DF1E]">
      <path fillRule="evenodd" d="M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75zM10.5 7.5a.75.75 0 00-.75.75v8.25c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75v-8.25a.75.75 0 00-.75-.75h-1.5z" clipRule="evenodd" />
    </svg>
  ),
  'TailwindCSS': (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#06B6D4]">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
  ),
  'Node.js': (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#339933]">
      <path fillRule="evenodd" d="M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75zm-3.75-9.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75z" clipRule="evenodd" />
    </svg>
  ),
  'Git': (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#F05032]">
      <path fillRule="evenodd" d="M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75zm-1.5-9.75a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zm.75-3a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5z" clipRule="evenodd" />
    </svg>
  ),
  'REST APIs': (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#FF6B6B]">
      <path fillRule="evenodd" d="M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75zm-3.75-7.5a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75-3a.75.75 0 000 1.5h6a.75.75 0 000-1.5h-6z" clipRule="evenodd" />
    </svg>
  ),
  'Redux': (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#764ABC]">
      <path d="M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75zm-1.5-15a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V7.5a.75.75 0 01.75-.75zm3 3a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 01.75-.75zm-6 0a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0v-3.75a.75.75 0 01.75-.75zm3 3a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0v-3.75a.75.75 0 01.75-.75z" />
    </svg>
  ),
  'Figma': (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#F24E1E]">
      <path fillRule="evenodd" d="M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75zm-3.75-15a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm0 6a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
    </svg>
  ),
  'MongoDB': (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-[#47A248]" viewBox="0 0 24 24">
    <path d="M12.001 0C9.758 4.5 9.19 8.86 10.207 13.138c.443 1.888.933 3.128 1.36 4.222.143.355.299.713.448 1.067.256.607.632 1.572.632 2.351 0 .354-.25.749-.573.749-.445 0-.572-.319-.843-.805a45.64 45.64 0 0 1-.831-2.023c-.212-.524-.409-1.029-.595-1.531-1.06-2.832-2.4-7.648-1.636-11.62.487-2.521 1.902-4.598 3.371-6.548z"/>
  </svg>
),

'Python': (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#3776AB]">
    <path d="M14.25 2h-4.5A3.75 3.75 0 006 5.75v2.25h8.25v1.5H6A3.75 3.75 0 002.25 13v4.5A3.75 3.75 0 006 21.25h4.5v-2.25H6v-4.5h8.25v-6H18V5.75A3.75 3.75 0 0014.25 2zM15 5.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
  </svg>
),

'C': (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-[#A8B9CC]" viewBox="0 0 24 24">
    <path d="M12 .587l10 5.826v11.174L12 23.413 2 17.587V6.413L12 .587zM12 2.73 4 7.44v9.12L12 21.27l8-4.71V7.44L12 2.73zm.215 4.918c2.355 0 4.2 1.753 4.2 3.946h-2.04c0-1.2-.973-2.176-2.16-2.176-1.19 0-2.16.976-2.16 2.176s.97 2.174 2.16 2.174c.923 0 1.707-.552 2.01-1.325h2.037c-.363 1.885-2.135 3.285-4.047 3.285-2.355 0-4.2-1.754-4.2-3.946s1.845-3.946 4.2-3.946z"/>
  </svg>
),

'Java': (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#007396]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.32 19.98c-1.71.523-2.82 1.09-2.82 1.09s1.11.292 3.02.292c1.78 0 4.13-.195 6.07-.798 2.06-.636 2.99-1.483 2.99-1.483s-1.01.424-2.63.848c-2.22.576-5.12.88-6.63.051zm9.67-4.29c0 0-.79.54-2.52.96-3.21.79-8.24.7-11.23-.037-1.32-.34-2.13-.79-2.13-.79s.86.73 2.68 1.18c3.12.8 8.19.7 11.46-.08 1.52-.37 2.77-1.23 2.77-1.23zm-3.88-4.84c1.07 1.23-.28 2.33-.28 2.33s2.71-1.39 1.46-3.12c-1.17-1.63-2.06-2.44 2.78-5.22 0 0-7.58 1.9-3.96 6.01zm-1.32 3.55c1.34-.5.88-1.94.88-1.94s.35.36.71 1.02c.61 1.13-.16 1.9-.16 1.9s1.37-.7.75-2.36c-.51-1.4-2.58-1.45-2.58-1.45s1.28.52 1.4 1.43c.09.69-.52.99-.99 1.11zm-2.47-.59c-.44.34-.85.66-.99.9-.49.76.17 1.52.97 1.46 1.59-.13 2.24-2.1.25-2.36 1.23-.5 2.14.2 2.1 1.1-.03.67-.6 1.08-.6 1.08s1.52-.63 1.06-2.04c-.45-1.3-2.34-1.42-3.76-.14z"/>
  </svg>
),

'MySQL': (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-[#00758F]" viewBox="0 0 24 24">
    <path d="M9.5 2c-.8.2-1.6.6-2.3 1.2C6 4 5.3 5 4.9 6c-.6 1.2-.9 2.6-1 3.8l1.9.3c.1-1 .4-2.2.8-3.2.3-.7.8-1.3 1.4-1.8.5-.4 1.2-.6 1.8-.7.9-.1 1.7.3 2.2.9.5.6.9 1.4.9 2.1 0 .7-.3 1.4-.7 2l-1.5 2.1c-1 1.4-1.5 3.2-1.3 4.9.1.9.4 1.9.9 2.7.6.8 1.3 1.4 2.2 1.7l.7-1.8c-.5-.1-1-.4-1.4-.8-.4-.5-.6-1.1-.7-1.7-.1-1.1.3-2.3 1-3.2l1.5-2c.8-1 1.3-2.3 1.2-3.6-.1-1.2-.6-2.5-1.5-3.5C12.5 2.5 10.9 1.8 9.5 2z"/>
  </svg>
),

'AWS': (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-[#FF9900]" viewBox="0 0 24 24">
    <path d="M20.9 4.3c-2.3-1.7-5.4-1.9-8.2-1.2-2.7.6-5.2 2-7.2 3.8l1.6 1.6c1.6-1.4 3.6-2.4 5.6-2.8 2.1-.5 4.4-.3 6.2.9L20.9 4.3zM3 18c1.6 1.9 3.9 3.3 6.3 3.8 2.4.5 5 .2 7.3-.8 1.8-.8 3.4-2.1 4.6-3.7l-1.6-1.6c-1.6 2.1-3.9 3.6-6.4 4.3-2.5.6-5.2.3-7.5-.9C4.2 19.4 2.8 17.9 2 16.2L.4 17.6c.8 1.4 1.9 2.6 3.2 3.7L3 18z"/>
  </svg>
),

'HTML': (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-[#E44D26]" viewBox="0 0 24 24">
    <path d="M1.5 0l1.7 19.6L12 24l8.8-4.4L22.5 0H1.5zm17.1 5.6l-.3 2.9H7.8l.2 2.2h10.1l-.4 4.3-5.6 1.5-5.4-1.5-.3-3h2.6l.1 1.3 3.1.8 3-1-.1-1.6H6.8L6.2 5.6h12.4z"/>
  </svg>
),

'Postman': (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-[#FF6C37]">
    <path d="M12 0C5.372 0 0 5.37 0 12c0 6.628 5.372 12 12 12s12-5.372 12-12c0-6.63-5.372-12-12-12zm1.728 17.598a.747.747 0 0 1-1.057.167l-4.88-3.596-2.394.98a.748.748 0 1 1-.553-1.39l2.68-1.098a.75.75 0 0 1 .715.094l3.244 2.393 4.085-7.41a.748.748 0 1 1 1.308.729l-4.147 7.552a.75.75 0 0 1-.001.579z"/>
  </svg>
)

}

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  return (
    <div className="relative overflow-hidden dark:bg-gray-900 bg-gray-50">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:hidden" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80 dark:block hidden" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-20">
        <div className="max-w-7xl mx-auto w-full">
          {/* About Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionTitle 
              title={
                <AnimatedText text="About Me" />
              }
              subtitle={
                <AnimatedText text="Get to know more about who I am and what I do" delay={0.2} />
              }
            />
          </motion.section>

          <div className="flex flex-col md:flex-row gap-12 mt-12">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-white dark:bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  <AnimatedText text="Who I Am" />
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm a full-stack developer focused on building clean, responsive, and user-friendly web applications. With expertise in React, JavaScript, Node.js, and Tailwind CSS, I enjoy creating seamless digital experiences that combine aesthetic design with robust functionality. I'm also passionate about integrating AI and machine learning into practical solutions that drive real impact.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                Explore my work or feel free to get in touch — I’m always excited to collaborate on innovative projects.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  When I'm not coding, you can find me hiking, reading sci-fi novels, or 
                  experimenting with new cooking recipes.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  <AnimatedText text="My Skills" />
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'React', 'JavaScript', 'TailwindCSS', 
                    'Node.js', 'Git', 'REST APIs', 
                    'Redux', 'Figma','MongoDB','Python','C','Java','MySQL','AWS','HTML','Postman'
                  ].map((skill, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ y: -3 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-gray-700/50 shadow-sm hover:shadow-md transition-all border border-gray-200 dark:border-gray-600"
                    >
                      <div className="flex-shrink-0">
                        {skillIcons[skill]}
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="bg-white dark:bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  <AnimatedText text="Education" />
                </h3>
                <div className="space-y-6">
                  <motion.div 
                    whileHover={{ y: -3 }}
                    className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-600/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-500/20 shadow-md hover:shadow-lg transition-all"
                  >
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">B.Tech - Electronics and Communication Engineering</h4>
                    <p className="text-blue-600 dark:text-blue-300 mb-3">Amrita Vishwa Vidyapeetham • 2021 - 2025</p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Current CGPA - 8.13
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Specialized in Embedded systems, AI, ML and web technologies.
                    </p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ y: -3 }}
                    className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-600/20 p-6 rounded-2xl border border-purple-200 dark:border-purple-500/20 shadow-md hover:shadow-lg transition-all"
                  >
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">12th Grade - High-School</h4>
                    <p className="text-purple-600 dark:text-purple-300 mb-3">GD MHSS • 2019 - 2021</p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Grade - 95.05%
                    </p>
                  </motion.div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-6">
                  <AnimatedText text="Experience" />
                </h3>
                <div className="space-y-6">
                  <motion.div 
                    whileHover={{ y: -3 }}
                    className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-600/20 p-6 rounded-2xl border border-green-200 dark:border-green-500/20 shadow-md hover:shadow-lg transition-all"
                  >
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Embedded Machine Learning Intern</h4>
                    <p className="text-green-600 dark:text-green-300 mb-3">IIT PALAKKAD (SATCARD) • Mar 2024 - Jul 2024</p>
                    <p className="text-gray-600 dark:text-gray-300">
                    Real-time agricultural land monitoring system using Raspberry Pi Pico with ML models for predictive sensor data analysis and intelligent user alerts.
                    </p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ y: -3 }}
                    className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/30 dark:to-amber-600/20 p-6 rounded-2xl border border-amber-200 dark:border-amber-500/20 shadow-md hover:shadow-lg transition-all"
                  >
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Full Stack Developement Intern</h4>
                    <p className="text-amber-600 dark:text-amber-300 mb-3">Digital Agency • Oct 2024 - Feb 2025</p>
                    <p className="text-gray-600 dark:text-gray-300">
                    Fullstack MERN intern at an art-tech startup; developed scalable e-commerce platforms, optimized product UI components, and contributed to end-to-end feature implementation.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                    Also built a dynamic products page with an admin dashboard for real-time stock management and integrated WhatsApp API for direct customer inquiries
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}