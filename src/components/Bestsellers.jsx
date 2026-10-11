import React, { useState } from 'react';
import { Award, Flame, ShoppingBag, Check } from 'lucide-react';
import { BESTSELLER_ITEMS, MENU_ITEMS, createFallbackFoodImage } from '../data/menuItems';
import { useCart } from '../context/CartContext';

export default function Bestsellers() {
  const { addToCart, getItemQuantity } = useCart();
  const [addedId, setAddedId] = useState(null);

  const featuredList = BESTSELLER_ITEMS.map((entry) => {
    const item = MENU_ITEMS.find((m) => m.id === entry.itemId);
    return item ? { ...item, ...entry } : null;
  }).filter(Boolean);

  const handleAddFeatured = (item) => {
    addToCart(item);
    setAddedId(item.id);
    setTimeout(() => {
      setAddedId((prev) => (prev === item.id ? null : prev));
    }, 700);
  };

  return (
    <section id="bestsellers" className="bestsellers-section">
      <div className="container">
        <div className="section-header-center">
          <div className="section-eyebrow eyebrow-dark">
            <Award size={15} />
            <span>MOST ORDERED AT IROKI</span>
            <span className="eyebrow-jp" aria-hidden="true">
              大人気メニュー
            </span>
          </div>
          <h2 className="section-heading">THE CROWD PLEASERS</h2>
          <p className="section-subheading">
            Tried, tested, and obsessed over. Start your Iroki table with our four undisputed icons.
          </p>
        </div>

        <div className="bestsellers-grid">
          {featuredList.map((item, idx) => {
            const qty = getItemQuantity(item.id);
            const isAdded = addedId === item.id;

            return (
              <article key={item.id} className="bestseller-card">
                <div className="bestseller-media">
                  <img
                    src={item.image}
                    alt={`${item.name} - Featured bestseller at Iroki Cafe`}
                    className="bestseller-img"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = createFallbackFoodImage(item.name, item.category);
                    }}
                  />

                  <div className="bestseller-rank" aria-hidden="true">
                    0{idx + 1}
                  </div>

                  <div className="bestseller-top-badges">
                    <span className="bestseller-feature-tag">{item.featuredTag}</span>
                    {item.isSpicy && (
                      <span className="badge-pill badge-spicy">
                        <Flame size={12} />
                        <span>SPICY</span>
                      </span>
                    )}
                  </div>

                  <div className="bestseller-price-tag">₹{item.price}</div>
                </div>

                <div className="bestseller-content">
                  <div className="bestseller-meta">
                    <span className="bestseller-cat">{item.category}</span>
                    <span className="bestseller-jp" aria-hidden="true">
                      {item.jpTag}
                    </span>
                  </div>

                  <h3 className="bestseller-title">{item.name}</h3>
                  <p className="bestseller-quote">{item.highlightQuote}</p>
                  <p className="bestseller-desc">{item.description}</p>

                  <div className="bestseller-footer">
                    <div
                      className={`dietary-pill-inline ${
                        item.isVeg ? 'dietary-veg' : 'dietary-nonveg'
                      }`}
                    >
                      <span className="dietary-symbol" aria-hidden="true">
                        <span className="dietary-dot" />
                      </span>
                      <span>{item.isVeg ? 'VEG' : 'NON-VEG'}</span>
                    </div>

                    <button
                      type="button"
                      className={`btn btn-primary bestseller-add-btn ${
                        isAdded ? 'btn-added-flash' : ''
                      }`}
                      onClick={() => handleAddFeatured(item)}
                    >
                      {isAdded ? (
                        <>
                          <Check size={17} />
                          <span>Added to Bag</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag size={17} />
                          <span>Add to Cart</span>
                          {qty > 0 && <span className="bestseller-qty-badge">{qty}</span>}
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
