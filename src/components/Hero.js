import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container">
          <motion.div className="hero-text" variants={itemVariants}>
            <motion.h1 
              className="hero-title"
              variants={itemVariants}
            >
              Bienvenido a <span className="highlight">LACHY</span>
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              variants={itemVariants}
            >
              Donde el estilo se encuentra con la calidad. Descubre nuestros servicios de barbería profesional y encuentra los mejores productos alimentarios.
            </motion.p>
            
            <motion.div 
              className="hero-buttons"
              variants={itemVariants}
            >
              <motion.button
                className="btn btn-primary"
                onClick={() => scrollToSection('barbershop')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Servicios de Barbería
              </motion.button>
              
              <motion.button
                className="btn btn-outline"
                onClick={() => scrollToSection('food')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Productos Alimentarios
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-features"
            variants={itemVariants}
          >
            <div className="feature-grid">
              <motion.div 
                className="feature-item"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="feature-icon">✂️</div>
                <h3>Barbería Profesional</h3>
                <p>Cortes modernos y clásicos con la mejor atención</p>
              </motion.div>
              
              <motion.div 
                className="feature-item"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="feature-icon">🍽️</div>
                <h3>Productos de Calidad</h3>
                <p>Los mejores ingredientes para tu cocina</p>
              </motion.div>
              
              <motion.div 
                className="feature-item"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="feature-icon">⭐</div>
                <h3>Calidad Premium</h3>
                <p>Excelencia en cada servicio que ofrecemos</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div 
          className="scroll-arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          onClick={() => scrollToSection('barbershop')}
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;