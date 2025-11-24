import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const [scrollPercentage, setScrollPercentage] = useState(0)

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setScrollPercentage(Math.round(latest * 100))
    })
  }, [scrollYProgress])

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="scroll-progress-bar"
        style={{ scaleX }}
      />
      
      {/* Scroll Percentage Indicator */}
      <motion.div
        className="scroll-percentage"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: scrollPercentage > 5 ? 1 : 0,
          scale: scrollPercentage > 5 ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.span
          key={scrollPercentage}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {scrollPercentage}%
        </motion.span>
      </motion.div>
    </>
  )
}
