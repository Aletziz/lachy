import React from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <motion.div 
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loading-content">
        <motion.div
          className="logo-container"
          initial={{ scale: 0.5, opacity: 0, rotateY: 180 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Logo SVG de Barbería Animado */}
          <motion.div 
            className="barbershop-logo"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="120" height="120" className="logo-svg">
              {/* Background circle */}
              <motion.circle 
                cx="16" cy="16" r="15" 
                fill="var(--barbershop-navy)" 
                stroke="var(--barbershop-charcoal)" 
                strokeWidth="2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
              
              {/* Barber pole stripes */}
              <defs>
                <pattern id="stripes" patternUnits="userSpaceOnUse" width="4" height="4" patternTransform="rotate(45)">
                  <rect width="2" height="4" fill="var(--barbershop-red)"/>
                  <rect x="2" width="2" height="4" fill="var(--barbershop-white)"/>
                </pattern>
              </defs>
              
              {/* Barber pole animado */}
              <motion.rect 
                x="14" y="8" width="4" height="16" 
                fill="url(#stripes)" rx="2"
                initial={{ scaleY: 0, originY: "center" }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              />
              
              {/* Pole caps */}
              <motion.ellipse 
                cx="16" cy="8" rx="3" ry="1.5" 
                fill="var(--barbershop-steel)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.0, duration: 0.4 }}
              />
              <motion.ellipse 
                cx="16" cy="24" rx="3" ry="1.5" 
                fill="var(--barbershop-steel)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.0, duration: 0.4 }}
              />
              
              {/* Scissors animadas */}
              <motion.g 
                transform="translate(8,12) scale(0.8)"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
              >
                <path d="M2,2 L6,6 L4,8 L0,4 Z" fill="var(--barbershop-silver)"/>
                <path d="M8,2 L4,6 L6,8 L10,4 Z" fill="var(--barbershop-silver)"/>
                <circle cx="5" cy="6" r="1" fill="var(--barbershop-slate)"/>
              </motion.g>
              
              {/* Comb animado */}
              <motion.g 
                transform="translate(20,10) scale(0.6)"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.6, ease: "easeOut" }}
              >
                <rect x="0" y="0" width="8" height="2" fill="var(--barbershop-charcoal)"/>
                <rect x="1" y="2" width="0.8" height="6" fill="var(--barbershop-charcoal)"/>
                <rect x="2.2" y="2" width="0.8" height="6" fill="var(--barbershop-charcoal)"/>
                <rect x="3.4" y="2" width="0.8" height="6" fill="var(--barbershop-charcoal)"/>
                <rect x="4.6" y="2" width="0.8" height="6" fill="var(--barbershop-charcoal)"/>
                <rect x="5.8" y="2" width="0.8" height="6" fill="var(--barbershop-charcoal)"/>
                <rect x="7" y="2" width="0.8" height="6" fill="var(--barbershop-charcoal)"/>
              </motion.g>
            </svg>
          </motion.div>
          
          <motion.h1 
            className="loading-logo"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
          >
            LACHY
          </motion.h1>
          <motion.p 
            className="loading-subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            Barbería & MYPIME
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="loading-spinner"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.0, duration: 0.6, ease: "easeOut" }}
        >
          <div className="barbershop-spinner">
            <div className="spinner-pole"></div>
            <div className="spinner-stripes"></div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;