// Updated Projects page
import ProjectCard from '../components/ProjectCard'
import SectionTitle from '../components/SectionTitle'
import { motion } from 'framer-motion'
import { FiGithub } from 'react-icons/fi';

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured online store with cart functionality, product filtering, payment integration, admin dashboard for product management and whatsapp api for user interactions about products",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux","Whatsapp API","TailwindCSS"],
      codeLink: "https://github.com/example/ecommerce",
      demoLink: "https://ecommerce-demo.example.com",
      image: "/images/ecommerce-preview.jpg"
    },
    {
      title: "Multilingual Audio Transcriber and Translator App",
      description: "Transcribes audio to text using OpenAI Whisper, with real-time multilingual translation via Hugging Face.js",
      technologies: ["React", "Huggingface.js", "OpenAI Whisper", "TailwindCSS"],
      codeLink: "https://github.com/nithin-ravi-03/transcription-translation-app",
      demoLink: "https://transcription-translation-app.vercel.app/",
      image: "/images/transcriber-preview.jpg"
    },
    {
      title: "DevHUb - EdTech App",
      description: "A full-featured learning platform for developers offering advanced courses with chapter-wise quizzes, progress tracking, real-time chat, community engagement, and an admin dashboard for course management and secure Stripe payments.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe","TailwindCSS"],
      codeLink: "https://github.com/nithin-ravi-03/EdTech-app",
      demoLink: "https://ed-tech-application-frontend.vercel.app/",
      image: "/images/edtech-preview.jpg"
    },
    {
      title: "Expense Planner Application",
      description: "Budget & Savings Tracker that helps users track expenses, set savings goals, and earn rewards through a gamified experience. Built using React, Tailwind CSS, Framer Motion, and Heroicons.",
      technologies: ["React", "TailwindCSS", "Framer Motion","Heroicons"],
      codeLink: "https://github.com/nithin-ravi-03/expense-planner-app",
      demoLink: "https://expense-planner-app.vercel.app/",
      image: "/images/expense-preview.jpg"
    },
    {
      title: "Smart-Shelf : AI powered Retail Product Detection and Inventory Management           ",
      description: "A web app that enables image classification using custom-trained deep learning models via a Flask backend.",
      technologies: ["React", "Flask", "Node.js", "MongoDB","Tensorflow","OpenCV","Python"],
      codeLink: "https://github.com/example/portfolio",
      demoLink: "https://portfolio.example.com",
      image: "/images/smartshelf-preview.jpg"
    },
    {
      title: "Personal Fitness Tracker",
      description: "Full Stack Fitness Tracker app that allows users to manage personal goals with user-friendly UI and sends alerts realtime",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      codeLink: "https://github.com/nithin-ravi-03/MERN-tutorial-workout",
      demoLink: "https://dashboard-demo.example.com",
      image: "/images/workout-preview.jpg"
    }
  ]

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          title="My Projects" 
          subtitle="Some of the things I've built" 
        />
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              {...project} 
            />
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/nithin-ravi-03"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 font-medium"
          >
            <FiGithub className="mr-2" />
            Visit My GitHub
          </a>
        </div>
      </div>
    </div>
  )
}