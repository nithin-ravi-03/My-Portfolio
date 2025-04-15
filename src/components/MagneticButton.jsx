// In your MagneticButton component file (src/components/MagneticButton.js)
import { motion } from 'framer-motion'

export default function MagneticButton({ children }) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      whileTap={{ 
        scale: 0.95,
        transition: { duration: 0.1 }
      }}
      className="inline-block"
    >
      {children}
    </motion.div>
  )
}