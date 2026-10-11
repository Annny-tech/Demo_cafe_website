import React from 'react';
import { Soup, Sparkles, Flame, Heart } from 'lucide-react';

const HIGHLIGHTS = [
  {
    id: 'flavors',
    icon: Soup,
    title: 'Authentic Japanese-Inspired Flavors',
    subtitle: 'Umami-rich broths, tare glazes & street seasonings',
    jp: '本格の味',
  },
  {
    id: 'fresh',
    icon: Sparkles,
    title: 'Freshly Prepared Every Day',
    subtitle: 'Hand-rolled sushi, crisp veggies & house sauces',
    jp: '毎日新鮮',
  },
  {
    id: 'crispy',
    icon: Flame,
    title: 'Crispy, Crunchy, Irresistible',
    subtitle: 'Double-fried golden karaage, katsu & tempura',
    jp: 'サクサク食感',
  },
  {
    id: 'lovers',
    icon: Heart,
    title: 'Made for Food Lovers',
    subtitle: 'Generous portions crafted for sharing & slurping',
    jp: '食通のために',
  },
];

export default function BrandHighlights() {
  return (
    <section className="highlights-section" aria-label="Brand Highlights">
      <div className="container">
        <div className="highlights-bar">
          {HIGHLIGHTS.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.id} className="highlight-card">
                <div className="highlight-icon-box" aria-hidden="true">
                  <IconComponent size={22} strokeWidth={2.2} />
                </div>
                <div className="highlight-content">
                  <span className="highlight-jp" aria-hidden="true">
                    {item.jp}
                  </span>
                  <h2 className="highlight-title">{item.title}</h2>
                  <p className="highlight-sub">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
