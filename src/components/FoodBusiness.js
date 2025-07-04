import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FoodBusiness.css';

const FoodBusiness = () => {
  const [activeCategory, setActiveCategory] = useState('carnes');

  const categories = [
    { id: 'carnes', name: 'Carnes y Pollo', icon: '🍗' },
    { id: 'bebidas', name: 'Bebidas en Polvo', icon: '🥤' },
    { id: 'basicos', name: 'Productos Básicos', icon: '🌾' },
    { id: 'especiales', name: 'Ofertas Especiales', icon: '⭐' }
  ];

  const menuItems = {
    carnes: [
      {
        id: 1,
        name: 'Caja de Pollo Congelado',
        description: 'Caja de 5kg de pollo troceado, ideal para preparaciones familiares',
        price: '$25',
        image: '📦',
        popular: true
      },
      {
        id: 2,
        name: 'Carne Molida Premium',
        description: 'Carne molida fresca de res, empacada al vacío, 1kg',
        price: '$18',
        image: '🥩'
      },
      {
        id: 3,
        name: 'Salchichas Jumbo',
        description: 'Paquete de salchichas premium, 12 unidades, listas para cocinar',
        price: '$12',
        image: '🌭'
      },
      {
        id: 4,
        name: 'Costillas de Cerdo',
        description: 'Costillas frescas de cerdo, corte especial para asados, 2kg',
        price: '$22',
        image: '🥓'
      }
    ],
    bebidas: [
      {
        id: 5,
        name: 'Refresco en Polvo Tang',
        description: 'Sobre de refresco en polvo sabor naranja, rinde 2 litros',
        price: '$2',
        image: '🧃'
      },
      {
        id: 6,
        name: 'Café Instantáneo',
        description: 'Frasco de café soluble premium, 200g, fácil preparación',
        price: '$8',
        image: '☕',
        popular: true
      },
      {
        id: 7,
        name: 'Chocolate en Polvo',
        description: 'Chocolate en polvo para preparar bebidas calientes, 500g',
        price: '$6',
        image: '🍫'
      }
    ],
    basicos: [
      {
        id: 8,
        name: 'Azúcar Refinada',
        description: 'Bolsa de azúcar blanca refinada, 2kg, ideal para repostería',
        price: '$4',
        image: '🍯',
        popular: true
      },
      {
        id: 9,
        name: 'Arroz Premium',
        description: 'Arroz de grano largo, bolsa de 5kg, calidad superior',
        price: '$12',
        image: '🌾'
      },
      {
        id: 10,
        name: 'Aceite de Cocina',
        description: 'Aceite vegetal para cocinar, botella de 1 litro',
        price: '$5',
        image: '🫒'
      }
    ],
    especiales: [
      {
        id: 11,
        name: 'Combo Básico Familiar',
        description: 'Arroz 5kg + Azúcar 2kg + Aceite 1L + Refresco en polvo',
        price: '$20',
        image: '📦',
        popular: true
      },
      {
        id: 12,
        name: 'Pack Proteínas',
        description: 'Caja de pollo + Carne molida + Salchichas - Ahorra $8',
        price: '$50',
        image: '🥩'
      }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="food-business section-padding">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">MYPIME - Productos Alimentarios</h2>
          <p className="section-subtitle">
            Todo lo que necesitas para tu cocina y despensa. Productos frescos y de calidad 
            para que prepares las mejores comidas en casa.
          </p>
        </motion.div>

        <motion.div 
          className="menu-categories"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            className="menu-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {menuItems[activeCategory].map((item) => (
              <motion.div
                key={item.id}
                className="menu-item"
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                {item.popular && (
                  <div className="popular-badge">Popular</div>
                )}
                <div className="item-image">{item.image}</div>
                <div className="item-content">
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-description">{item.description}</p>
                  <div className="item-footer">
                    <span className="item-price">{item.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div 
          className="food-features"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="features-row">
            <div className="food-feature">
              <div className="feature-icon">🌱</div>
              <h4>Productos Frescos</h4>
              <p>Seleccionamos los mejores productos del mercado</p>
            </div>
            <div className="food-feature">
              <div className="feature-icon">📦</div>
              <h4>Empaque Seguro</h4>
              <p>Productos bien empacados y conservados</p>
            </div>
            <div className="food-feature">
              <div className="feature-icon">🚚</div>
              <h4>Entrega Rápida</h4>
              <p>Servicio a domicilio en menos de 30 minutos</p>
            </div>
            <div className="food-feature">
              <div className="feature-icon">💰</div>
              <h4>Precios Justos</h4>
              <p>Los mejores precios del mercado</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FoodBusiness;