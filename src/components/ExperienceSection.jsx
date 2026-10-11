import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { createFallbackFoodImage } from '../data/menuItems';

export default function ExperienceSection() {
  const scrollToMenu = (e) => {
    e.preventDefault();
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="experience-section" aria-label="Japanese Food Experience">
      <div className="container">
        <div className="experience-banner">
          {/* Decorative Japanese Watermark */}
          <div className="experience-bg-jp" aria-hidden="true">
            こんにちは • 美味しい時間
          </div>

          <div className="experience-copy">
            <div className="experience-badge">
              <Sparkles size={14} />
              <span>TOKYO STREET TABLE EXPERIENCE</span>
            </div>

            <h2 className="experience-headline">
              GOOD FOOD. GOOD MOOD.{' '}
              <span className="experience-headline-accent">KONNICHIWA!</span>
            </h2>

            <p className="experience-subtext">
              Come hungry. Leave happy. Find your next favorite Japanese-inspired bite at Iroki
              Cafe.
            </p>

            <div className="experience-actions">
              <a href="#menu" className="btn btn-primary btn-lg" onClick={scrollToMenu}>
                <span>Find Your Favorites</span>
                <ArrowUpRight size={20} />
              </a>
              <div className="experience-stamp-note" aria-hidden="true">
                <span className="stamp-kanji">最高</span>
                <span className="stamp-text">SLURP • CRUNCH • SHARE</span>
              </div>
            </div>
          </div>

          <div className="experience-visual-col">
            <div className="experience-photo-frame">
              <img
                src="https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=1000&q=85"
                alt="Steaming spicy Japanese ramen bowl and street-food spread at Iroki Cafe"
                className="experience-main-photo"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = createFallbackFoodImage(
                    'Good Food. Good Mood.',
                    'Iroki Cafe'
                  );
                }}
              />
              <div className="experience-floating-sticker">
                <span className="sticker-jp" aria-hidden="true">
                  熱々！
                </span>
                <strong>Served Piping Hot</strong>
                <span>Fresh to your table</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
