import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function RevealOnScroll({ children, direction = 'up', delay = 0 }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 60 : direction === 'down' ? -60 : 0,
      x: direction === 'left' ? 60 : direction === 'right' ? -60 : 0,
      scale: 0.9,
      rotateX: direction === 'up' ? 20 : 0
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      style={{ perspective: 1000 }}
    >
      {children}
    </motion.div>
  )
}
