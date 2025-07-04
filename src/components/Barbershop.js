import React from 'react';
import { motion } from 'framer-motion';
import './Barbershop.css';

const Barbershop = () => {
  const services = [
    {
      id: 1,
      name: 'Corte Clásico',
      description: 'Corte tradicional con tijera y navaja, perfecto para un look elegante y atemporal.',
      price: '$25',
      duration: '45 min',
      icon: '✂️'
    },
    {
      id: 2,
      name: 'Corte Moderno',
      description: 'Estilos contemporáneos y tendencias actuales adaptados a tu personalidad.',
      price: '$30',
      duration: '50 min',
      icon: '💇‍♂️'
    },
    {
      id: 3,
      name: 'Barba & Bigote',
      description: 'Arreglo profesional de barba y bigote con productos premium.',
      price: '$20',
      duration: '30 min',
      icon: '🧔'
    },
    {
      id: 4,
      name: 'Afeitado Clásico',
      description: 'Afeitado tradicional con navaja, toallas calientes y productos de lujo.',
      price: '$35',
      duration: '40 min',
      icon: '🪒'
    },
    {
      id: 5,
      name: 'Paquete Completo',
      description: 'Corte + barba + afeitado + tratamiento facial. La experiencia completa.',
      price: '$60',
      duration: '90 min',
      icon: '⭐'
    },
    {
      id: 6,
      name: 'Tratamiento Capilar',
      description: 'Lavado, masaje y tratamiento nutritivo para mantener tu cabello saludable.',
      price: '$25',
      duration: '35 min',
      icon: '💆‍♂️'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="barbershop section-padding">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Servicios de Barbería</h2>
          <p className="section-subtitle">
            Experimenta el arte del cuidado masculino con nuestros servicios profesionales. 
            Cada corte es una obra maestra diseñada especialmente para ti.
          </p>
        </motion.div>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="service-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <div className="service-icon">{service.icon}</div>
              <div className="service-content">
                <h3 className="service-name">{service.name}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-details">
                  <div className="service-price">{service.price}</div>
                  <div className="service-duration">{service.duration}</div>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="barbershop-features"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="features-grid">
            <div className="feature">
              <div className="feature-number">10+</div>
              <div className="feature-text">Años de Experiencia</div>
            </div>
            <div className="feature">
              <div className="feature-number">500+</div>
              <div className="feature-text">Clientes Satisfechos</div>
            </div>
            <div className="feature">
              <div className="feature-number">100%</div>
              <div className="feature-text">Productos Premium</div>
            </div>
            <div className="feature">
              <div className="feature-number">24/7</div>
              <div className="feature-text">Atención al Cliente</div>
            </div>
          </div>
        </motion.div>

        {/* Galería de Fotos */}
        <motion.div
          className="barbershop-gallery"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Nuestra Galería</h3>
          <p>Algunos de nuestros mejores trabajos</p>
          <div className="gallery-grid">
            {/* Aquí puedes agregar las imágenes */}
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <span>📸</span>
                <p>Foto 1</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <span>📸</span>
                <p>Foto 2</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <span>📸</span>
                <p>Foto 3</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <span>📸</span>
                <p>Foto 4</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <span>📸</span>
                <p>Foto 5</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <span>📸</span>
                <p>Foto 6</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Barbershop;