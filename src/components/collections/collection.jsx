
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import perfumeImage from "../../assets/collections/perfumes.png";
import turarenImage from "../../assets/collections/turaren-wuta.png";

import "./collection.css";

const collections = [
  {
    id: 1,
    number: "01",
    title: "Luxury Perfumes",
    subtitle: "THE ART OF FINE FRAGRANCE",
    description:
      "Discover captivating scents that express elegance, confidence and individuality.",
    image: perfumeImage,
    category: "perfumes",
    alt: "Luxury amber perfume bottle",
  },
  {
    id: 2,
    number: "02",
    title: "Turaren Wuta",
    subtitle: "THE BEAUTY OF TRADITION",
    description:
      "Experience the warmth of traditional incense, crafted for beautiful and memorable spaces.",
    image: turarenImage,
    category: "turaren-wuta",
    alt: "Traditional Turaren Wuta incense collection",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Collections() {
  return (
    <section
      className="kamshi-collections"
      id="collections"
      aria-labelledby="kamshi-collections-title"
    >
      <div className="kamshi-collections-container">

        {/* Section heading */}
        <motion.div
          className="kamshi-collections-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="kamshi-section-eyebrow">
            DISCOVER KAMSHI
          </span>

          <h2 id="kamshi-collections-title">
            Our <em>Collections</em>
          </h2>

          <div className="kamshi-heading-divider">
            <span />
            <span className="kamshi-divider-diamond" />
            <span />
          </div>

          <p>
            A celebration of luxurious fragrances and
            timeless aromatic traditions.
          </p>
        </motion.div>

        {/* Collection cards */}
        <div className="kamshi-collections-grid">
          {collections.map((collection) => (
            <motion.article
              key={collection.id}
              className="kamshi-collection-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ y: -7 }}
            >
              <div className="kamshi-collection-image">
                <img
                  src={collection.image}
                  alt={collection.alt}
                  loading="lazy"
                />
              </div>

              <div className="kamshi-collection-overlay" />

              <span className="kamshi-collection-number">
                {collection.number} / KAMSHI
              </span>

              <div className="kamshi-collection-content">
                <span className="kamshi-collection-subtitle">
                  {collection.subtitle}
                </span>

                <h3>{collection.title}</h3>

                <p>{collection.description}</p>

                <Link
                  to={`/shop?category=${collection.category}`}
                  className="kamshi-collection-link"
                  aria-label={`Explore ${collection.title}`}
                >
                  <span>Explore Collection</span>

                  <span className="kamshi-collection-arrow">
                    <ArrowUpRight size={20} />
                  </span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="kamshi-collections-bottom">
          <span>SCENTS THAT TELL A STORY</span>
          <span className="kamshi-bottom-dot" />
          <span>MADE FOR BEAUTIFUL MOMENTS</span>
        </div>

      </div>
    </section>
  );
}
