import { useState, useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { 
  FaReact, FaNodeJs, FaGitAlt, FaGithub, FaLinkedin, 
  FaInstagram, FaEnvelope, FaArrowUp 
} from 'react-icons/fa'
import { 
  SiFlutter, SiDart, SiJavascript, SiTailwindcss, 
  SiMongodb, SiExpress, SiFirebase, SiFigma, SiPostman, SiAmazon 
} from 'react-icons/si'
import { Code2, Briefcase, Award, MessageSquare, FileText, Send } from 'lucide-react'
import CursorTrail from './components/CursorTrail'
import ScrollProgress from './components/ScrollProgress'
import ParticlesBackground from './components/ParticlesBackground'
import RevealOnScroll from './components/RevealOnScroll'
import ParallaxSection from './components/ParallaxSection'
import MagneticButton from './components/MagneticButton'
import './App.css'

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })
  const formRef = useRef()

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: '', message: '' })

    // EmailJS credentials - HARUS DIISI DULU!
    const SERVICE_ID = 'service_m3vtapi'      // Ganti dengan Service ID dari EmailJS
    const TEMPLATE_ID = 'template_83dc0bi'    // Ganti dengan Template ID dari EmailJS
    const PUBLIC_KEY = 'FCoaJ_ssywOEw4cVG'      // Ganti dengan Public Key dari EmailJS

    // Cek apakah EmailJS sudah dikonfigurasi
    if (SERVICE_ID === 'YOUR_SERVICE_ID' || TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      setSubmitStatus({
        type: 'error',
        message: '⚠️ EmailJS belum dikonfigurasi. Silakan kirim email langsung ke rakhamkp@gmail.com atau hubungi via WhatsApp.'
      })
      setIsSubmitting(false)
      
      // Redirect ke mailto sebagai fallback
      setTimeout(() => {
        window.location.href = `mailto:rakhamkp@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`
      }, 2000)
      return
    }

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'rakhamkp@gmail.com',
        },
        PUBLIC_KEY
      )

      setSubmitStatus({
        type: 'success',
        message: '✅ Terima kasih! Pesan Anda telah terkirim. Saya akan segera menghubungi Anda kembali.'
      })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus({
        type: 'error',
        message: '❌ Gagal mengirim. Silakan kirim email langsung ke rakhamkp@gmail.com'
      })
      
      // Auto-redirect ke mailto setelah 3 detik
      setTimeout(() => {
        window.location.href = `mailto:rakhamkp@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`
      }, 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="portfolio">
      <CursorTrail />
      <ScrollProgress />
      <ParticlesBackground />
      
      {/* Hero Section */}
      <section id="home" className="hero-section">
        {/* Animated Background */}
        <div className="animated-bg">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        
        {/* Floating Icons */}
        <motion.div 
          className="floating-icon icon-1"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <FaReact size={40} />
        </motion.div>
        <motion.div 
          className="floating-icon icon-2"
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        >
          <SiFlutter size={35} />
        </motion.div>
        <motion.div 
          className="floating-icon icon-3"
          animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
        >
          <FaNodeJs size={38} />
        </motion.div>
        <motion.div 
          className="floating-icon icon-4"
          animate={{ y: [0, 18, 0], rotate: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
        >
          <SiJavascript size={32} />
        </motion.div>
        
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="hero-image"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src="/rakha.png" alt="Profile" />
            <div className="image-glow"></div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Hi, I'm Rakha Maulana
          </motion.h1>
          
          <motion.div
            className="role"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span>Junior Network Administrator</span> & <span>Cross-platform developer</span>
          </motion.div>
          
          <motion.p
            className="tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            AWS Academy Graduate | Building scalable web & mobile applications with modern technologies.
          </motion.p>
          
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <MagneticButton strength={0.5}>
              <motion.a 
                href="#projects" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(102, 126, 234, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                See Projects
              </motion.a>
            </MagneticButton>
            <MagneticButton strength={0.5}>
              <motion.a 
                href="#contact" 
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </MagneticButton>
          </motion.div>
        </motion.div>
        
        <div className="hero-scroll">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            ↓
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about">
        <RevealOnScroll direction="up">
          <SectionTitle icon={<Code2 />} title="About Me" />
        </RevealOnScroll>
        <div className="about-content">
          <RevealOnScroll direction="left" delay={0.2}>
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
            <h3>Junior Network Administrator &  Cross-platform Developer</h3>
            <p>
              Saya adalah seorang Junior Network Administrator dengan sertifikasi Digital Talent Scholarship 
              dan AWS Academy Graduate - Cloud Foundations. Memiliki passion dalam pengembangan aplikasi 
              web dan mobile yang scalable dan user-friendly dengan fokus pada cloud infrastructure.
            </p>
            <p>
              Berpengalaman dalam mengembangkan aplikasi full-stack menggunakan teknologi modern seperti 
              React, Flutter, dan Node.js. Saya telah berhasil menyelesaikan beberapa project seperti 
              Aturin - Scheduler App yang membantu pengguna mengatur tugas dan produktivitas harian. 
              Selalu antusias untuk belajar teknologi baru dan berkontribusi dalam project yang impactful.
            </p>
            <motion.div 
              className="about-highlights"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.2 }}
            >
              <motion.div 
                className="highlight-item"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <h4>🎯 Spesialisasi</h4>
                <p>Cross-platform Development & Cloud Computing</p>
              </motion.div>
              <motion.div 
                className="highlight-item"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <h4>💡 Certifications</h4>
                <p>AWS Academy, Digital Talent Scholarship</p>
              </motion.div>
              <motion.div 
                className="highlight-item"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <h4>🚀 Tech Stack</h4>
                <p>React, Flutter, Node.js, AWS Cloud</p>
              </motion.div>
            </motion.div>
          </motion.div>
          </RevealOnScroll>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" className="skills-section">
        <RevealOnScroll direction="up">
          <SectionTitle icon={<Award />} title="Skills & Tech Stack" />
        </RevealOnScroll>
        <div className="skills-grid">
          <RevealOnScroll direction="left" delay={0.1}>
            <SkillCategory 
              title="Frontend" 
              skills={[
                { name: 'React', icon: <FaReact />, level: 90 },
                { name: 'JavaScript', icon: <SiJavascript />, level: 85 },
                { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 88 },
              ]}
            />
          </RevealOnScroll>
          <RevealOnScroll direction="right" delay={0.2}>
            <SkillCategory 
              title="Mobile" 
              skills={[
                { name: 'Flutter', icon: <SiFlutter />, level: 85 },
                { name: 'Dart', icon: <SiDart />, level: 83 },
              ]}
            />
          </RevealOnScroll>
          <RevealOnScroll direction="right" delay={0.3}>
            <SkillCategory 
              title="Tools & Cloud Services" 
              skills={[
                { name: 'Git', icon: <FaGitAlt />, level: 85 },
                { name: 'Figma', icon: <SiFigma />, level: 80 },
                { name: 'Postman', icon: <SiPostman />, level: 82 },
                { name: 'AWS Cloud', icon: <SiAmazon />, level: 75 },
              ]}
            />
          </RevealOnScroll>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <RevealOnScroll direction="up">
          <SectionTitle icon={<Briefcase />} title="Featured Projects" />
        </RevealOnScroll>
        <motion.div 
          className="projects-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
        >
          <ProjectCard
            title="Aturin - Scheduler & Productivity App"
            description="Scheduler App yang membantu mengelola tugas, menata jadwal, dan meningkatkan produktivitas harian. Dilengkapi fitur rekomendasi pintar, ringkasan produktivitas, pengingat cerdas, dan widget praktis."
            image="/playstore.png"
            tech={['Flutter', 'React', 'Node.js', 'Firebase']}
            demo="https://aturin-app.com"
            github="https://github.com/pens-pbl/2025-aturin-mobile"
            playStore="https://play.google.com/store/apps/details?id=com.AturinJaya.pdbl&pcampaignid=web_share"
          />
          <ProjectCard
            title="Aturin Web - Productivity Dashboard"
            description="Web dashboard untuk Aturin yang menyediakan tampilan ringkasan produktivitas, manajemen tugas dan aktivitas, analytics harian, dan sistem rekomendasi pintar untuk memaksimalkan efisiensi waktu."
            image="/web.png"
            tech={['React', 'TypeScript', 'Tailwind CSS', 'REST API']}
            demo="https://aturin-app.com"
            github="https://github.com/pens-pbl/2025-aturin-frontend"
          />
          <ProjectCard
            title="Portfolio Website"
            description="Personal portfolio website dengan modern design, smooth animations, dan responsive layout menggunakan React dan Framer Motion."
            image="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop"
            tech={['React', 'Framer Motion', 'Vite', 'CSS3']}
            demo="#"
            github="https://github.com/RakhaMaulana26"
          />
        </motion.div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" className="experience-section">
        <RevealOnScroll direction="up">
          <SectionTitle icon={<Briefcase />} title="Experience & Journey" />
        </RevealOnScroll>
        <div className="timeline">
          <TimelineItem
            year="2025"
            title="Junior Network Administrator"
            company="Vocational School Graduate Academy"
            description="Mengelola dan memaintain network infrastructure, troubleshooting network issues, dan implementasi security protocols. Bersertifikat Digital Talent Scholarship."
            achievement="Digital Talent Scholarship Certified"
          />
          <TimelineItem
            year="Jun 2025"
            title="Mindset Digital (Micro Skill)"
            company="Digital Talent Scholarship"
            description="Menyelesaikan program pelatihan Digital Talent Scholarship dengan fokus pada digital mindset dan soft skills untuk profesional IT."
          />
          <TimelineItem
            year="Apr 2025"
            title="AWS Academy Graduate - Cloud Foundations"
            company="Amazon Web Services (AWS)"
            description="Lulus dari AWS Academy dengan pemahaman mendalam tentang AWS Architecture, AWS Cloud, AWS Core Services, AWS Support, dan AWS Pricing."
            achievement="AWS Academy Certified"
          />
          <TimelineItem
            year="2024 - 2025"
            title="Cross-platform Developer"
            company="Aturin Project Team"
            description="Mengembangkan Aturin - Scheduler App yang membantu pengguna mengatur tugas dan produktivitas harian. Menggunakan Flutter untuk mobile dan React untuk web dashboard dengan fitur rekomendasi pintar dan analytics."
            achievement="Successfully Launched on Play Store"
          />
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services">
        <RevealOnScroll direction="up">
          <SectionTitle icon={<Code2 />} title="Services" />
        </RevealOnScroll>
        <motion.div 
          className="services-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          <ServiceCard
            icon={<FaReact />}
            title="Web Development"
            description="Membuat website modern dan responsive dengan React, Vue, atau vanilla JavaScript."
            features={['Single Page Apps', 'E-Commerce', 'Landing Pages', 'Web Apps']}
          />
          <ServiceCard
            icon={<SiFlutter />}
            title="Mobile App Development"
            description="Mengembangkan aplikasi mobile cross-platform dengan Flutter untuk iOS dan Android."
            features={['Native Performance', 'Custom UI', 'API Integration', 'Firebase']}
          />
          <ServiceCard
            icon={<SiFigma />}
            title="UI/UX Design"
            description="Mendesain interface yang user-friendly dan menarik dengan Figma."
            features={['Wireframing', 'Prototyping', 'Design System', 'Responsive']}
          />
          <ServiceCard
            icon={<FaNodeJs />}
            title="API Development"
            description="Membangun RESTful API dan backend services dengan Node.js dan Express."
            features={['REST API', 'Database Design', 'Authentication', 'Documentation']}
          />
        </motion.div>
      </Section>

      {/* Blog Section */}
      <Section id="blog">
        <RevealOnScroll direction="up">
          <SectionTitle icon={<FileText />} title="Latest Articles" />
        </RevealOnScroll>
        <motion.div 
          className="blog-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
        >
          <BlogCard
            title="Getting Started with React Hooks"
            excerpt="Learn how to use React Hooks effectively in your projects with practical examples and best practices."
            date="Nov 20, 2024"
            readTime="5 min read"
            image="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop"
          />
          <BlogCard
            title="Flutter State Management Guide"
            excerpt="Comprehensive guide to state management in Flutter, comparing different approaches and when to use them."
            date="Nov 15, 2024"
            readTime="8 min read"
            image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop"
          />
          <BlogCard
            title="Building Responsive Layouts"
            excerpt="Tips and tricks for creating responsive layouts that work seamlessly across all devices."
            date="Nov 10, 2024"
            readTime="6 min read"
            image="https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop"
          />
        </motion.div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="contact-section">
        <RevealOnScroll direction="up">
          <SectionTitle icon={<Send />} title="Get In Touch" />
        </RevealOnScroll>
        <div className="contact-content">
          <RevealOnScroll direction="left" delay={0.2}>
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Let's work together!</h3>
            <p>
              Saya terbuka untuk project baru, kolaborasi, atau sekadar ngobrol 
              tentang teknologi dan cloud computing. Jangan ragu untuk menghubungi saya!
            </p>
            <motion.div className="contact-methods">
              <motion.a 
                href="mailto:rakhamkp@gmail.com" 
                className="contact-method"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <FaEnvelope />
                <span>rakhamkp@gmail.com</span>
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/rakha-mkp/" 
                className="contact-method" 
                target="_blank" 
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <FaLinkedin />
                <span>LinkedIn - Rakha MKP</span>
              </motion.a>
              <motion.a 
                href="https://github.com/RakhaMaulana26" 
                className="contact-method" 
                target="_blank" 
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <FaGithub />
                <span>GitHub - RakhaMaulana26</span>
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.form
            ref={formRef}
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitStatus.message && (
              <div className={`form-status ${submitStatus.type}`}>
                {submitStatus.message}
              </div>
            )}
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
                disabled={isSubmitting}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              <Send size={18} />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
          </RevealOnScroll>
        </div>
      </Section>

      {/* Footer */}
      <motion.footer 
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          <div className="footer-section">
            <h3>Rakha Maulana</h3>
            <p>Junior Network Administrator & Cross-platform Developer. AWS Academy Graduate building scalable digital solutions.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="https://github.com/RakhaMaulana26" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/rakha-mkp/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com/rakha.mkp" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p>&copy; 2025 Rakha Maulana. All rights reserved.</p>
          <motion.a 
            href="#home" 
            className="footer-link"
            whileHover={{ scale: 1.1, color: "#10b981" }}
          >
            Back to top ↑
          </motion.a>
        </motion.div>
      </motion.footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          className="scroll-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp />
        </motion.button>
      )}
    </div>
  )
}

// Reusable Components
function Section({ children, id, className = '' }) {
  return (
    <motion.section 
      id={id} 
      className={`section ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        {children}
      </div>
    </motion.section>
  )
}

function SectionTitle({ icon, title }) {
  return (
    <motion.div
      className="section-title"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span className="icon">{icon}</span>
      <h2>{title}</h2>
    </motion.div>
  )
}

function SkillCategory({ title, skills }) {
  return (
    <motion.div
      className="skill-category"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <h3>{title}</h3>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            className="skill-item"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="skill-header">
              <motion.span 
                className="skill-icon"
                whileHover={{ scale: 1.3, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {skill.icon}
              </motion.span>
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <motion.div
                className="skill-progress"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

function ProjectCard({ title, description, image, tech, demo, github, playStore }) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -15,
        boxShadow: "0 20px 40px rgba(30, 64, 175, 0.2)"
      }}
      transition={{ duration: 0.4, type: "spring" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="project-image">
        <img src={image} alt={title} />
        <div className="project-overlay">
          {demo !== '#' && <a href={demo} className="btn btn-small" target="_blank" rel="noopener noreferrer">Live Demo</a>}
          {github !== '#' && <a href={github} className="btn btn-small" target="_blank" rel="noopener noreferrer">GitHub</a>}
          {playStore && <a href={playStore} className="btn btn-small" target="_blank" rel="noopener noreferrer">Play Store</a>}
        </div>
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tech">
          {tech.map((t, i) => (
            <span key={i} className="tech-tag">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function TimelineItem({ year, title, company, description, achievement }) {
  return (
    <motion.div
      className="timeline-item"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="timeline-marker" />
      <div className="timeline-content">
        <span className="timeline-year">{year}</span>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p>{description}</p>
        {achievement && (
          <div className="timeline-achievement">
            <Award size={16} />
            <span>{achievement}</span>
          </div>
        )}
      </div>
    </motion.div>
  )
}

function ServiceCard({ icon, title, description, features }) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div
      className="service-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
        boxShadow: "0 20px 40px rgba(102, 126, 234, 0.3)"
      }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div 
        className="service-icon"
        animate={{ 
          rotate: isHovered ? 360 : 0,
          scale: isHovered ? 1.2 : 1
        }}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.div>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="service-features">
        {features.map((feature, i) => (
          <motion.li 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            ✓ {feature}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

function TestimonialCard({ name, role, text, rating }) {
  return (
    <motion.div
      className="testimonial-card"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10, boxShadow: "0 15px 40px rgba(0,0,0,0.15)" }}
    >
      <div className="testimonial-rating">
        {[...Array(rating)].map((_, i) => (
          <motion.span 
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, type: "spring" }}
            whileHover={{ scale: 1.3, rotate: 360 }}
          >
            ⭐
          </motion.span>
        ))}
      </div>
      <p className="testimonial-text">"{text}"</p>
      <div className="testimonial-author">
        <h4>{name}</h4>
        <span>{role}</span>
      </div>
    </motion.div>
  )
}

function BlogCard({ title, excerpt, date, readTime, image }) {
  return (
    <motion.div
      className="blog-card"
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 15px 35px rgba(30, 64, 175, 0.15)"
      }}
      transition={{ duration: 0.4 }}
    >
      <div className="blog-image">
        <img src={image} alt={title} />
      </div>
      <div className="blog-content">
        <div className="blog-meta">
          <span>{date}</span>
          <span>•</span>
          <span>{readTime}</span>
        </div>
        <h3>{title}</h3>
        <p>{excerpt}</p>
        <a href="#" className="blog-link">Read More →</a>
      </div>
    </motion.div>
  )
}

export default App
