import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { CartProvider, useCart } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandHighlights from './components/BrandHighlights';
import About from './components/About';
import MenuSection from './components/MenuSection';
import Bestsellers from './components/Bestsellers';
import ExperienceSection from './components/ExperienceSection';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';

function FloatingCartBar() {
  const { totalItems, subtotal, openCart, isCartOpen } = useCart();

  if (totalItems === 0 || isCartOpen) return null;

  return (
    <div className="floating-cart-bar-wrap">
      <button
        type="button"
        className="floating-cart-bar"
        onClick={openCart}
        aria-label={`View shopping bag with ${totalItems} items, total ₹${subtotal}`}
      >
        <div className="floating-cart-left">
          <span className="floating-cart-badge">
            <ShoppingBag size={17} />
            <strong>{totalItems}</strong>
          </span>
          <span className="floating-cart-label">
            {totalItems === 1 ? '1 dish in your bag' : `${totalItems} dishes in your bag`}
          </span>
        </div>
        <div className="floating-cart-right">
          <strong className="floating-cart-total">₹{subtotal}</strong>
          <span className="floating-cart-cta">
            View Bag <ArrowRight size={15} />
          </span>
        </div>
      </button>
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <div className="site-wrapper">
        <Navbar />
        <main>
          <Hero />
          <BrandHighlights />
          <About />
          <MenuSection />
          <Bestsellers />
          <ExperienceSection />
          <Gallery />
          <Contact />
        </main>
        <Footer />
        <CartDrawer />
        <FloatingCartBar />
      </div>
    </CartProvider>
  );
}
