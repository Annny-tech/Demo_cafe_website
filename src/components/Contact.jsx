import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Instagram,
  Send,
  Heart,
  MessageCircle,
  Bookmark,
  CheckCircle2,
  X,
} from 'lucide-react';
import { createFallbackFoodImage } from '../data/menuItems';

/**
 * Easy-to-replace contact configuration placeholders.
 * Replace these values with your official cafe details before going live.
 */
export const CONTACT_PLACEHOLDERS = {
  address: 'Add your cafe address here.',
  phone: '+91 XXXXX XXXXX',
  openingHours: 'Add opening hours here (e.g., Mon – Sun: XX:XX AM – XX:XX PM)',
  email: 'add-your-email@domain.com',
  instagramHandle: '@your_instagram_handle',
  instagramUrl: '#contact',
};

export default function Contact() {
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [formState, setFormState] = useState({ name: '', contact: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [likedPost, setLikedPost] = useState(false);

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', contact: '', message: '' });
      setShowInquiryModal(false);
    }, 2200);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header-center">
          <div className="section-eyebrow">
            <MapPin size={15} />
            <span>VISIT OR REACH OUT</span>
            <span className="eyebrow-jp" aria-hidden="true">
              アクセス • 連絡先
            </span>
          </div>
          <h2 className="section-heading">COME SAY KONNICHIWA!</h2>
          <p className="section-subheading">
            Good food is better when shared. We&apos;d love to see you at Iroki Cafe.
          </p>
        </div>

        <div className="contact-layout-grid">
          {/* Left Column: Contact Details + Stylized Map Placeholder */}
          <div className="contact-info-panel">
            <div className="contact-cards-list">
              <div className="contact-info-item">
                <div className="contact-icon-wrap" aria-hidden="true">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="contact-item-label">Cafe Location</span>
                  <p className="contact-item-value">{CONTACT_PLACEHOLDERS.address}</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-wrap" aria-hidden="true">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="contact-item-label">Phone Number</span>
                  <p className="contact-item-value">{CONTACT_PLACEHOLDERS.phone}</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-wrap" aria-hidden="true">
                  <Clock size={20} />
                </div>
                <div>
                  <span className="contact-item-label">Opening Hours</span>
                  <p className="contact-item-value">{CONTACT_PLACEHOLDERS.openingHours}</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-wrap" aria-hidden="true">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="contact-item-label">Email Address</span>
                  <p className="contact-item-value">{CONTACT_PLACEHOLDERS.email}</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-wrap" aria-hidden="true">
                  <Instagram size={20} />
                </div>
                <div>
                  <span className="contact-item-label">Instagram</span>
                  <p className="contact-item-value">
                    <a
                      href={CONTACT_PLACEHOLDERS.instagramUrl}
                      className="contact-social-link"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowInquiryModal(true);
                      }}
                    >
                      {CONTACT_PLACEHOLDERS.instagramHandle} (Add Instagram link here)
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Map Placeholder Card */}
            <div className="map-placeholder-card" aria-label="Location Map Placeholder">
              <div className="map-grid-bg" aria-hidden="true">
                <div className="map-road map-road-h1" />
                <div className="map-road map-road-h2" />
                <div className="map-road map-road-v1" />
                <div className="map-road map-road-v2" />
              </div>
              <div className="map-pin-callout">
                <span className="map-pulse-ring" aria-hidden="true" />
                <div className="map-pin-badge">
                  <MapPin size={18} />
                </div>
                <div className="map-pin-text">
                  <strong>IROKI CAFE LOCATION PIN</strong>
                  <span>Map placeholder — embed Google Maps or address coordinates here</span>
                </div>
              </div>
            </div>

            <div className="contact-cta-row">
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={() => setShowInquiryModal(true)}
              >
                <Send size={18} />
                <span>Get in Touch</span>
              </button>
              <span className="contact-replace-hint">
                * Placeholder contact fields ready to customize
              </span>
            </div>
          </div>

          {/* Right Column: Instagram-Style Visual Element */}
          <div className="contact-insta-col">
            <div className="insta-visual-card">
              {/* Top Profile Header */}
              <div className="insta-card-header">
                <div className="insta-avatar-group">
                  <div className="insta-avatar-ring">
                    <span className="insta-avatar-logo">IC</span>
                  </div>
                  <div>
                    <strong className="insta-username">iroki.cafe</strong>
                    <span className="insta-location-tag">
                      Iroki Cafe • Japanese Street Food
                    </span>
                  </div>
                </div>
                <span className="insta-badge-pill">
                  <Instagram size={14} /> Follow Vibe
                </span>
              </div>

              {/* Visual Grid Inside Instagram Card */}
              <div className="insta-photo-collage">
                <div className="insta-main-shot">
                  <img
                    src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=80"
                    alt="Steaming Ramen Bowl on Iroki Cafe social feed"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = createFallbackFoodImage('Iroki Ramen', 'Ramen');
                    }}
                  />
                </div>
                <div className="insta-side-shots">
                  <img
                    src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=500&q=80"
                    alt="Fresh sushi rolls on Iroki Cafe social feed"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = createFallbackFoodImage('Iroki Sushi', 'Sushi');
                    }}
                  />
                  <img
                    src="https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=500&q=80"
                    alt="Golden Japanese Karaage on Iroki Cafe social feed"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = createFallbackFoodImage('Karaage', 'Fried Chicken');
                    }}
                  />
                </div>
              </div>

              {/* Social Interaction Bar */}
              <div className="insta-card-footer">
                <div className="insta-actions-row">
                  <div className="insta-left-icons">
                    <button
                      type="button"
                      className={`insta-icon-btn ${likedPost ? 'insta-liked' : ''}`}
                      onClick={() => setLikedPost((prev) => !prev)}
                      aria-label={likedPost ? 'Unlike post' : 'Like post'}
                    >
                      <Heart size={20} fill={likedPost ? '#D92D20' : 'none'} />
                    </button>
                    <button
                      type="button"
                      className="insta-icon-btn"
                      onClick={() => setShowInquiryModal(true)}
                      aria-label="Send a message"
                    >
                      <MessageCircle size={20} />
                    </button>
                  </div>
                  <Bookmark size={20} className="insta-bookmark" />
                </div>

                <p className="insta-caption">
                  <strong>iroki.cafe</strong> Slurp, bite, repeat! Tag us in your ramen pulls &amp;
                  sushi spreads with <span className="insta-hashtag">#IrokiCafe</span>{' '}
                  <span className="insta-hashtag">#SlurpBiteRepeat</span> 🍜🍣🔥
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive "Get in Touch" Demo Modal */}
      {showInquiryModal && (
        <div
          className="modal-backdrop"
          onClick={() => setShowInquiryModal(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="inquiry-modal-title"
        >
          <div className="inquiry-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="inquiry-modal-header">
              <div>
                <span className="modal-eyebrow">SAY KONNICHIWA</span>
                <h3 id="inquiry-modal-title">Get in Touch with Iroki Cafe</h3>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setShowInquiryModal(false)}
                aria-label="Close contact dialog"
              >
                <X size={20} />
              </button>
            </div>

            {submitted ? (
              <div className="inquiry-success-box">
                <CheckCircle2 size={42} className="success-check-icon" />
                <h4>Arigato! Message Received (Demo)</h4>
                <p>
                  This is a frontend demo confirmation. When connected to your cafe&apos;s email or
                  booking service, guest inquiries will be delivered directly to your team.
                </p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="inquiry-form">
                <div className="form-group">
                  <label htmlFor="guest-name">Your Name</label>
                  <input
                    id="guest-name"
                    type="text"
                    required
                    placeholder="e.g. Aarav Sharma"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="guest-contact">Phone or Email</label>
                  <input
                    id="guest-contact"
                    type="text"
                    required
                    placeholder="e.g. +91 XXXXX XXXXX or name@example.com"
                    value={formState.contact}
                    onChange={(e) => setFormState({ ...formState, contact: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="guest-message">How can we help?</label>
                  <textarea
                    id="guest-message"
                    rows={3}
                    required
                    placeholder="Table inquiry, group gathering, or feedback..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-full">
                  <Send size={17} />
                  <span>Send Message (Demo)</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
