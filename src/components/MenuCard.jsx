import React, { useState } from 'react';
import { Plus, Flame, Star, Check, Info } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { createFallbackFoodImage } from '../data/menuItems';

export default function MenuCard({ item }) {
  const { addToCart, getItemQuantity } = useCart();

  // Support items with selectable preparation variants (e.g., Shoyu Ramen, Creamy Tantanmen)
  const initialVariant = item.variants
    ? item.variants.find((v) => v.id === item.defaultVariant) || item.variants[0]
    : null;

  const [selectedVariant, setSelectedVariant] = useState(initialVariant);
  const [justAdded, setJustAdded] = useState(false);

  const effectiveIsVeg = selectedVariant ? selectedVariant.isVeg : item.isVeg;
  const qtyInCart = getItemQuantity(item.id, selectedVariant ? selectedVariant.label : null);

  const handleAdd = () => {
    addToCart(item, selectedVariant);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 650);
  };

  return (
    <article className="menu-card">
      {/* Image Header */}
      <div className="menu-card-media">
        <img
          src={item.image}
          alt={`${item.name} - ${item.category} at Iroki Cafe`}
          className="menu-card-img"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = createFallbackFoodImage(item.name, item.category);
          }}
        />

        {/* Top-Left Badges: Spicy / Bestseller / Feature */}
        <div className="menu-card-badges">
          {item.isSpicy && (
            <span className="badge-pill badge-spicy">
              <Flame size={12} />
              <span>SPICY</span>
            </span>
          )}
          {item.isBestseller && (
            <span className="badge-pill badge-bestseller">
              <Star size={12} />
              <span>{item.badge || 'BESTSELLER'}</span>
            </span>
          )}
          {!item.isSpicy && !item.isBestseller && item.badge && (
            <span className="badge-pill badge-tag">{item.badge}</span>
          )}
        </div>

        {/* Top-Right Veg / Non-Veg Dietary Indicator */}
        <div
          className={`dietary-pill ${effectiveIsVeg ? 'dietary-veg' : 'dietary-nonveg'}`}
          title={effectiveIsVeg ? 'Vegetarian Preparation' : 'Non-Vegetarian Preparation'}
        >
          <span className="dietary-symbol" aria-hidden="true">
            <span className="dietary-dot" />
          </span>
          <span className="dietary-text">{effectiveIsVeg ? 'VEG' : 'NON-VEG'}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="menu-card-body">
        <div className="menu-card-meta-row">
          <span className="menu-card-category">{item.category}</span>
          <span className="menu-card-price">₹{item.price}</span>
        </div>

        <h3 className="menu-card-title">{item.name}</h3>

        <p className="menu-card-desc">{item.description}</p>

        {/* Optional Variant Selector (for Shoyu Ramen & Creamy Tantanmen Ramen) */}
        {item.variants && (
          <div className="menu-variant-selector" role="group" aria-label={`Choose preparation for ${item.name}`}>
            <span className="variant-label">Preparation:</span>
            <div className="variant-pills">
              {item.variants.map((variant) => {
                const isSelected = selectedVariant?.id === variant.id;
                return (
                  <button
                    key={variant.id}
                    type="button"
                    className={`variant-pill-btn ${isSelected ? 'variant-pill-active' : ''}`}
                    onClick={() => setSelectedVariant(variant)}
                    aria-pressed={isSelected}
                  >
                    <span
                      className={`mini-diet-dot ${variant.isVeg ? 'dot-veg' : 'dot-nonveg'}`}
                      aria-hidden="true"
                    />
                    {variant.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Ingredient & Allergen Note */}
        {item.allergens && (
          <div className="menu-card-allergens">
            <Info size={13} className="allergen-icon" aria-hidden="true" />
            <span>{item.allergens}</span>
          </div>
        )}

        {/* Card Footer: Price & Add + CTA */}
        <div className="menu-card-footer">
          <div className="menu-card-price-block">
            <span className="price-caption">Price</span>
            <strong className="price-amount">₹{item.price}</strong>
          </div>

          <button
            type="button"
            className={`add-to-cart-btn ${justAdded ? 'btn-added-flash' : ''} ${
              qtyInCart > 0 ? 'has-qty' : ''
            }`}
            onClick={handleAdd}
            aria-label={`Add ${item.name}${
              selectedVariant ? ` (${selectedVariant.label})` : ''
            } to cart for ₹${item.price}`}
          >
            {justAdded ? (
              <>
                <Check size={16} strokeWidth={2.6} />
                <span>Added</span>
              </>
            ) : (
              <>
                <span>Add</span>
                <Plus size={16} strokeWidth={2.6} />
                {qtyInCart > 0 && <span className="in-cart-qty-pill">{qtyInCart}</span>}
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
