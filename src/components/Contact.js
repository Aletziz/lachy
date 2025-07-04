import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  const contactInfo = [
    {
      icon: "📍",
      title: "Ubicación",
      details: ["Calle 3ra entre A y Central", "Vigía", "Santa Clara"],
    },
    {
      icon: "📞",
      title: "Teléfono",
      details: ["+53 99999999", "+53 999999999"],
    },
    {
      icon: "📧",
      title: "Email",
      details: ["info@lachy.com", "reservas@lachy.com"],
    },
    {
      icon: "🕒",
      title: "Horarios",
      details: ["Lun - Vie: 8:00 AM - 8:00 PM", "Sáb - Dom: 9:00 AM - 6:00 PM"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="contact section-padding">
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Contáctanos</h2>
          <p className="section-subtitle">
            ¿Tienes alguna pregunta? Contáctanos para obtener más información
            sobre nuestros servicios y productos. Estamos aquí para ayudarte.
          </p>
        </motion.div>

        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="contact-info" variants={itemVariants}>
            <h3>Información de Contacto</h3>
            <div className="info-grid">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="info-item"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-content">
                    <h4>{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx}>{detail}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
