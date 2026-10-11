import React from 'react';
import { ArrowRight, CheckCircle2, Utensils } from 'lucide-react';
import { createFallbackFoodImage } from '../data/menuItems';

export default function About() {
  const scrollToMenu = (e) => {
    e.preventDefault();
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="story" className="about-section">
      <div className="container about-grid">
        {/* Left Side: Editorial Photo Composition + Seigaiha Wave Pattern */}
        <div className="about-visual">
          <div className="about-wave-pattern" aria-hidden="true" />
          <div className="about-photo-main">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=85"
              alt="Vibrant Japanese street-food table experience at Iroki Cafe"
              onError={(e) => {
                e.currentTarget.src = createFallbackFoodImage('Iroki Cafe Experience', 'Our Story');
              }}
            />
          </div>
          <div className="about-photo-secondary">
            <img
              src="https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=600&q=80"
              alt="Hand-crafted Crispy Tempura Sushi Roll at Iroki Cafe"
              onError={(e) => {
                e.currentTarget.src = createFallbackFoodImage('Crispy Tempura Roll', 'Sushi');
              }}
            />
          </div>
          <div className="about-experience-badge">
            <span className="exp-badge-jp" aria-hidden="true">
              東京の情熱
            </span>
            <strong>Tokyo Street Spirit</strong>
            <span>Modern Urban Cafe</span>
          </div>
        </div>

        {/* Right Side: Story Copy, Brand Ethos & Orange CTA */}
        <div className="about-content">
          <div className="section-eyebrow">
            <Utensils size={15} />
            <span>KONNICHIWA, FOODIE!</span>
            <span className="eyebrow-jp" aria-hidden="true">
              こんにちは
            </span>
          </div>

          <h2 className="section-heading">A LITTLE TASTE OF JAPAN</h2>

          <p className="about-lead-text">
            At Iroki Cafe, we bring the energy of Japanese food culture to your table. Think
            comforting ramen bowls, beautifully rolled sushi, and crispy bites made for sharing.
            Whether you&apos;re here for a quick lunch or a full-on food adventure, there&apos;s
            always something worth coming back for.
          </p>

          <div className="about-brand-message">
            <p>
              Inspired by bustling Tokyo yokocho alleys and lively contemporary neighborhood cafes,
              we craft every bowl, roll, and golden bite with bold umami flavors, vibrant textures,
              and zero pretension—just seriously delicious food served warm and fast.
            </p>
          </div>

          <ul className="about-pillars">
            <li>
              <CheckCircle2 size={18} className="pillar-icon" />
              <span>Rich, slow-simmered broths &amp; springy artisan ramen noodles</span>
            </li>
            <li>
              <CheckCircle2 size={18} className="pillar-icon" />
              <span>Freshly rolled maki, tempura rolls &amp; signature sauces</span>
            </li>
            <li>
              <CheckCircle2 size={18} className="pillar-icon" />
              <span>Vegetarian &amp; non-vegetarian favorites for every craving</span>
            </li>
          </ul>

          <div className="about-cta-wrap">
            <a href="#menu" className="btn btn-primary btn-lg" onClick={scrollToMenu}>
              <span>Taste the Menu</span>
              <ArrowRight size={19} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
