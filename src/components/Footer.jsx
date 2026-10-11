import React from 'react';
import { Instagram, ArrowUp, UtensilsCrossed } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { MENU_CATEGORIES } from '../data/menuItems';

export default function Footer() {
  const { navigateToCategory } = useCart();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryLink = (e, categoryId) => {
    e.preventDefault();
    navigateToCategory(categoryId);
  };

  return (
    <footer className="site-footer">
      {/* Top Decorative Japanese Ribbon */}
      <div className="footer-ribbon" aria-hidden="true">
        <div className="container footer-ribbon-inner">
          <span>SLURP • BITE • REPEAT</span>
          <span className="ribbon-dot">•</span>
          <span>イロキ カフェ</span>
          <span className="ribbon-dot">•</span>
          <span>RAMEN • SUSHI • FRIED CHICKEN • STREET BITES</span>
          <span className="ribbon-dot">•</span>
          <span>いただきます</span>
        </div>
      </div>

      <div className="container footer-main">
        <div className="footer-grid">
          {/* Column 1: Brand Wordmark, Tagline & Japanese Crest */}
          <div className="footer-brand-col">
            <a href="#home" className="footer-logo">
              <span className="brand-emblem" aria-hidden="true">
                <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="44" height="44" rx="12" fill="#FF6B2C" />
                  <path
                    d="M10 24C10 30.6274 15.3726 36 22 36C28.6274 36 34 30.6274 34 24H10Z"
                    fill="#FFF8EE"
                  />
                  <rect x="17" y="35" width="10" height="3" rx="1.5" fill="#FFF8EE" />
                  <path
                    d="M13 15L32 10.5M13 19L32 16.5"
                    stroke="#FFF8EE"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx="19" cy="22" r="2.8" fill="#FFE2D2" />
                </svg>
              </span>
              <div>
                <span className="footer-wordmark">
                  IROKI <span>CAFE</span>
                </span>
                <span className="footer-jp-sub" aria-hidden="true">
                  イロキ カフェ • 本格日本屋台
                </span>
              </div>
            </a>

            <p className="footer-tagline">
              Japanese street food culture meets modern urban cafe. Soul-warming ramen bowls,
              freshly rolled sushi, and crispy golden karaage crafted to share.
            </p>

            <div className="footer-jp-seal" aria-hidden="true">
              <span className="seal-kanji">美味</span>
              <span className="seal-text">MADE FOR FOOD LOVERS • 美味しい</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation Links */}
          <div className="footer-links-col">
            <h3 className="footer-col-heading">Quick Links</h3>
            <ul className="footer-link-list">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#story">Our Story</a>
              </li>
              <li>
                <a href="#menu">Full Menu</a>
              </li>
              <li>
                <a href="#bestsellers">Best Sellers</a>
              </li>
              <li>
                <a href="#contact">Contact &amp; Location</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Menu Category Links */}
          <div className="footer-links-col">
            <h3 className="footer-col-heading">Explore Menu</h3>
            <ul className="footer-link-list">
              {MENU_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <a href="#menu" onClick={(e) => handleCategoryLink(e, cat.id)}>
                    <span>{cat.label}</span>
                    <span className="footer-cat-jp" aria-hidden="true">
                      {cat.jp}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social Placeholders & Quick Action */}
          <div className="footer-social-col">
            <h3 className="footer-col-heading">Connect With Us</h3>
            <p className="footer-social-desc">
              Replace the social placeholders below with your official Iroki Cafe profiles.
            </p>

            <div className="footer-social-pills">
              <a
                href="#contact"
                className="social-placeholder-pill"
                aria-label="Instagram profile placeholder"
              >
                <Instagram size={16} />
                <span>Instagram Placeholder</span>
              </a>
              <a
                href="#contact"
                className="social-placeholder-pill"
                aria-label="Food delivery or social placeholder"
              >
                <UtensilsCrossed size={16} />
                <span>Order Partner Placeholder</span>
              </a>
            </div>

            <button
              type="button"
              className="back-to-top-btn"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
            >
              <ArrowUp size={16} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="footer-bottom">
          <p className="footer-copyright">© 2026 Iroki Cafe. All rights reserved.</p>
          <p className="footer-jp-signoff" aria-hidden="true">
            ごちそうさまでした • GOCHISOUSAMA DESHITA
          </p>
        </div>
      </div>
    </footer>
  );
}
