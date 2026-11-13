
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import perfumeImage from "../../assets/reference-perfume.png";
import incenseImage from "../../assets/turaren-wuta.jpg";
import "./hero.css";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="km-hero">
      <div className="km-hero-glow" aria-hidden="true" />
      <div className="km-hero-grain" aria-hidden="true" />

      <div className="km-hero-inner">
        {/* Left: Main branding */}
        <motion.div
          className="km-hero-content"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.span
            variants={fadeUp}
            className="km-hero-eyebrow"
          >
            PREMIUM FRAGRANCES
          </motion.span>

          <motion.h1 variants={fadeUp}>
            Kamshi
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="km-hero-owner"
          >
            by Ameenatu_Yar auta
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="km-hero-location"
          >
            <span />
            KADUNA
            <span />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="km-hero-tagline"
          >
            Elegant Scents for
            <br />
            Every Occasion
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="km-hero-actions"
          >
            <Link to="/shop?category=perfumes" className="km-hero-btn">
              Shop Perfumes
              <ArrowRight size={18} />
            </Link>

            <Link to="/about" className="km-hero-discover">
              <span className="km-play-circle">
                <Play size={15} fill="currentColor" />
              </span>
              Discover Kamshi
            </Link>
          </motion.div>
        </motion.div>

        {/* Center: 3D-style perfume product */}
        <motion.div
          className="km-hero-perfume"
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <div className="km-product-aura" />

          <motion.div
            className="km-perfume-image-wrap"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src={perfumeImage}
              alt="Kamshi luxury amber perfume"
              className="km-perfume-image"
            />
          </motion.div>

          <div className="km-product-shadow" />
        </motion.div>

        {/* Right: Turaren Wuta */}
        <motion.div
          className="km-hero-incense"
          initial={{ opacity: 0, x: 45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
        >
          <div className="km-incense-heading">
            <span className="km-new-label">
              <Sparkles size={14} />
              TRADITIONAL LUXURY
            </span>

            <h2>Turaren Wuta</h2>

            <p>
              The timeless beauty of traditional
              incense. Rich aromas, unforgettable
              moments.
            </p>

            <Link
              to="/shop?category=turaren-wuta"
              className="km-hero-btn km-incense-btn"
            >
              Shop Turaren Wuta
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="km-incense-product">
            <div className="km-smoke" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>

            <motion.img
              src={incenseImage}
              alt="Kamshi Turaren Wuta traditional incense collection"
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </div>

      <div className="km-hero-bottom-line" />
    </section>
  );
}
