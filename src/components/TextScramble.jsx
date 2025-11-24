import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function TextScramble({ text, delay = 0 }) {
  const [displayText, setDisplayText] = useState('')
  const [isScrambling, setIsScrambling] = useState(true)
  
  const chars = '!<>-_\\/[]{}—=+*^?#________'
  
  useEffect(() => {
    let frame = 0
    const maxFrames = 60
    
    const scramble = setInterval(() => {
      if (frame < maxFrames) {
        const progress = frame / maxFrames
        const numCorrectChars = Math.floor(progress * text.length)
        
        let result = ''
        for (let i = 0; i < text.length; i++) {
          if (i < numCorrectChars) {
            result += text[i]
          } else if (Math.random() < 0.3) {
            result += chars[Math.floor(Math.random() * chars.length)]
          } else {
            result += text[i]
          }
        }
        
        setDisplayText(result)
        frame++
      } else {
        setDisplayText(text)
        setIsScrambling(false)
        clearInterval(scramble)
      }
    }, 30)
    
    return () => clearInterval(scramble)
  }, [text])
  
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className="text-scramble"
    >
      {displayText}
    </motion.span>
  )
}
