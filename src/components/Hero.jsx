import React from 'react';
import { ArrowRight, Flame, Sparkles, Compass } from 'lucide-react';
import { createFallbackFoodImage } from '../data/menuItems';

export default function Hero() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Decorative Background Japanese Watermark */}
      <div className="hero-bg-kanji" aria-hidden="true">
        いただきます
      </div>

      <div className="container hero-grid">
        {/* Left Column: Editorial Copy & CTAs */}
        <div className="hero-copy">
          <div className="hero-badge-row">
            <span className="hero-pill-badge">
              <Sparkles size={14} />
              <span>A TASTE OF JAPAN</span>
            </span>
            <span className="hero-jp-decoration" aria-hidden="true">
              いただきます • ITADAKIMASU
            </span>
          </div>

          <h1 className="hero-headline">
            SLURP. <span className="hero-headline-highlight">BITE.</span>
            <br />
            REPEAT.
          </h1>

          <p className="hero-description">
            Your little corner of Japan. From soul-warming ramen to fresh sushi rolls and crispy
            golden bites, discover your Japanese food obsession at Iroki Cafe.
          </p>

          <div className="hero-cta-group">
            <a
              href="#menu"
              className="btn btn-primary btn-lg"
              onClick={(e) => scrollToSection(e, 'menu')}
            >
              <span>Explore Our Menu</span>
              <ArrowRight size={19} />
            </a>
            <a
              href="#story"
              className="btn btn-outline btn-lg"
              onClick={(e) => scrollToSection(e, 'story')}
            >
              <Compass size={19} />
              <span>Discover Iroki</span>
            </a>
          </div>

          {/* Mini Editorial Stats / Street-Food Tags */}
          <div className="hero-street-tags">
            <div className="street-tag-item">
              <span className="street-tag-number">30+</span>
              <span className="street-tag-label">Street-Food Favorites</span>
            </div>
            <div className="street-tag-divider" aria-hidden="true" />
            <div className="street-tag-item">
              <span className="street-tag-number">100%</span>
              <span className="street-tag-label">Freshly Rolled & Simmered</span>
            </div>
            <div className="street-tag-divider" aria-hidden="true" />
            <div className="street-tag-item">
              <span className="street-tag-number">₹129</span>
              <span className="street-tag-label">Starting Menu Price</span>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Multi-Dish Food Collage */}
        <div className="hero-visual">
          {/* Decorative Rising Sun Circle & Pattern */}
          <div className="hero-sun-circle" aria-hidden="true" />
          <div className="hero-dotted-ring" aria-hidden="true" />

          {/* Main Centerpiece: Steaming Ramen Bowl */}
          <div className="hero-main-card">
            <img
              src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1000&q=85"
              alt="Steaming bowl of Iroki Cafe signature Japanese ramen with soft-boiled egg and noodles"
              className="hero-main-img"
              onError={(e) => {
                e.currentTarget.src = createFallbackFoodImage('Signature Ramen', 'Ramen');
              }}
            />
            <div className="hero-dish-caption">
              <span className="dish-caption-tag">
                <Flame size={13} /> HOT & STEAMING
              </span>
              <strong>Classic & Firecracker Ramen</strong>
              <span>Rich 6-hour broth • Artisan noodles</span>
            </div>
          </div>

          {/* Overlapping Card 1: Hand-Rolled Sushi */}
          <div className="hero-float-card hero-float-sushi">
            <img
              src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80"
              alt="Freshly rolled Japanese sushi maki and signature rolls"
              className="hero-float-img"
              onError={(e) => {
                e.currentTarget.src = createFallbackFoodImage('Fresh Sushi Rolls', 'Sushi');
              }}
            />
            <div className="hero-float-meta">
              <span className="float-jp" aria-hidden="true">
                寿司ロール
              </span>
              <strong>Fresh Sushi Rolls</strong>
              <span className="float-price">From ₹199</span>
            </div>
          </div>

          {/* Overlapping Card 2: Crispy Golden Karaage Fried Chicken */}
          <div className="hero-float-card hero-float-chicken">
            <img
              src="https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80"
              alt="Crispy golden Japanese karaage fried chicken bites"
              className="hero-float-img"
              onError={(e) => {
                e.currentTarget.src = createFallbackFoodImage('Japanese Karaage', 'Fried Chicken');
              }}
            />
            <div className="hero-float-meta">
              <span className="float-jp" aria-hidden="true">
                名物唐揚げ
              </span>
              <strong>Crispy Karaage</strong>
              <span className="float-price">From ₹199</span>
            </div>
          </div>

          {/* Japanese Hanko Stamp Seal */}
          <div className="hero-hanko-stamp" aria-hidden="true">
            <div className="hanko-inner">
              <span>美味</span>
              <small>IROKI</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
