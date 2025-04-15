// At the top of Home.jsx
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import MagneticButton from '../components/MagneticButton'
import AnimatedText from '../components/AnimatedText'
import Sparkles from '../components/Sparkles';
import HireMeButton from '../components/HireMeButton'
import profileImage from '/src/assets/profile.jpg'
import heroBg from '../assets/hero-bg.jpg'
import { SiExpress, SiMongodb, SiFlask, SiMysql ,SiScikitlearn, SiKeras, SiC, SiLeetcode} from "react-icons/si";
import { BsDatabaseFillCheck } from "react-icons/bs"; // Placeholder for ChromaDB
import { FaReact, FaNodeJs, FaPython, FaJava } from 'react-icons/fa'
import {  SiJavascript, SiTailwindcss, SiRedux, SiFirebase,  SiTensorflow, SiPytorch, SiDocker} from 'react-icons/si'
import EdTech from '../assets/edtech.jpg'; // Adjust path as needed
import FreeScribe from '../assets/freescribe.jpg';
import {FaHtml5, FaFigma } from "react-icons/fa";
import { SiVuedotjs } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";

export default function Home() {

  const navigate = useNavigate();

// Replace all window.location.href with:
  const handleNavigation = (path) => {
    navigate(path);
  }

  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  })
  const [aboutRef, aboutInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = '/offcampus-cse1.pdf'
    link.download = 'Nithin_Ravi_resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaReact className="text-3xl text-blue-500" />,
      skills: [
        { name: "React", icon: <FaReact className="text-2xl text-blue-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-2xl text-yellow-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-2xl text-cyan-400" /> },
        { name: "Redux", icon: <SiRedux className="text-2xl text-purple-500" /> },
        { name: "HTML", icon: <FaHtml5 className="text-2xl text-orange-500" /> },
        { name: "Context API", icon: <RiReactjsLine className="text-2xl text-blue-400" /> },
        { name: "Figma", icon: <FaFigma className="text-2xl text-pink-500" /> },
        { name: "Shadcn UI", icon: <SiVuedotjs className="text-2xl text-green-500" /> },

      ]
    },
    {
      title: "Backend Development",
      icon: <FaNodeJs className="text-3xl text-green-500" />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-2xl text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-2xl text-gray-700" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-2xl text-green-600" /> },
        { name: "Flask", icon: <SiFlask className="text-2xl text-gray-600" /> },
        { name: "Firebase", icon: <SiFirebase className="text-2xl text-yellow-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-2xl text-blue-600" /> },
        { name: "ChromaDB", icon: <BsDatabaseFillCheck className="text-2xl text-purple-500" /> },

      ]
    },
    {
      title: "Machine Learning",
      icon: <FaPython className="text-3xl text-blue-400" />,
      skills: [
        { name: "Python", icon: <FaPython className="text-2xl text-blue-400" /> },
        { name: "TensorFlow", icon: <SiTensorflow className="text-2xl text-orange-500" /> },
        { name: "PyTorch", icon: <SiPytorch className="text-2xl text-red-500" /> },
        { name: "Scikit-learn", icon: <SiScikitlearn className="text-2xl text-yellow-500" /> },
        { name: "Keras", icon: <SiKeras className="text-2xl text-red-600" /> },

      ]
    },
    {
      title: "Others",
      icon: <SiDocker className="text-3xl text-blue-400" />,
      skills: [
        { name: "Java", icon: <FaJava className="text-2xl text-red-600" /> },
        { name: "C", icon: <SiC className="text-2xl text-gray-700" /> },
        { name: "SQL", icon: <SiMysql className="text-2xl text-blue-600" /> },
        
      ]
    }
  ]

  return (
    <div className="relative overflow-hidden dark:bg-gray-900 bg-gray-50">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/20 dark:block hidden"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80 dark:block hidden" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:hidden" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-32">
        <div className="max-w-7xl mx-auto w-full">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                  <AnimatedText text="Hi, I'm Nithin Ravi" />
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-8">
                  <AnimatedText text="Full Stack Developer" delay={0.2} />
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-lg">
                  I create stunning, performant web apps with modern technologies.
                  Passionate about AI Driven features and crafting intuitive interfaces that users love.
                </p>
              </motion.div>

              <div className="flex flex-wrap gap-4">
                <MagneticButton>
                  <button
                    onClick={() => handleNavigation('/contact')}
                    className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-lg font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    <FiMail className="text-xl" />
                    Contact Me
                  </button>
                </MagneticButton>
                <MagneticButton>
                  <button
                    onClick={downloadResume}
                    className="px-8 py-4 border-2 border-blue-600 dark:border-white text-blue-600 dark:text-white hover:bg-blue-600 hover:text-white dark:hover:bg-white dark:hover:text-black rounded-full text-lg font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    <FiDownload className="text-xl" />
                    Download Resume
                  </button>
                </MagneticButton>
              </div>

              <div className="mt-12 flex gap-6">
                {[
                  { icon: <FiGithub />, url: 'https://github.com/nithin-ravi-03' },
                  { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/nithin-ravi-a5606722a/' },
                  { icon: <SiLeetcode />, url: 'https://leetcode.com/u/Nithin_Ravi/' }
                ].map((social, index) => (
                  <MagneticButton key={index}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white dark:bg-gray-800/50 hover:bg-blue-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white flex items-center justify-center text-xl transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      {social.icon}
                    </a>
                  </MagneticButton>
                ))}
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full border-4 border-blue-500/30 shadow-2xl"
                  style={{ objectPosition: 'center top' }}
                />
                <div className="absolute -inset-4 rounded-full border-4 border-blue-500/10 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* About Section */}
          
          <motion.section
            ref={aboutRef}  // Changed from ref to aboutRef
            initial={{ opacity: 0, y: 50 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}  // Changed to aboutInView
            transition={{ duration: 0.8 }}
            className="mt-32 bg-white dark:bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left side - About text */}
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-600/20 p-6 rounded-2xl border border-indigo-200 dark:border-indigo-500/20 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Who I Am</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                I'm a full-stack developer focused on building clean, responsive, and user-friendly web applications. With expertise in React, JavaScript, Node.js, and Tailwind CSS, I enjoy creating seamless digital experiences that combine aesthetic design with robust functionality. I'm also passionate about integrating AI and machine learning into practical solutions that drive real impact.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  My approach combines technical excellence with creative problem-solving to deliver 
                  solutions that meet both user needs and business goals.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  When I'm not coding, you can find me contributing to open-source projects, 
                  learning new technologies, or hiking in nature.
                </p>
              </div>
              
              {/* Right side - Education */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-600/20 p-6 rounded-2xl border border-green-200 dark:border-green-500/20 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">B.Tech - Electronics and Communication Engineering</h3>
                  <p className="text-green-600 dark:text-green-300 mb-2">Amrita Vishwa Vidyapeetham • 2021 - 2025</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Current CGPA - 8.13
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Specialized in Embedded systems, IOT, AI, ML, Cloud and Web Technologies
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/30 dark:to-amber-600/20 p-6 rounded-2xl border border-amber-200 dark:border-amber-500/20 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Grade 12</h3>
                  <p className="text-amber-600 dark:text-amber-300 mb-2">GD MHSS • 2019 - 2021</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Grade - 95.05%
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 text-right">
            <button
              onClick={() => handleNavigation('/about')}
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300 font-medium"
            >
              More About Me
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            </div>
          </motion.section>

          {/* Experience Preview */}
          <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mt-32 bg-white dark:bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Professional Journey and Experiences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-600/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-500/20 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Embedded Machine Learning Intern</h3>
                <p className="text-blue-600 dark:text-blue-300 mb-4">IIT Palakkad - SATCARD  • Mar 2024 - Jul 2024</p>
                <p className="text-gray-700 dark:text-gray-300">
                Real-time agricultural land monitoring system using Raspberry Pi Pico with ML models for predictive sensor data analysis and intelligent user alerts.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-600/20 p-6 rounded-2xl border border-purple-200 dark:border-purple-500/20 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Fullstack Developer Intern</h3>
                <p className="text-purple-600 dark:text-purple-300 mb-4">Digital Agency- startup • Oct 2024 - Mar 2025</p>
                <p className="text-gray-700 dark:text-gray-300">
                Fullstack MERN intern at an art-tech startup; developed scalable e-commerce platforms, optimized product UI components, and contributed to end-to-end feature implementation.
                </p>
              </div>
            </div>
            <div className="mt-6 text-right">
            <button
              onClick={() => handleNavigation('/experience')}
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300 font-medium"
            >
              View Full Experience
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            </div>
          </motion.section>

          {/* Key Skills Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-32"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Key Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {category.icon}
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{category.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        <div className="flex-shrink-0">
                          {skill.icon}
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Projects Preview */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-32"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Featured Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "DevHub - EdTech Application",
                  description: "A full-featured learning platform for developers offering advanced courses with chapter-wise quizzes, progress tracking, real-time chat, community engagement, and an admin dashboard for course management and secure Stripe payments.",
                  tech: ["React", "Node.js","MongoDB","Stripe","TailwindCSS"],
                  image: EdTech,
                  demoLink : "https://ed-tech-application-frontend.vercel.app/",
                  codeLink : "https://github.com/nithin-ravi-03/EdTech-app"
                },
                {
                  title: "Multilingual Audio Transcriber and Translator App",
                  description: "Web app that transcribes audio to text using OpenAI Whisper, with real-time multilingual translation via Hugging Face.js and a sleek Tailwind CSS UI.",
                  tech: ["React", "Huggingface", "OpenAI whsiper","TailwidCSS"],
                  image: FreeScribe,
                  demoLink : "https://transcription-translation-app.vercel.app/",
                  codeLink : "https://github.com/nithin-ravi-03/transcription-translation-app"
                }
              ].map((project, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-500"
                >
                  <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/70 to-purple-600/70"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-xl font-bold">{project.title}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium transition-colors duration-300 shadow-md"
                      >
                        View Demo
                      </a>
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white rounded-full text-sm font-medium transition-colors duration-300 shadow-md"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 text-right">
            <button
              onClick={() => handleNavigation('/projects')}
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300 font-medium"
            >
              Explore All Projects
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            </div>
          </motion.section>
        </div>

        {/* Contact Preview Section */}
<motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="mt-32 bg-white dark:bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl"
>
  <div className="flex flex-col md:flex-row items-center gap-8">
    {/* Left side - Text */}
    <div className="flex-1">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Let's Build Something Amazing</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Have a project in mind or want to discuss opportunities? I'd love to hear from you!
      </p>
      <Sparkles>
        <MagneticButton>
          <button
            onClick={() => handleNavigation('/contact')}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full text-lg font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
          >
            <FiMail className="text-xl" />
            Take me to Contacts page
          </button>
        </MagneticButton>
      </Sparkles>
    </div>
    
    {/* Right side - Visual Element */}
    <div className="hidden md:block relative w-64 h-64">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl opacity-20"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <FiMail className="text-9xl text-blue-500/30 dark:text-purple-400/20" />
      </div>
    </div>
  </div>
</motion.section>
      </div>
      

      <HireMeButton />
    </div>
  )
}