
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Search,
  Mail,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import "./header.css";

const shopCategories = [
  {
    label: "All Products",
    path: "/shop",
    description: "Explore the Kamshi collection",
  },
  {
    label: "Luxury Perfumes",
    path: "/shop?category=perfumes",
    description: "Elegant fragrances for every occasion",
  },
  {
    label: "Turaren Wuta",
    path: "/shop?category=turaren-wuta",
    description: "Traditional incense and aromatic blends",
  },
];

const mainLinks = [
  { label: "Collections", path: "/collections" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

function BrandLogo() {
  return (
    <Link to="/" className="kh-brand" aria-label="Kamshi homepage">
      <svg
        viewBox="0 0 64 54"
        className="kh-brand-symbol"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M32 45V10M32 29L17 13M32 29L47 13M32 40L9 27M32 40L55 27"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M32 7C25 15 25 21 32 25C39 21 39 15 32 7Z
             M14 11C14 22 20 28 29 30
             M50 11C50 22 44 28 35 30
             M7 26C10 39 20 44 29 44
             M57 26C54 39 44 44 35 44"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>

      <span className="kh-brand-name">Kamshi</span>
      <span className="kh-brand-owner">
        by Ameenatu_Yar auta
      </span>
      <span className="kh-brand-city">KADUNA</span>
    </Link>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  function closeMenus() {
    setMobileOpen(false);
    setShopOpen(false);
  }

  function handleSearch(e) {
    e.preventDefault();

    const term = query.trim();
    if (!term) return;

    navigate(`/shop?q=${encodeURIComponent(term)}`);
    setSearchOpen(false);
    setQuery("");
    closeMenus();
  }

  return (
    <header className="kh-header">
      <div className="kh-container">
        {/* Mobile menu */}
        <button
          type="button"
          className="kh-icon kh-hamburger"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        {/* Brand */}
        <BrandLogo />

        {/* Desktop navigation */}
        <nav className="kh-navigation" aria-label="Main navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `kh-nav-link ${isActive ? "kh-active" : ""}`
            }
          >
            Home
          </NavLink>

          <div className="kh-dropdown">
            <button
              type="button"
              className={`kh-nav-link kh-shop-trigger ${
                shopOpen ? "kh-active" : ""
              }`}
              onClick={() => setShopOpen(!shopOpen)}
              aria-expanded={shopOpen}
              aria-haspopup="true"
            >
              Shop
              <ChevronDown
                size={14}
                className={shopOpen ? "kh-chevron-open" : ""}
              />
            </button>

            {shopOpen && (
              <div className="kh-dropdown-panel">
                <div className="kh-dropdown-heading">
                  <Sparkles size={15} />
                  EXPLORE KAMSHI
                </div>

                {shopCategories.map((category) => (
                  <Link
                    key={category.path}
                    to={category.path}
                    className="kh-dropdown-item"
                    onClick={closeMenus}
                  >
                    <span>
                      <strong>{category.label}</strong>
                      <small>{category.description}</small>
                    </span>
                    <ArrowRight size={16} />
                  </Link>
                ))}
              </div>
            )}
          </div>

          {mainLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `kh-nav-link ${isActive ? "kh-active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Search and Contact */}
        <div className="kh-actions">
          <button
            type="button"
            className="kh-icon"
            aria-label="Search products"
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen(!searchOpen)}
          >
            {searchOpen ? <X size={22} /> : <Search size={22} />}
          </button>

          <Link
            to="/contact"
            className="kh-icon kh-contact"
            aria-label="Contact Kamshi"
            title="Contact Kamshi"
          >
            <Mail size={23} strokeWidth={1.5} />
          </Link>
        </div>
      </div>

      {/* Search panel */}
      {searchOpen && (
        <form className="kh-search-panel" onSubmit={handleSearch}>
          <Search size={20} />

          <input
            autoFocus
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search perfumes, Turaren Wuta..."
            aria-label="Search Kamshi products"
          />

          <button type="submit">
            Search <ArrowRight size={16} />
          </button>
        </form>
      )}

      {/* Mobile navigation */}
      {mobileOpen && (
        <nav className="kh-mobile-nav" aria-label="Mobile navigation">
          <NavLink to="/" end onClick={closeMenus}>
            Home <ArrowRight size={17} />
          </NavLink>

          <div className="kh-mobile-section-label">
            SHOP BY CATEGORY
          </div>

          {shopCategories.map((category) => (
            <Link
              key={category.path}
              to={category.path}
              onClick={closeMenus}
            >
              {category.label}
              <ArrowRight size={17} />
            </Link>
          ))}

          <div className="kh-mobile-section-label">
            DISCOVER
          </div>

          {mainLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeMenus}
            >
              {item.label}
              <ArrowRight size={17} />
            </NavLink>
          ))}

          <div className="kh-mobile-footer">
            KAMSHI · KADUNA
            <span>Elegant Scents for Every Occasion</span>
          </div>
        </nav>
      )}
    </header>
  );
}
