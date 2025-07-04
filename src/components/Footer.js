import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    servicios: [
      { name: "Corte Clásico", action: () => scrollToSection("barbershop") },
      { name: "Corte Moderno", action: () => scrollToSection("barbershop") },
      { name: "Arreglo de Barba", action: () => scrollToSection("barbershop") },
      { name: "Afeitado Clásico", action: () => scrollToSection("barbershop") },
    ],
    productos: [
      { name: "Carnes y Pollo", action: () => scrollToSection("food") },
      { name: "Bebidas en Polvo", action: () => scrollToSection("food") },
      { name: "Productos Básicos", action: () => scrollToSection("food") },
      { name: "Ofertas Especiales", action: () => scrollToSection("food") },
    ],
    empresa: [
      { name: "Sobre Nosotros", action: () => scrollToSection("home") },
      { name: "Nuestro Equipo", action: () => scrollToSection("home") },
      { name: "Testimonios", action: () => scrollToSection("home") },
      { name: "Contacto", action: () => scrollToSection("contact") },
    ],
  };

  const socialLinks = [{ name: "WhatsApp", icon: "💬", url: "#" }];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-main">
            <motion.div
              className="footer-brand"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="footer-logo"
                whileHover={{ scale: 1.05 }}
                onClick={scrollToTop}
              >
                LACHY
              </motion.h3>
              <p className="footer-description">
                Donde el estilo se encuentra con la calidad. Ofrecemos servicios
                de barbería profesional y los mejores productos alimentarios en
                un ambiente acogedor y familiar.
              </p>
              <div className="footer-contact">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>Calle 3ra entre A y Central #999</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span>+53 99999999</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>info@lachy.com</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="footer-links"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="footer-column">
                <h4>Servicios de Barbería</h4>
                <ul>
                  {footerLinks.servicios.map((link, index) => (
                    <li key={index}>
                      <motion.button
                        onClick={link.action}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {link.name}
                      </motion.button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-column">
                <h4>MYPIME - Productos</h4>
                <ul>
                  {footerLinks.productos.map((link, index) => (
                    <li key={index}>
                      <motion.button
                        onClick={link.action}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {link.name}
                      </motion.button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-column">
                <h4>Empresa</h4>
                <ul>
                  {footerLinks.empresa.map((link, index) => (
                    <li key={index}>
                      <motion.button
                        onClick={link.action}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {link.name}
                      </motion.button>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="footer-social"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4>Síguenos</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className="social-link"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.name}
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-name">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="footer-bottom"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="footer-bottom-content">
              <p className="copyright">
                © {currentYear} LACHY. Todos los derechos reservados.
              </p>
              <div className="footer-bottom-links">
                <button>Política de Privacidad</button>
                <button>Términos de Servicio</button>
                <button>Cookies</button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        className="back-to-top"
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}
        viewport={{ once: true }}
      >
        ↑
      </motion.button>
    </footer>
  );
};

export default Footer;
