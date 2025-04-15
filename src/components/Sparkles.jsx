import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Sparkle = ({ size, left, top, delay }) => {
  return (
    <motion.div
      className="absolute rounded-full bg-white pointer-events-none"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}%`,
        top: `${top}%`,
        filter: 'blur(1px)',
        willChange: 'transform, opacity' // Improve performance
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 0.8, 0],
        scale: [0, 1, 0],
        rotate: [0, 180]
      }}
      transition={{ 
        duration: 2 + Math.random(),
        delay,
        repeat: Infinity,
        repeatDelay: 1 + Math.random() * 4,
        ease: "easeInOut"
      }}
    />
  )
}

export default function Sparkles({ children }) {
  const [sparkles, setSparkles] = useState([])

  useEffect(() => {
    // Only create sparkles on client-side to avoid SSR mismatch
    if (typeof window !== 'undefined') {
      const newSparkles = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 2
      }))
      setSparkles(newSparkles)
    }
  }, [])

  return (
    <div className="relative inline-block">
      {children}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {sparkles.map(sparkle => (
          <Sparkle key={sparkle.id} {...sparkle} />
        ))}
      </div>
    </div>
  )
}