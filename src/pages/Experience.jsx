import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionTitle from '../components/SectionTitle'

export default function Experience() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const experiences = [
    
    {
      title: "Embedded Machine Learning Intern",
      company: "IIT Palakkad - SATCARD",
      period: "Mar 2024 - July 2024",
      description: [
        "Part 1 - Modular Front-End Sensor Framework:",
        "Developed a solar-powered sensor system using Raspberry Pi Pico for collecting environmental data (evaporation, moisture, leaf wetness, temperature). Implemented time-series forecasting and machine learning models to predict sensor values and send real-time alerts to user’s mobile via Bluetooth.",
        "Designed and optimized power management for long-term durability using a 6V solar panel and 10,000mAh battery, with data visualization on OLED and storage via SD card.",
        "Part 2 - Weed Detection with YOLOv8 on ESP32-CAM:",
        "Model Training & Deployment: Trained a custom YOLOv8 model on 5000+ manually annotated images to detect and classify various types of weeds.",
        "Edge AI on Microcontroller: Deployed the model on an ESP32-CAM module and displayed real-time detection results on an OLED screen for low-cost, edge-based smart agriculture."
      ],
      technologies: ["Yolov8", "Python", "Tensorflow Lite", "ESP32 CAM", "Arduino IDE","Raspberry pi Pico"]
    },
    {
      title: "Full Stack Developer Intern",
      company: "Digital Agency - startup",
      period: "Oct 2024 - Present",
      description: [
        "Developed a scalable, feature-rich e-commerce platform tailored for handcraft products, featuring dynamic product filtering, detailed flashcard-style product views, and user authentication with profile management.",
        "Integrated Stripe for secure online payments and WhatsApp API to streamline product enquiries directly with vendors—boosting communication and trust in a startup environment.",
        "Built a custom admin dashboard for efficient product and order management, enabling easy inventory tracking and business oversight.",
        "Designed promotional UI elements and handled multiple frontend enhancements to elevate user engagement and improve overall UX."
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe","TailwindCSS","Context API","Figma"]
    }
    
  ]

  return (
    <div className="relative overflow-hidden dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 bg-gradient-to-br from-gray-50 to-white">
  <div className="container mx-auto px-6 sm:px-12 lg:px-24 py-20 relative z-10">
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <SectionTitle
        title="Professional Journey"
        subtitle="Where I've worked and what I've done"
        center
      />

      <div className="space-y-10 mt-14">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="bg-white/90 dark:bg-gray-800/60 backdrop-blur-xl p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
              <div>
                <h3 className="text-3xl font-extrabold text-gray-800 dark:text-white tracking-tight">
                  {exp.title}
                </h3>
                <p className="text-lg text-indigo-600 dark:text-indigo-400 mt-1 font-medium">
                  {exp.company}
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-200 text-sm font-semibold rounded-full shadow-sm">
                  {exp.period}
                </span>
              </div>
            </div>

            <ul className="list-disc pl-5 mb-6 text-gray-700 dark:text-gray-300 space-y-3 text-lg leading-relaxed">
              {exp.description.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              {exp.technologies.map((tech, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.05 }}
                  className="px-3 py-1.5 bg-gradient-to-tr from-purple-100 to-blue-100 dark:from-purple-700 dark:to-blue-700 text-gray-800 dark:text-gray-100 text-sm rounded-full shadow-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</div>

  )
}