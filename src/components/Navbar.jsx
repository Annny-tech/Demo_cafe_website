import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, UtensilsCrossed, ArrowUpRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const NAV_LINKS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'story', label: 'Our Story', href: '#story' },
  { id: 'menu', label: 'Menu', href: '#menu' },
  { id: 'bestsellers', label: 'Best Sellers', href: '#bestsellers' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { totalItems, subtotal, openCart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [cartBump, setCartBump] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const scrollPosition = window.scrollY + 180;
      const sectionIds = ['home', 'story', 'menu', 'bestsellers', 'contact'];

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (totalItems > 0) {
      setCartBump(true);
      const timer = setTimeout(() => setCartBump(false), 350);
      return () => clearTimeout(timer);
    }
  }, [totalItems]);

  const handleNavClick = (e, href, id) => {
    e.preventDefault();
    setActiveSection(id);
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-inner">
        {/* Left: Brand Wordmark + Japanese Crest */}
        <a
          href="#home"
          className="brand-logo"
          onClick={(e) => handleNavClick(e, '#home', 'home')}
          aria-label="Iroki Cafe Home"
        >
          <span className="brand-emblem" aria-hidden="true">
            <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="44" height="44" rx="12" fill="#FF6B2C" />
              {/* Stylized Ramen Bowl & Chopsticks */}
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
          <div className="brand-text-group">
            <span className="brand-wordmark">
              IROKI <span className="brand-wordmark-accent">CAFE</span>
            </span>
            <span className="brand-jp-sub" aria-hidden="true">
              イロキ カフェ • 東京屋台
            </span>
          </div>
        </a>

        {/* Center: Navigation Links */}
        <nav className="navbar-links" aria-label="Primary Navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`nav-link ${activeSection === link.id ? 'nav-link-active' : ''}`}
              onClick={(e) => handleNavClick(e, link.href, link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Cart Button & Explore Menu CTA */}
        <div className="navbar-actions">
          <button
            type="button"
            className={`cart-trigger-btn ${cartBump ? 'cart-bump' : ''}`}
            onClick={openCart}
            aria-label={`Open shopping bag with ${totalItems} items`}
          >
            <div className="cart-icon-wrap">
              <ShoppingBag size={20} strokeWidth={2.2} />
              <span className="cart-count-badge" aria-live="polite">
                {totalItems}
              </span>
            </div>
            {subtotal > 0 && <span className="cart-subtotal-pill">₹{subtotal}</span>}
          </button>

          <a
            href="#menu"
            className="btn btn-primary navbar-cta"
            onClick={(e) => handleNavClick(e, '#menu', 'menu')}
          >
            <UtensilsCrossed size={16} />
            <span>Explore Menu</span>
          </a>

          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'mobile-nav-open' : ''}`}>
        <div className="mobile-nav-content">
          <div className="mobile-nav-jp-banner" aria-hidden="true">
            <span>いらっしゃいませ • WELCOME TO IROKI CAFE</span>
          </div>
          <nav className="mobile-nav-list" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`mobile-nav-link ${
                  activeSection === link.id ? 'mobile-nav-link-active' : ''
                }`}
                onClick={(e) => handleNavClick(e, link.href, link.id)}
              >
                <span>{link.label}</span>
                <ArrowUpRight size={18} />
              </a>
            ))}
          </nav>
          <div className="mobile-nav-footer">
            <a
              href="#menu"
              className="btn btn-primary btn-full"
              onClick={(e) => handleNavClick(e, '#menu', 'menu')}
            >
              <UtensilsCrossed size={18} />
              <span>Explore Our Full Menu</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
