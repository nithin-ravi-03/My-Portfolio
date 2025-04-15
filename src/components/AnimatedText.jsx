import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function AnimatedText({ text, delay = 0 }) {
  const [animatedText, setAnimatedText] = useState('')
  
  useEffect(() => {
    let currentText = ''
    let i = 0
    
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          currentText += text.charAt(i)
          setAnimatedText(currentText)
          i++
        } else {
          clearInterval(interval)
        }
      }, 50)
      
      return () => clearInterval(interval)
    }, delay * 1000)
    
    return () => clearTimeout(timer)
  }, [text, delay])
  
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {animatedText}
    </motion.span>
  )
}