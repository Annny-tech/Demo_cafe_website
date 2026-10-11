import React, { useState, useEffect } from 'react';
import { Camera, Maximize2, X } from 'lucide-react';
import { GALLERY_IMAGES, createFallbackFoodImage } from '../data/menuItems';

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedPhoto(null);
      }
    };
    if (selectedPhoto) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto]);

  return (
    <section className="gallery-section" aria-label="Food and Cafe Gallery">
      <div className="container">
        <div className="section-header-center">
          <div className="section-eyebrow">
            <Camera size={15} />
            <span>VISUAL APPETITE</span>
            <span className="eyebrow-jp" aria-hidden="true">
              ギャラリー
            </span>
          </div>
          <h2 className="section-heading">FEAST YOUR EYES</h2>
          <p className="section-subheading">
            A glimpse inside Iroki Cafe—where steaming bowls, crisp golden bites, and Tokyo street
            energy meet.
          </p>
        </div>

        <div className="gallery-bento-grid">
          {GALLERY_IMAGES.map((item) => (
            <div
              key={item.id}
              className={`gallery-tile gallery-span-${item.span}`}
              onClick={() => setSelectedPhoto(item)}
              role="button"
              tabIndex={0}
              aria-label={`View larger photo of ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedPhoto(item);
                }
              }}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="gallery-img"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = createFallbackFoodImage(item.title, item.category);
                }}
              />
              <div className="gallery-overlay">
                <div className="gallery-overlay-top">
                  <span className="gallery-jp-tag" aria-hidden="true">
                    {item.jp}
                  </span>
                  <span className="gallery-zoom-icon" aria-hidden="true">
                    <Maximize2 size={16} />
                  </span>
                </div>
                <div className="gallery-overlay-bottom">
                  <span className="gallery-cat-label">{item.category}</span>
                  <h3 className="gallery-tile-title">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="gallery-lightbox-backdrop"
          onClick={() => setSelectedPhoto(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.title}
        >
          <div
            className="gallery-lightbox-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close photo preview"
            >
              <X size={20} />
            </button>
            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.alt}
              className="lightbox-img"
              onError={(e) => {
                e.currentTarget.src = createFallbackFoodImage(
                  selectedPhoto.title,
                  selectedPhoto.category
                );
              }}
            />
            <div className="lightbox-caption">
              <div>
                <span className="lightbox-category">{selectedPhoto.category}</span>
                <h4>{selectedPhoto.title}</h4>
              </div>
              <span className="lightbox-jp" aria-hidden="true">
                {selectedPhoto.jp}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
