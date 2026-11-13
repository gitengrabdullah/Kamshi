
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import amberPerfume from "../../assets/products/amber-perfume.webp";
import floralPerfume from "../../assets/products/floral-perfume.jpg";
import oudPerfume from "../../assets/products/oud-perfume.jpg";
import royalTuraren from "../../assets/products/royal-turaren.jpg";
import classicTuraren from "../../assets/products/classic-turaren.jpg";
import premiumTuraren from "../../assets/products/premium-turaren.jpg";

import "./product.css";

// Kamshi WhatsApp business number
// International format without the + symbol
// const WHATSAPP_NUMBER = "2348064436029";

const WHATSAPP_NUMBER = "2348064436029";


// Product data
// Replace sample names, prices and descriptions
// with actual Kamshi inventory before publishing.
const products = [
  {
    id: 1,
    name: "Amber Essence",
    category: "perfumes",
    categoryLabel: "Luxury Perfume",
    description: "Warm amber, soft spice and woody notes.",
    price: 28500,
    image: amberPerfume,
    badge: "BEST SELLER",
  },
  {
    id: 2,
    name: "Golden Bloom",
    category: "perfumes",
    categoryLabel: "Luxury Perfume",
    description: "Delicate florals with a soft, elegant finish.",
    price: 32500,
    image: floralPerfume,
    badge: "SIGNATURE",
  },
  {
    id: 3,
    name: "Midnight Oud",
    category: "perfumes",
    categoryLabel: "Luxury Perfume",
    description: "Rich oud, sandalwood and deep woody notes.",
    price: 36000,
    image: oudPerfume,
    badge: "",
  },
  {
    id: 4,
    name: "Royal Turaren Wuta",
    category: "turaren-wuta",
    categoryLabel: "Traditional Incense",
    description: "A warm aromatic blend for beautiful spaces.",
    price: 12500,
    image: royalTuraren,
    badge: "POPULAR",
  },
  {
    id: 5,
    name: "Classic Turaren Wuta",
    category: "turaren-wuta",
    categoryLabel: "Traditional Incense",
    description: "Traditional incense with a rich, inviting aroma.",
    price: 8500,
    image: classicTuraren,
    badge: "",
  },
  {
    id: 6,
    name: "Premium Turaren Wuta",
    category: "turaren-wuta",
    categoryLabel: "Traditional Incense",
    description: "An indulgent incense blend for special moments.",
    price: 15000,
    image: premiumTuraren,
    badge: "PREMIUM",
  },
];

// Product filters
const filters = [
  { label: "All Products", value: "all" },
  { label: "Luxury Perfumes", value: "perfumes" },
  { label: "Turaren Wuta", value: "turaren-wuta" },
];

// Nigerian naira formatter
const formatPrice = (price) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(price);

// Generate a WhatsApp order link for each product
function generateWhatsAppLink(product) {
  const message = [
    "Hello Kamshi!",
    "",
    "I would like to order the following product:",
    "",
    `Product: ${product.name}`,
    `Category: ${product.categoryLabel}`,
    `Price: ${formatPrice(product.price)}`,
    "",
    "Please confirm availability, payment details,",
    "and delivery options.",
    "",
    "Thank you!",
  ].join("\n");

  return (
    `https://wa.me/${WHATSAPP_NUMBER}` +
    `?text=${encodeURIComponent(message)}`
  );
}

// Individual product 


function ProductCard({ product }) {
    
  const message = [
    "Hello Kamshi!",
    "",
    "I would like to order:",
    "",
    `Product: ${product.name}`,
    `Category: ${product.categoryLabel}`,
    `Price: ${formatPrice(product.price)}`,
    "",
    "Please confirm availability and delivery details.",
  ].join("\n");

  const whatsappUrl =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <motion.article
      className="kp-card"
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6 }}
    >
      <div className="kp-image-wrap">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
        />

        {product.badge && (
          <span className="kp-badge">
            {product.badge}
          </span>
        )}

        <span className="kp-image-corner">
          <Sparkles size={16} />
        </span>
      </div>

      <div className="kp-card-content">
        <span className="kp-category">
          {product.categoryLabel}
        </span>

        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <div className="kp-price-row">
          <strong>{formatPrice(product.price)}</strong>
          <span>NGN</span>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="kp-order-button"
        >
          <MessageCircle size={18} />
          <span>Order via WhatsApp</span>
          <ArrowUpRight size={17} />
        </a>
      </div>
    </motion.article>
  );
}

// Main products section
export default function Products() {

    // export default function Products() {
  console.log("KAMSHI PRODUCTS - NEW VERSION LOADED");

  const [activeFilter, setActiveFilter] = useState("all");
//   const [activeFilter, setActiveFilter] = useState("all");

  const visibleProducts =
    activeFilter === "all"
      ? products
      : products.filter(
          (product) => product.category === activeFilter
        );

  return (
    <section
      className="kamshi-products"
      id="products"
      aria-labelledby="kp-title"
    >

      <div className="kp-container">

        {/* Section heading */}
        <motion.div
          className="kp-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="kp-eyebrow">
            THE KAMSHI EDIT
          </span>

          <h2 id="kp-title">
            Our Signature <em>Products</em>
          </h2>

          <div className="kp-divider">
            <span />
            <Sparkles size={15} />
            <span />
          </div>

          <p>
            Discover our selection of beautiful perfumes
            and traditional Turaren Wuta.
          </p>
        </motion.div>

        {/* Category filters */}
        <div
          className="kp-filters"
          role="group"
          aria-label="Filter products"
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              className={`kp-filter ${
                activeFilter === filter.value
                  ? "kp-filter-active"
                  : ""
              }`}
              aria-pressed={
                activeFilter === filter.value
              }
              onClick={() =>
                setActiveFilter(filter.value)
              }
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Product cards */}
        <motion.div layout className="kp-grid">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </motion.div>

        {/* Bottom branding */}
        <div className="kp-footer-note">
          <span>HANDPICKED WITH CARE</span>
          <span className="kp-note-dot" />
          <span>KAMSHI · KADUNA</span>
        </div>

      </div>
    </section>
  );
}
