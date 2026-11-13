
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  MapPin,
  Heart,
} from "lucide-react";

import perfumeImage from "../../assets/products/amber-perfume.webp";

import "./about.css";

export default function About() {
  return (
    <section
      className="kamshi-about"
      id="about"
      aria-labelledby="kamshi-about-title"
    >
      <div className="kamshi-about-container">

        {/* Left: Brand photography */}
        <motion.div
          className="kamshi-about-visual"
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="kamshi-about-image-frame">
            <img
              src={perfumeImage}
              alt="Kamshi luxury fragrance presentation"
              loading="lazy"
            />

            <div className="kamshi-about-image-shade" />

            <div className="kamshi-about-image-label">
              <Sparkles size={15} />
              <span>THE ART OF FRAGRANCE</span>
            </div>
          </div>

          <motion.div
            className="kamshi-about-floating-card"
            animate={{ y: [0, -9, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span>Kamshi</span>
            <small>BY AMEENATU_YAR AUTA</small>
            <div className="kamshi-about-card-line" />
            <p>Beauty in Every Scent</p>
          </motion.div>

          <div className="kamshi-about-glow" />
        </motion.div>

        {/* Right: Brand story */}
        <motion.div
          className="kamshi-about-content"
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="kamshi-about-eyebrow">
            <span className="kamshi-about-eyebrow-line" />
            THE STORY BEHIND KAMSHI
          </span>

          <h2 id="kamshi-about-title">
            More Than a Scent.
            <br />
            <em>A Beautiful Experience.</em>
          </h2>

          <div className="kamshi-about-divider">
            <span />
            <Sparkles size={14} />
          </div>

          <p className="kamshi-about-lead">
            Welcome to Kamshi by Ameenatu_Yar auta,
            a fragrance brand based in Kaduna, Nigeria,
            where elegance meets the beauty of
            traditional aromas.
          </p>

          <p className="kamshi-about-description">
            From captivating perfumes to the rich,
            comforting aroma of Turaren Wuta, Kamshi
            brings together modern fragrance experiences
            and the timeless beauty of traditional incense.
          </p>

          <p className="kamshi-about-description">
            We believe fragrance is more than something
            you wear or enjoy in your home. It is part
            of how you express yourself, welcome others,
            and make everyday moments feel special.
          </p>

          {/* Brand highlights */}
          <div className="kamshi-about-highlights">
            <div className="kamshi-about-highlight">
              <div className="kamshi-about-highlight-icon">
                <Heart size={21} strokeWidth={1.4} />
              </div>

              <div>
                <h3>Inspired by Beauty</h3>
                <p>Fragrances for memorable moments</p>
              </div>
            </div>

            <div className="kamshi-about-highlight">
              <div className="kamshi-about-highlight-icon">
                <MapPin size={21} strokeWidth={1.4} />
              </div>

              <div>
                <h3>Proudly Based in Kaduna</h3>
                <p>Nigeria</p>
              </div>
            </div>
          </div>

          <a
            href="#products"
            className="kamshi-about-button"
          >
            Explore Our Products
            <ArrowUpRight size={19} />
          </a>

          <div className="kamshi-about-signature">
            <span>Kamshi</span>
            <small>BY AMEENATU_YAR AUTA</small>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
